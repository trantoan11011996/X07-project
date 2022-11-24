import React from "react";
import classNames from "classnames/bind";
import styles from "./UpdatePassword.module.scss";
import { TfiPencil } from "react-icons/tfi";
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
            <div className={cx("info_top")}>
              <div className={cx("info_top_title")}>
                <h3>Tài khoản</h3>
                <p>Hãy cập nhật thông tin mới nhất.</p>
                <p>
                  Thông tin cá nhân dưới đây sẽ tự động điền khi bạn tạo hồ sơ
                  mới.
                </p>
              </div>
              <form action="">
                <h1>avatar</h1>
              </form>
            </div>
            <ul className={cx("list_info_user")}>
              <li>
                <div className={cx("name")}>
                  Họ và tên <span>*</span>
                </div>
                <div className={cx("name_info")}>
                  <h5>Quang Minh</h5>
                  <a href="/#">
                    <TfiPencil />
                    Chỉnh sửa
                  </a>
                </div>
              </li>
              <li>
                <div className={cx("name")}>
                  Địa chỉ email <span>*</span>
                </div>
                <div className={cx("name_info")}>
                  <h5>nguyendoquangminh2112@gmail.com</h5>
                  <a href="/#">
                    <TfiPencil />
                    Chỉnh sửa
                  </a>
                </div>
              </li>
              <li>
                <div className={cx("name")}>
                  Họ và tên <span>*</span>
                </div>
                <div className={cx("name_info")}>
                  <h5>Quang Minh</h5>
                  <a href="/#">
                    <TfiPencil /> Chỉnh sửa
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
