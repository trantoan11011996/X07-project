import React, { useContext, useEffect } from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  FormOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import InfoUserDropDown from "../InfoUserDropdown/InfoUserDropdown";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";
const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const { showLogin, logOutUser, currentUser} = useContext(UserContext);
  console.log("current",currentUser);
  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  const handleLogOutUser = () => {
    logOutUser();
    navigate("/");
    dispatch(logoutUser())
  };
  console.log(isAuthenticated);
  return (
    <div>
      <Menu
        theme="white"
        mode={mode}
        onClick={handleMenuClick}
        style={{
          marginBottom: 15,
          height: 60,
          boxShadow: "2px 5px 7px -1px rgba(184,165,184,1)",
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
        {(isAuthenticated || showLogin == false || currentUser?.token) ? (
          <>
            <Menu
              theme="white"
              mode={mode}
              onClick={handleMenuClick}
              style={{}}
            >
              <Menu.Item key="/company" style={{ marginTop: 9 }}>
                Công ty
              </Menu.Item>
              <Menu.Item key="/job&location" style={{ marginTop: 9 }}>
                Ngành nghề/Địa điểm
              </Menu.Item>
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
                  <KeyOutlined /> Cập nhật mật khẩu người dùng
                </Menu.Item>
                {((currentUser?.role === "candidate") || (user?.role === "candidate")) && (
                  <Menu.Item key={"/candidate"}>
                    <FormOutlined /> Cập nhật thông tin ứng viên
                  </Menu.Item>
                )}
                { ((currentUser?.role === "recruiter" ) ||
                  (user?.role === "recruiter")) && (
                    <Menu.Item key={"/recruiter"}>
                      <FormOutlined /> Cập nhật thông tin nhà tuyển dụng
                    </Menu.Item>
                  )}

                <Menu.Item onClick={handleLogOutUser} key={"/"}>
                  <LogoutOutlined /> Đăng xuất
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </>
        ) : (
          <>
            <div style={{ width: 1600 }}></div>
            <Menu.Item key="/company" style={{ marginTop: 9 }}>
              Công ty
            </Menu.Item>
            <Menu.Item key="/job&location" style={{ marginTop: 9 }}>
              Ngành nghề/Địa điểm
            </Menu.Item>
            <Menu.Item key="/login" style={{ marginTop: 9 }}>
              Đăng nhập
            </Menu.Item>
            <Menu.Item key="/register" style={{ marginTop: 9 }}>
              Đăng ký
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default AuthHeader;
