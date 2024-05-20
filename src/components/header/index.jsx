import { AuthService, useProfileData } from "../../services/auth";
import ClientStorage from "../../services/clientStorage";
import logo from "../../assets/icons/logo.svg";
import { ProfileDropdown } from "./profileDropdown";
import { Root, Navigation, NavLink } from "./styled";

export const Header = () => {
  const profileData = useProfileData();

  const handleLogout = () => {
    AuthService.deauthorize();
    ClientStorage.clearTokens();
  };

  return (
    <Root>
      <img width={265} height={86} src={logo} alt="logo" />
      <Navigation>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/animals">Животные</NavLink>
        <NavLink to="/shelters">Приюты</NavLink>
      </Navigation>
      {profileData != null ? (
        <ProfileDropdown
          profileName={profileData.name}
          handleLogout={handleLogout}
        />
      ) : (
        <NavLink to="/login">Войти</NavLink>
      )}
    </Root>
  );
};
