import apiClient from "../apiClient";

export async function authorize(login, password) {
  const path = "/auth/login";
  const params = { login, password };
  return (await apiClient.post(path, params)).data;
}

export async function getProfile() {
  const path = "/auth/profile";
  return (await apiClient.get(path)).data;
}
