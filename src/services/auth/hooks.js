import { useEffect, useState } from "react";
import AuthService from "./auth";

export const useProfileData = () => {
  const [profileData, setProfileData] = useState(AuthService.profileData);

  useEffect(() => {
    return AuthService.onProfileDataChange((data) => setProfileData(data));
  }, []);

  return profileData;
};

export const useIsAuthorized = () => {
  const profileData = useProfileData();
  return profileData != null;
};