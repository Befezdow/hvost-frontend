export function createRestError(err) {
  if (!err.response) {
    if (err.message === "Network Error") {
      return new Error("Нет подключения к интернету");
    }
    return new Error(err.message ?? "Неизвестная ошибка");
  }

  const { status, data, config } = err.response;

  const result = new Error(data.message);
  result.name = "RestError";
  result.status = status;
  result.config = config;
  result.code = data.statusCode;
  return result;
}

export function isRequestAuthorized(url, method, authorizedRoutes) {
  for (const elem of authorizedRoutes) {
    const methodMatched = method.toLowerCase() === elem[0].toLowerCase();
    const urlMatched = elem[1].test(url);
    if (methodMatched && urlMatched) {
      return true;
    }
  }

  return false;
}
