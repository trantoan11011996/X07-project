import React from "react";
import { Menu } from "antd";
import {useNavigate } from "react-router-dom";
const AuthHeader = ({ mode }) => {
    const navigate = useNavigate();
    const handleMenuClick = ({ key }) => {
        if (key) {
          navigate(key);
        }
      };
  return (


    <Menu theme="dark" mode={mode} onClick={handleMenuClick}>
        <Menu.Item><img src="logo192.png" alt="logo" style={{height: 35}}></img></Menu.Item>
        <Menu.Item style={{width:800}}></Menu.Item>
    
      <Menu.Item key="/login">Login</Menu.Item>
      <Menu.Item key="/register">Register</Menu.Item>
    </Menu>
 
  );
};

export default AuthHeader;