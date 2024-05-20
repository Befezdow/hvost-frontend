import { EventEmitter } from "events";
import ClientStorage from "../clientStorage";
import { authorize, getProfile } from "./api";

class AuthService {
  static _profileData;
  static _eventEmitter = new EventEmitter();

  static _setProfileData(data) {
    AuthService._profileData = data;
    AuthService._eventEmitter.emit("event", data);
  }

  static async authorize(login, password) {
    if (AuthService.isAuthorized) {
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
    if (!AuthService.isAuthorized) {
      throw new Error("Already deauthorized");
    }

    // TODO: invoke method to close session on server
    AuthService._setProfileData(null);
  }

  static async loadProfile() {
    try {
      const profileData = await getProfile();
      AuthService._setProfileData(profileData);
    } catch (error) {
      // TODO: show load profile error
      console.log(error);
      return;
    }

    return AuthService._profileData;
  }

  static onProfileDataChange(handler) {
    AuthService._eventEmitter.on("event", handler);

    return () => AuthService._eventEmitter.off("event", handler);
  }

  static get isAuthorized() {
    return AuthService._profileData != null;
  }

  static get profileData() {
    return AuthService._profileData;
  }
}

export default AuthService;
