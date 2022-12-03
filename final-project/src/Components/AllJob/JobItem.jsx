import React, { Fragment } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const JobItem = ({ data }) => {
  return (
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={data.images} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {data.title}
            </Link>
            <Link to="/" className={cx("company")}>
              {data.company}
            </Link>
            <div className={cx("address")}>
              <a href="/#">Khánh Hòa</a>
              <span>
                Cập nhật : <span>2 ngày tới</span>
              </span>
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
                <span>8,000,000 VND - 25,000,000 VND</span>
              </div>
              <div className={cx("save ")}>
                {" "}
                <a href="/#">
                  <AiOutlineHeart />
                  Lưu
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default JobItem;
