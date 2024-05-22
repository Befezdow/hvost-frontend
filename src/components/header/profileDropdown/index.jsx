import React from "react";
import { Dropdown, Divider, theme } from "antd";
import { NavLink } from "react-router-dom";
import { ShelterName, UserIcon } from "./styled";

const { useToken } = theme;

const getProfileMenuItems = (handleLogout) => [
  {
    key: "1",
    label: <NavLink to="/personalAccount">Личный кабинет</NavLink>,
  },
  {
    key: "2",
    label: <div onClick={() => handleLogout()}>Выйти</div>,
  },
];

export const ProfileDropdown = ({ profileName, handleLogout }) => {
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <Dropdown
      menu={{ items: getProfileMenuItems(handleLogout) }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          <ShelterName>{profileName}</ShelterName>
          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu, { style: menuStyle })}
        </div>
      )}
      placement="bottom"
      trigger={["click"]}
      arrow
    >
      <UserIcon />
    </Dropdown>
  );
};
