import React from "react";
import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const AllJob = () => {
  return (
    <>
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("wrapper_jobs")}>
            <div className={cx("recruit_title")}>
              <h2>Tất cả việc làm</h2>
              <p>Gửi thông báo cho tìm kiếm này</p>
            </div>
          </div>
          <div className={cx("wrapper_banner")}></div>
        </div>
      </div>
    </>
  );
};
