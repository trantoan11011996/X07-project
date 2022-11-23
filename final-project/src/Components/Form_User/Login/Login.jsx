import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmail, isEmpty } from "../../../utils/validate";
import { loginUser } from "../../../Actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const { email, password } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Handle Even
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    //check fields
    if (isEmpty(email) || isEmpty(password))
      return toast.warn("Please fill in all fields.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    // check email
    if (!isEmail(email))
      return toast.error("Please enter a valid email address.", {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    dispatch(loginUser(email, password, navigate));
  };

  return (
    <>
      <ToastContainer />
      <div className={cx("container")}>
        <div className={cx("container_login")}>
          <div className={cx("wrapper")}>
            <h1>Login</h1>
            <form className={cx("login")} onSubmit={handleSubmitLogin}>
              <div className={cx("group_input")}>
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className={cx("email")}
                  placeholder="example@mail.com"
                />
              </div>
              <div className={cx("group_input")}>
                <label htmlFor="password">
                  Password <span>*</span>
                  <div className={cx("input_icon")} onClick={handleClick}>
                    {visible ? <MdVisibility /> : <MdVisibilityOff />}
                  </div>
                  <input
                    type={visible ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    className={cx("email")}
                    placeholder="password"
                  />
                </label>
              </div>
              <div className={cx("login_actions")}>
                <div className={cx("login_forgotPassword")}>
                  <a href="/#">Forgot Password?</a>
                </div>
                <div className={cx("register")}>
                  <a href="/#">Do you have an account ?</a>
                </div>
              </div>
              <div className={cx("login_btn")}>
                <button type="submit">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
