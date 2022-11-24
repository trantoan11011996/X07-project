import React from "react";
import { Menu } from "antd";
import {useNavigate } from "react-router-dom";
import InfoUserDropDown from "../InfoUserDropdown/InfoUserDropdown";
const AuthHeader = ({ mode }) => {
    const navigate = useNavigate();
    const handleMenuClick = ({ key }) => {
        if (key) {
          navigate(key);
        }
      };
  return (

    <div>

    <Menu theme="white" mode={mode} onClick={handleMenuClick} style={{marginBottom: 15, boxShadow: '0px 5px 5px 0px grey' }}>
        <Menu.Item><img src="logo192.png" alt="logo" style={{marginLeft: 15, height: 35}}></img></Menu.Item>
        <div style={{width:1400}}></div>
      <Menu.Item key="/login">Login</Menu.Item>
      <Menu.Item key="/register">Register</Menu.Item>
      {/* <Menu.Item> <InfoUserDropDown mode={"horizontal"}/></Menu.Item> cái này là drop dơn của info user */}
    </Menu>
   
    </div>
 
  );
};

export default AuthHeader;