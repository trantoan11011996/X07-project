import React from "react";
import { Menu,Avatar } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  FormOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import InfoUserDropDown from "../InfoUserDropdown/InfoUserDropdown";
import { useSelector } from "react-redux";
const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  return (
    <div>
      <Menu
        theme="white"
        mode={mode}
        onClick={handleMenuClick}
        style={{ marginBottom: 15, boxShadow: "0px 5px 5px 0px grey" }}
      >
         <Menu.Item>
              <img
                src="logo192.png"
                alt="logo"
                style={{ marginLeft: 15, height: 35 }}
              ></img>
          </Menu.Item>
          <div style={{ width: 1800 }}></div>
        {isAuthenticated ? (
          <></>
        ) : (
          <>
          <div style={{ width: 1600 }}></div>
            <Menu.Item key="/login">Login</Menu.Item>
            <Menu.Item key="/register">Register</Menu.Item>
           
          </>
        )}

        {isAuthenticated && (
           <>
        <Menu theme="white" mode={mode} onClick={handleMenuClick} style={{}}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
          </>
        }
      >
        <Menu.Item>
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="/update_password">
            <KeyOutlined /> Update Password
        </Menu.Item>
        <Menu.Item>
          <FormOutlined /> Update Info
        </Menu.Item>
        <Menu.Item>
          <LogoutOutlined /> Log out
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
           </>
        )}
      </Menu>
    </div>
  );
};

export default AuthHeader;
