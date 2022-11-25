import React from "react";
import classNames from "classnames/bind";
import styles from "./UpdatePassword.module.scss";

const cx = classNames.bind(styles);

const UpdatePassword = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("container_info")}>
        <div className={cx("row_info")}>
          <div className={cx("col_info_1")}>
            <div className={cx("profile")}>
              <ul className={cx("navbar")}>
                <li>
                  <a href="/#">
                    <h5>Đổi mật khẩu</h5>
                    <p>Đổi mật khẩu đăng nhập</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("col_info_2")}>
            <div className={cx("form_container")}>
              <form action="">
                <h3>Thay đổi mật khẩu</h3>
                <div className={cx("group_input")}>
                  <label htmlFor="email">
                    Mật khẩu hiện tại <span>*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="old_password"
                    className={cx("password")}
                  />
                </div>

                <div className={cx("group_input")}>
                  <label htmlFor="email">
                    Mật khẩu mới <span>*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="old_password"
                    className={cx("password")}
                  />
                </div>
                <div className={cx("group_input")}>
                  <label htmlFor="email">
                    Gõ lại mật khẩu mới <span>*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="old_password"
                    className={cx("password")}
                  />
                </div>
                <div className={cx("check_password")}>
                  <input type="checkbox" id="check_password" />
                  <label htmlFor="check_password">Hiển thị mật khẩu</label>
                </div>
                <div className={cx("update_btn")}>
                  <button type="submit">Cập nhật mật khẩu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
