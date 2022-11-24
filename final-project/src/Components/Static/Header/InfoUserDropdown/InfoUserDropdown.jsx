import React from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  FormOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const InfoUserDropDown = ({ mode }) => {
  const navigate = useNavigate();
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };

  return (
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

  );
};

export default InfoUserDropDown;
