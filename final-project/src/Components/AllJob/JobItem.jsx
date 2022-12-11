import React, { Fragment, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import vi from "moment/locale/vi";
import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const JobItem = ({ data }) => {
  const day = moment(data?.createAt, "DDMMYYYY").locale("vi", vi).fromNow();
  const images = data?.name?.avatar;
  const result = images?.split("/")[1] + "/".concat(images?.split("/")[2]);

  return (
    <Fragment>
      <Link to={"/jobDetail/" + data._id}>
        <li className={cx("list_group_item")}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img
                src={`https://xjob-mindx-production.up.railway.app/${result}`}
                alt="logo"
              />
            </div>
            <div className={cx("content")}>
              <Link to="/" className={cx("title")}>
                {data.title}
              </Link>
              <Link to="/" className={cx("company")}>
                {data.name.info.name}
              </Link>
              <div className={cx("address")}>
                <a href="/#">{data.location.name}</a>
                <span>
                  Cập nhật : <span>{day}</span>
                </span>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("salary ")}>
                  <span>{data.salary} VND</span>
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
      </Link>
    </Fragment>
  );
};

export default JobItem;
