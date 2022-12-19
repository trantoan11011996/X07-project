import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../../../img/xcareerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./AuthHeader.css";
import { BsBuilding, BsSearch } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSuitcase } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";

const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auths);
  const { showLogin, logOutUser, currentUser, setCurrentUser } =
    useContext(UserContext);
  const [showUserBox, setShowUserBox] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    const closeUserBox = (e) => {
      if (e.path[1].className !== "navbar-content account-user") {
        setShowUserBox(false);
      }
    };
    document.body.addEventListener("click", closeUserBox);
    return () => document.body.addEventListener("click", closeUserBox);
  });

  let imageString;
  if (user) {
    if (user.hasOwnProperty("avatar")) {
      const image = user.avatar;
      const splitString = image.split("/");
      imageString = splitString[1] + "/".concat(splitString[2]);
    } else {
      imageString = "";
    }
  }
  if (currentUser) {
    if (currentUser.hasOwnProperty("avatar")) {
      const image = user.avatar;
      const splitString = image.split("/");
      imageString = splitString[1] + "/".concat(splitString[2]);
    } else {
      imageString = "";
    }
  }
  // if (flag) {
  //   console.log(flag);
  //   if (user.hasOwnProperty('avatar')) {
  //     const image = user.avatar;
  //     const splitString = image.split("/");
  //     imageString = splitString[1] + "/".concat(splitString[2]);
  //     console.log(imageString);
  //   }else{
  //     imageString = ""
  //   }
  // }

  const handleLogOutUser = () => {
    logOutUser();
    navigate("/");
    dispatch(logoutUser(navigate));
  };
  // handleLogOutUser()
  const toggleUserBox = (e) => {
    setShowUserBox((prev) => !prev);
  };

  const openSidebar = () => {
    setShowSideBar(true);
  };
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <Link to={"/"}>
          <img className="image-header" src={logo}></img>
        </Link>
      </div>
      <div className="header-navbar">
        <div className="navbar-content company-navbar">
          <BsBuilding className="icon-navbar"></BsBuilding>
          <p className="content">Danh sách công ty</p>
        </div>
        <div className="navbar-content location-navbar">
          <BsSearch className="icon-navbar"></BsSearch>
          <p className="content">Địa điểm/Ngành nghề</p>
        </div>
        <div
          className="navbar-content account-user"
          onClick={() => toggleUserBox()}
        >
          <MdAccountCircle className="icon-navbar"></MdAccountCircle>
          {!user && <p className="content">Đăng ký</p>}
          {(currentUser?.role === "recruiter" ||
            user?.role === "recruiter") && (
            <p className="content">Nhà tuyển dụng</p>
          )}
          {(currentUser?.role === "candidate" ||
            user?.role === "candidate") && (
            <p className="content">Người tìm việc</p>
          )}
          <RiArrowDropDownLine className="icon-dropdown-user"></RiArrowDropDownLine>
          {showUserBox && (
            <div
              className={
                !user && !currentUser
                  ? "control-account  control-account-position"
                  : "control-account"
              }
              id="control-account"
            >
              <div className="btn-control-account">
                {(user || currentUser) ? (
                  <></>
                ) : (
                  <>
                    <Link to={"/login"} className="link-btn-header">
                      <button className="btn-login-header btn-header">
                        Đăng nhập
                      </button>
                    </Link>
                    <Link to={"/register"} className="link-btn-header">
                      <button className="btn-signin-header btn-header">
                        Đăng ký
                      </button>
                    </Link>
                  </>
                )}
              </div>
              <div
                className={
                  user || currentUser
                    ? "account-action-header border-bottom"
                    : "account-action-header"
                }
              >
                <Link>
                  <div
                    className={
                      currentUser || user
                        ? "account-info-logo border-right"
                        : "account-info-logo"
                    }
                  >
                    <FaSuitcase className="info-icon" />
                    <p>My UltimateCareer</p>
                  </div>
                </Link>
                {!currentUser && user === [] && <></>}
                {(currentUser?.role == "recuiter" ||
                  user?.role == "recruiter") && (
                  <div className="account-action">
                    <Link to={"/availablerecruitment"}>
                      <p className="content-action">Tin tuyển dụng đã đăng</p>
                    </Link>
                    <Link to={"/upload"}>
                      <p className="content-action">Đăng tin tuyển dụng</p>
                    </Link>
                    <Link to={"/update_info"}>
                      <p className="content-action">Cập nhật thông tin</p>
                    </Link>
                  </div>
                )}{" "}
                {(currentUser?.role == "candidate" ||
                  user?.role == "candidate") && (
                  <div className="account-action">
                    <Link to={"/CandidateApplication"}>
                      <p className="content-action">Công việc đã ứng tuyển</p>
                    </Link>
                    <Link to={"/update_info"}>
                      <p className="content-action">Cập nhật thông tin</p>
                    </Link>
                  </div>
                )}
              </div>
              {(currentUser || user) && (
                <div className="account-info-header">
                  <Link to={"/update_info"}>
                    <div className="account-info-content">
                      {imageString ? (
                        <img
                          src={`https://xjob-mindx-production.up.railway.app/${imageString}`}
                          className="logo-user"
                        />
                      ) : (
                        <RxAvatar className="icon-avatar" />
                      )}
                      <div className="content-info-user">
                        {/* {((currentUser?.role === "recruiter")||(user?.role === "recruiter")) && <p className="user-name">{currentUser.info.name}</p>}
                      {((currentUser.role === "candidate")||(user.role === "candidate")) && <p className="user-name">{currentUser.info.fullName}</p>} */}
                        <span>Tài khoản</span>
                      </div>
                    </div>
                  </Link>
                  <div
                    className="wrap-btn-logout"
                    onClick={() => handleLogOutUser()}
                  >
                    <div className="btn-logout">
                      <BiLogOut className="icon-logout"></BiLogOut>
                      <div className="logout">Đăng xuất</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container-icon-sidebar" onClick={() => openSidebar()}>
        <FaBars className="icon-open-sidebar"></FaBars>
      </div>
      <div
        className={
          showSideBar
            ? "navbar-sidebar show-sidebar open-sidebar"
            : "navbar-sidebar show-sidebar close-sidebar"
        }
      >
        <div className="close-sidebar-container" onClick={() => closeSideBar()}>
          <AiOutlineClose className="close-icon-sidebar"></AiOutlineClose>
        </div>
        <div className="btn-sidebar-container show-btn-sidebar">
          <button className="btn-login-header btn-header">Đăng nhập</button>
          <button className="btn-signin-header btn-header">Đăng ký</button>
        </div>
        <div className="navbar-sidebar-content show-content-sidebar">
          <div className="navbar-content company-navbar">
            <BsBuilding className="icon-navbar"></BsBuilding>
            <p className="content">Danh sách công ty</p>
          </div>
          <div className="navbar-content location-navbar">
            <BsSearch className="icon-navbar"></BsSearch>
            <p className="content">Địa điểm/Ngành nghề</p>
          </div>
        </div>
      </div>
      <div
        className={showSideBar ? "modal-header" : "close-modal modal-header"}
      ></div>
    </div>
  );
};

export default AuthHeader;
