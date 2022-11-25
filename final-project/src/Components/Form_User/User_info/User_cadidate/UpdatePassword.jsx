import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./UpdatePassword.module.scss";

const cx = classNames.bind(styles);

const UpdatePassword = () => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheckPassword = (e) => {
    setChecked(e.target.checked);
  };
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
                  <label htmlFor="old_password">
                    Mật khẩu hiện tại <span>*</span>
                  </label>
                  <input
                    type={checked ? "text" : "password"}
                    id="old_password"
                    name="old_password"
                    className={cx("password")}
                  />
                </div>

                <div className={cx("group_input")}>
                  <label htmlFor="new_password">
                    Mật khẩu mới <span>*</span>
                  </label>
                  <input
                    type={checked ? "text" : "password"}
                    id="new_password"
                    name="new_password"
                    className={cx("password")}
                  />
                </div>
                <div className={cx("group_input")}>
                  <label htmlFor="cf_password">
                    Gõ lại mật khẩu mới <span>*</span>
                  </label>
                  <input
                    type={checked ? "text" : "password"}
                    id="cf_password"
                    name="cf_password"
                    className={cx("password")}
                  />
                </div>

                <div className={cx("check_password")}>
                  <input
                    type="checkbox"
                    id="check_password"
                    checked={checked}
                    onChange={handleChangeCheckPassword}
                  />
                  <label htmlFor="check_password">Hiển thị mật khẩu</label>
                </div>
                <div className={cx("group_input")}>
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
