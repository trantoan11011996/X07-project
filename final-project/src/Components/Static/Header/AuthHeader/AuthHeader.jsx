import React, { useContext, useEffect } from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  FormOutlined,
  LogoutOutlined,
  HomeOutlined,
  SearchOutlined,
  GlobalOutlined,
  LoginOutlined,
  AccountBookOutlined,
  DownOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import logo from "../../../../img/xcareerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import InfoUserDropDown from "../InfoUserDropdown/InfoUserDropdown";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";
const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const { showLogin, logOutUser, currentUser, setCurrentUser } =
    useContext(UserContext);
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
    <>
      {user || currentUser ? (
        <div>
          <Menu
            theme="white"
            mode={mode}
            onClick={handleMenuClick}
            style={{
              marginBottom: 10,
              height: 70,
              fontSize: "18px",
              paddingRight: "40px",
            }}
          >
            <Link to={"/"}>
              <Menu.Item>
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: 20, height: 50, marginTop: 10 }}
                ></img>
              </Menu.Item>
            </Link>
            <div style={{ width: 1400 }}></div>
            <Menu.Item key="/company" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <HomeOutlined
                  style={{
                    fontSize: "130%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Công ty
              </div>
            </Menu.Item>
            <Menu.Item key="/job&location" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <GlobalOutlined
                  style={{
                    fontSize: "130%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Ngành nghề/Địa điểm
              </div>
            </Menu.Item>
            {isAuthenticated || showLogin == false || currentUser?.token ? (
              <>
                <Menu.SubMenu
                  className="menu-login"
                  icon={
                    <span style={{ fontSize: "18px" }}>
                      <Avatar
                        shape="circle"
                        icon={<UserOutlined />}
                        style={{
                          marginRight: 12,
                          marginLeft: 12,
                          height: "30px",
                        }}
                      />
                      {currentUser?.info === "candidate" ||
                      user?.user?.role === "candidate"
                        ? `Ứng viên`
                        : `Nhà tuyển dụng`}
                      <DownOutlined className="icon-dropdown" />
                    </span>
                  }
                  style={{
                    marginTop: 8,
                    marginBottom: 5,
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    paddingLeft: 0,
                  }}
                >
                  <Menu.Item>
                    <UserOutlined /> Hồ Sơ
                  </Menu.Item>
                  <Menu.Item key="/update_info">
                    <KeyOutlined /> Cập nhật thông tin
                  </Menu.Item>
                  ''
                  {(currentUser?.user?.role == "recruiter" ||
                    currentUser?.role == "recruiter" ||
                    user?.user.role == "recruiter") && (
                    <Menu.Item key="">
                      <FileDoneOutlined /> Công việc đã đăng tuyển
                    </Menu.Item>
                  )}
                  {(currentUser?.user?.role == "candidate" ||
                    currentUser?.role == "candidate" ||
                    user?.user.role == "candidate") && (
                    <Menu.Item key="">
                      <FileDoneOutlined /> Công việc đã ứng tuyển
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
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <LoginOutlined
                      style={{
                        fontSize: "130%",
                        marginRight: "6px",
                        marginTop: 11.5,
                      }}
                    />
                    Đăng nhập
                  </div>
                </Menu.Item>
                <Menu.Item key="/register" style={{ marginTop: 9 }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <AccountBookOutlined
                      style={{
                        fontSize: "130%",
                        marginRight: "6px",
                        marginTop: 11.5,
                      }}
                    />
                    Đăng ký
                  </div>
                </Menu.Item>
              </>
            )}
          </Menu>
        </div>
      ) : (
        <div>
          <Menu
            theme="white"
            mode={mode}
            onClick={handleMenuClick}
            style={{
              marginBottom: 15,
              height: 60,
              fontSize: "18px",
              paddingRight: "40px",
            }}
          >
            <Link to={"/"}>
              <Menu.Item>
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: 20, height: 50, marginTop: 5 }}
                ></img>
              </Menu.Item>
            </Link>
            <div style={{ width: 1400 }}></div>
            <Menu.Item key="/company" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <HomeOutlined
                  style={{
                    fontSize: "110%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Công ty
              </div>
            </Menu.Item>
            <Menu.Item key="/job&location" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <GlobalOutlined
                  style={{
                    fontSize: "110%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Ngành nghề/Địa điểm
              </div>
            </Menu.Item>
            <div style={{ width: 1600 }}></div>
            <Menu.Item key="/login" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <LoginOutlined
                  style={{
                    fontSize: "110%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Đăng nhập
              </div>
            </Menu.Item>
            <Menu.Item key="/register" style={{ marginTop: 9 }}>
              <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"center"}}>
                <AccountBookOutlined
                  style={{
                    fontSize: "110%",
                    marginRight: "6px",
                    marginTop: 11.5,
                  }}
                />
                Đăng ký
              </div>
            </Menu.Item>
          </Menu>
        </div>
      )}
      {/* ------------------------------------------------------------------------ */}
    </>
  );
};

export default AuthHeader;
