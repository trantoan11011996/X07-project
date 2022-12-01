import React, { useContext, useEffect } from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  FormOutlined,
  LogoutOutlined,
  BankOutlined,
  SearchOutlined,
  GlobalOutlined,
  LoginOutlined ,
  AccountBookOutlined 
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import InfoUserDropDown from "../InfoUserDropdown/InfoUserDropdown";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";
const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const { showLogin, logOutUser, currentUser } = useContext(UserContext);
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  const handleLogOutUser = () => {
    logOutUser();
    navigate("/login");
    dispatch(logoutUser(navigate));
  };
  return (
    <div>
      <Menu
        theme="white"
        mode={mode}
        onClick={handleMenuClick}
        style={{
          marginBottom: 15,
          height: 60,
          fontSize: "18px",
        }}
      >
        <Menu.Item key={"/"}>
          <img
            src="logo192.png"
            alt="logo"
            style={{ marginLeft: 15, height: 50, marginTop: 5 }}
          ></img>
        </Menu.Item>
        <div style={{ width: 1400 }}></div>
        <Menu.Item key="/company" style={{ marginTop: 9 }}>
          <BankOutlined  style={{ fontSize: '130%' , marginRight: '6px' }}/>
          Công ty
        </Menu.Item>
        <Menu.Item key="/job&location" style={{ marginTop: 9 }}>
          <GlobalOutlined  style={{ fontSize: '130%' , marginRight: '6px' }}/>
          Ngành nghề/Địa điểm
        </Menu.Item>
        {isAuthenticated || showLogin == false || currentUser?.token ? (
          <>
            <Menu.SubMenu
              title={
                <>
                  <Avatar icon={<UserOutlined />} />
                </>
              }
              style={{ marginTop: 9 }}>
              <Menu.Item>
                <UserOutlined /> Hồ Sơ
              </Menu.Item>
              <Menu.Item key="/update_password">
                <KeyOutlined /> Cập nhật mật khẩu người dùng
              </Menu.Item>
              {(currentUser?.role === "candidate" ||
                user?.role === "candidate") && (
                <Menu.Item key={"/candidate"}>
                  <FormOutlined /> Cập nhật thông tin ứng viên
                </Menu.Item>
              )}
              {(currentUser?.role === "recruiter" ||
                user?.role === "recruiter") && (
                <Menu.Item key={"/recruiter"}>
                  <FormOutlined /> Cập nhật thông tin nhà tuyển dụng
                </Menu.Item>
              )}

              <Menu.Item onClick={handleLogOutUser} key={"/"}>
                <LogoutOutlined /> Đăng xuất
              </Menu.Item>
            </Menu.SubMenu>
          </>
        ) : (
          <>
            <div style={{ width: 1600 }}></div>
            <Menu.Item key="/login" style={{ marginTop: 9 }}>
            <LoginOutlined style = {{ fontSize: '130%' , marginRight: '6px' }} />
              Đăng nhập
            </Menu.Item>
            <Menu.Item key="/register" style={{ marginTop: 9 }}>
            <AccountBookOutlined style={{ fontSize: '130%' , marginRight: '6px' }} />
              Đăng ký
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default AuthHeader;
