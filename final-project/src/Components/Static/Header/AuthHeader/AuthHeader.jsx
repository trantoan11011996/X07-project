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
        style={{ marginBottom: 15, height: 70, boxShadow: "2px 5px 7px -1px rgba(184,165,184,1)" , fontSize:"25px" }}
      >
         <Menu.Item key={"/"}>
              <img
                src="logo192.png"
                alt="logo"
                style={{ marginLeft: 15, height: 60, marginTop: 5 }}
              ></img>
          </Menu.Item>
          <div style={{ width: 1800 }}></div>
        {isAuthenticated ? (
          <></>
        ) : (
          <>
          <div style={{ width: 1600 }}></div>
            <Menu.Item key="/login" style={{marginTop: 12}} >Đăng nhập</Menu.Item>
            <Menu.Item key="/register"  style={{marginTop: 12}} >Đăng ký</Menu.Item>
           
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
          <UserOutlined /> Hồ Sơ
        </Menu.Item>
        <Menu.Item key="/update_password">
            <KeyOutlined /> Cập nhật mật khẩu
        </Menu.Item>
        <Menu.Item key={"/candidate"}>
          <FormOutlined /> Cập nhật thông tin thí sinh
        </Menu.Item>
        <Menu.Item key={"/recruiter"}>
          <FormOutlined /> Cập nhật thông tin nhà tuyển dụng
        </Menu.Item>
        <Menu.Item>
          <LogoutOutlined /> Đăng xuất
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
