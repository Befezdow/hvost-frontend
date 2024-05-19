const StorageKeys = {
  ACCESS_TOKEN: "auth.token.access",
  ACCESS_TOKEN_EXPIRES_IN: "auth.token.accessExpiresIn",
};

class ClientStorage {
  static clearTokens() {
    localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(StorageKeys.ACCESS_TOKEN_EXPIRES_IN);
  }

  static storeTokens(accessToken, accessTokenExpiresIn) {
    localStorage.setItem(StorageKeys.ACCESS_TOKEN, accessToken);
    localStorage.setItem(
      StorageKeys.ACCESS_TOKEN_EXPIRES_IN,
      accessTokenExpiresIn.toISOString()
    );
  }

  static get accessToken() {
    return localStorage.getItem(StorageKeys.ACCESS_TOKEN);
  }

  static get accessTokenExpiresIn() {
    const rawResult = localStorage.getItem(StorageKeys.ACCESS_TOKEN_EXPIRES_IN);
    return rawResult != null ? new Date(rawResult) : null;
  }
}

export default ClientStorage;