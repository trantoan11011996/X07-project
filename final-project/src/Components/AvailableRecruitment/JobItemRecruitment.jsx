import React, { Fragment} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment }) {
  // console.log("jobR", myJobRecruitment);

  return (
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={myJobRecruitment.name.avatar} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {myJobRecruitment.title}
            </Link>
            <div>
              <Link to="/" className={cx("company")}>
                {myJobRecruitment.name.info.name}
              </Link>
            </div>
            <div className={cx("address")}>
              {myJobRecruitment.location.name}
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
                <span> {myJobRecruitment.salary} </span>
              </div>
            </div>
            <div className={cx("category")}>
              <span>{myJobRecruitment.category.name}</span>
            </div>
            <div className={cx("small_detail")}>
              <div className={cx("deadline")}>
                Ngày tạo: {myJobRecruitment.deadline}
              </div>
              <div className={cx("deadline")}>
                Ngày hết hạn: {myJobRecruitment.createAt}
              </div>
              <div className={cx("update")}>
                <a href="/#">
                  <AiOutlineHeart />
                  Cập Nhật
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* <li className={cx("list_group_item")}>
      <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={myJobRecruitment.name.info.avatar} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {myJobRecruitment.title}
            </Link>
            <div>

            <Link to="/" className={cx("company")}>
              {myJobRecruitment.name.info.name}
            </Link>
            </div>
            <div className={cx("address")}>
              {myJobRecruitment.name.location}
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
                {myJobRecruitment.salary}
              </div>
              <div className={cx("category")}>
              {myJobRecruitment.category.name}
            </div>
            <div className={cx("deadline")}>
              {myJobRecruitment.deadline}
            </div>
             <div className={cx("deadline")}>
              {myJobRecruitment.createAt}
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
        </li> */}
    </Fragment>
  );
}

export default JobItemRecruitment;
