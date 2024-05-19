import ClientStorage from "../clientStorage";
import { authorize, getProfile } from "./api";

class AuthService {
  static _profileData;

  static isAuthorized() {
    return AuthService._profileData != null;
  }

  static async authorize(login, password) {
    if (AuthService.isAuthorized()) {
      throw new Error("Already authorized");
    }

    let accessToken, accessTokenExpiresIn;
    try {
      const result = await authorize(login, password);
      accessToken = result.accessToken;
      accessTokenExpiresIn = result.expiresAt;
    } catch (error) {
      // TODO: show auth error
      console.log(error);
      return;
    }

    ClientStorage.storeTokens(accessToken, new Date(accessTokenExpiresIn));

    return AuthService.loadProfile();
  }

  static deauthorize() {
    if (!AuthService.isAuthorized()) {
      throw new Error("Already deauthorized");
    }

    // TODO: invoke method to close session on server
    AuthService._profileData = null;
  }

  static async loadProfile() {
    try {
      AuthService._profileData = await getProfile();
    } catch (error) {
      // TODO: show load profile error
      console.log(error);
      return;
    }

    return AuthService._profileData;
  }

  static get profileData() {
    if (!AuthService.isAuthorized()) {
      throw new Error("Not authorized");
    }

    return AuthService._profileData;
  }
}

export default AuthService;
