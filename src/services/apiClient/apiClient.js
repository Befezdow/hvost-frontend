import axios from "axios";
import config from "../../config";
import ClientStorage from "../clientStorage";
import { AuthService } from "../auth";
import { createRestError, isRequestAuthorized } from "./utils";

const AUTHORIZED_ROUTES = [
  ["POST", /^\/animals\/create$/g],
  ["DELETE", /^\/animals\/[0-9a-fA-F]+$/g],
  ["GET", /^\/auth\/profile$/g],
];

const AUTH_HEADER_NAME = "Authorization";

const apiClient = axios.create({ baseURL: config.backendUrl });

async function onErrorInterceptor(error) {
  const status = error.response?.status;
  const { url, method } = error.response?.config ?? {};

  if (url == null || !isRequestAuthorized(url, method, AUTHORIZED_ROUTES)) {
    throw createRestError(error);
  }

  if (status === 401) {
    if (AuthService.isAuthorized()) {
      AuthService.deauthorize();
    }
    ClientStorage.clearTokens();
    throw Error("Сессия устарела - требуется авторизация");
  }

  if (error.response?.data && error.response.data instanceof Blob) {
    const data = error.response?.data;
    const textData = await data.text();
    error.response.data = JSON.parse(textData);
    throw createRestError(error);
  }

  throw createRestError(error);
}

async function onRequestInterceptor(clientConfig) {
  const { url, method } = clientConfig;

  if (url != null && !isRequestAuthorized(url, method, AUTHORIZED_ROUTES)) {
    clientConfig.headers[AUTH_HEADER_NAME] = undefined;
    return clientConfig;
  }

  const { accessToken, accessTokenExpiresIn } = ClientStorage;

  if (
    accessToken == null ||
    accessTokenExpiresIn == null ||
    new Date() >= new Date(accessTokenExpiresIn)
  ) {
    if (AuthService.isAuthorized()) {
      AuthService.deauthorize();
    }
    ClientStorage.clearTokens();
    throw Error("Сессия устарела - требуется авторизация");
  }

  clientConfig.headers[AUTH_HEADER_NAME] = `Bearer ${accessToken}`;
  return clientConfig;
}

apiClient.interceptors.response.use((response) => response, onErrorInterceptor);
apiClient.interceptors.request.use(onRequestInterceptor);

export default apiClient;
