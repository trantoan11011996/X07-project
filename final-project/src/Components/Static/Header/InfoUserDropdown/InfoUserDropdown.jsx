import React from "react";
import { Menu, Avatar} from "antd";
import { UserOutlined, KeyOutlined, FormOutlined } from "@ant-design/icons";
import {useNavigate } from "react-router-dom";

const InfoUserDropDown = ({ mode }) => {
    const navigate = useNavigate();
    const handleMenuClick = ({ key }) => {
        if (key) {
          navigate(key);
        }
      };


  return (
    <Menu theme="white" mode={mode} onClick={handleMenuClick} style={{ }}>
      <Menu.SubMenu
        title={
            <>
              <Avatar icon={<UserOutlined />} />
             
            </>
          }
      >
        <Menu.Item key="/">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="/UpdatePassword">
        <KeyOutlined /> Update Password
        </Menu.Item>
        <Menu.Item key="/">
        <FormOutlined /> Update Info
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default InfoUserDropDown;