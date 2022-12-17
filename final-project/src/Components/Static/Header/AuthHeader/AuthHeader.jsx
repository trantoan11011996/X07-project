import React, { useContext, useEffect } from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  toOutlined,
  FormOutlined,
  LogoutOutlined,
  HomeOutlined,
  SearchOutlined,
  GlobalOutlined,
  LoginOutlined,
  AccountBookOutlined,
  DownOutlined,
  FileDoneOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Nav, NavLink, Navbar, NavDropdown, Container } from "react-bootstrap";
import logo from "../../../../img/xcareerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./AuthHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";
const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const { showLogin, logOutUser, currentUser, setCurrentUser } =
    useContext(UserContext);
  const handleMenuClick = ({ to }) => {
    if (to) {
      navigate(to);
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
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <div className="navbar-brand">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: 20, height: 35, marginTop: 5 }}
                ></img>
              </Navbar.Brand>
            </div>

            <div className="middle"></div>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              data-bs-target="#navbarScroll"
            />

            <Navbar.Collapse id="navbarScroll">
              <div className="a-list">
                <Nav>
                  <NavLink as={Link} to={"/company"}>
                    <div className="nav-li">
                      <HomeOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "5px",
                          marginTop: 3,
                        }}
                      />
                      Công ty
                    </div>
                  </NavLink>
                  <NavLink as={Link} to={"/job&location"}>
                    <div className="nav-li">
                      <GlobalOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "5px",
                          marginTop: 3,
                        }}
                      />
                      Ngành nghề/Địa điểm
                    </div>
                  </NavLink>

                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
      Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">
      Something
    </NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">
      Separated link
    </NavDropdown.Item>
  </NavDropdown> * */}
                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>
          {isAuthenticated || showLogin == false || currentUser?.token ? (
            <>
              {/* <Menu.SubMenu
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
                    {currentUser?.role === "recruiter" ||
                    user?.role === "recruiter"
                      ? "Nhà tuyển dụng"
                      : "Ứng viên"}
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
                <Menu.Item to="/update_info">
                  <toOutlined /> Cập nhật thông tin
                </Menu.Item>
                ''
                {(currentUser?.role == "recruiter" ||
                  currentUser?.role == "recruiter" ||
                  user?.role == "recruiter") && (
                  <Menu.Item to="">
                    <FileDoneOutlined /> Công việc đã đăng tuyển
                  </Menu.Item>
                )}
                {(currentUser?.role === "candidate" ||
                  user?.role === "candidate") && (
                  <Menu.Item to="">
                    <FileDoneOutlined /> Công việc đã ứng tuyển
                  </Menu.Item>
                )}
                <Menu.Item onClick={handleLogOutUser} to={"/"}>
                  <LogoutOutlined /> Đăng xuất
                </Menu.Item>
              </Menu.SubMenu> */}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
               <NavLink as={Link} to={"/login"}>
                  <div className="nav-li">
                    <LoginOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "5px",
                        marginTop: 3,
                      }}
                    />
                    Đăng Nhập
                  </div>
                </NavLink>
                <NavLink as={Link} to={"/register"}>
                  <div className="nav-li">
                    <AccountBookOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "6px",
                        marginTop: 3,
                      }}
                    />
                    Đăng Ký
                  </div>
                </NavLink>
            </>
          )}
        </div>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <div className="navbar-brand">
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="logo"
                style={{ marginLeft: 20, height: 35, marginTop: 5 }}
              ></img>
            </Navbar.Brand>
          </div>

          <div className="middle"></div>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />

          <Navbar.Collapse id="navbarScroll">
            <div className="a-list">
              <Nav>
                <NavLink as={Link} to={"/company"}>
                  <div className="nav-li">
                    <HomeOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "5px",
                        marginTop: 3,
                      }}
                    />
                    Công ty
                  </div>
                </NavLink>
                <NavLink as={Link} to={"/job&location"}>
                  <div className="nav-li">
                    <GlobalOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "5px",
                        marginTop: 3,
                      }}
                    />
                    Ngành nghề/Địa điểm
                  </div>
                </NavLink>
                <NavLink as={Link} to={"/login"}>
                  <div className="nav-li">
                    <LoginOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "5px",
                        marginTop: 3,
                      }}
                    />
                    Đăng Nhập
                  </div>
                </NavLink>
                <NavLink as={Link} to={"/register"}>
                  <div className="nav-li">
                    <AccountBookOutlined
                      style={{
                        fontSize: "120%",
                        marginRight: "6px",
                        marginTop: 3,
                      }}
                    />
                    Đăng Ký
                  </div>
                </NavLink>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> * */}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}

      {/* <Navbar collapseOnSelect expand="md" bg="light" variant="light">

            <div className="navbar-brand">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginLeft: 20, height: 35, marginTop: 5 }}
                ></img>
              </Navbar.Brand>
            </div>
          
          <div className="middle">
            
          </div>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              data-bs-target="#navbarScroll"
            />
       
              <Navbar.Collapse id="navbarScroll">
            <div className="a-list">
                <Nav>
                  <NavLink as={Link} to={"/company"}>
                    <div className="nav-li">
                      <HomeOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "5px",
                          marginTop: 3,
                        }}
                      />
                      Công ty
                    </div>
                  </NavLink>
                  <NavLink as={Link} to={"/job&location"}>
                    <div className="nav-li">
                      <GlobalOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "5px",
                          marginTop: 3,
                        }}
                      />
                      Ngành nghề/Địa điểm
                    </div>
                  </NavLink>
                  <NavLink as={Link} to={"/login"}>
                    <div className="nav-li">
                      <LoginOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "5px",
                          marginTop: 3,
                        }}
                      />
                      Đăng Nhập
                    </div>
                  </NavLink>
                  <NavLink as={Link} to={"/register"}>
                    <div className="nav-li">
                      <AccountBookOutlined
                        style={{
                          fontSize: "120%",
                          marginRight: "6px",
                          marginTop: 3,
                        }}
                      />
                      Đăng Ký
                    </div>
                  </NavLink>
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> }
                </Nav>
            </div>
              </Navbar.Collapse>
   
        </Navbar>
               */}
    </>
  );
};

export default AuthHeader;
