import React, { Fragment, useContext, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import { JobContext } from "../../Context/JobContext";
const cx = classNames.bind(styles);

const JobItemRecruitment = ({ myJobRecruitment }) => {
  const{ getMyRecruitmentJobs,  } = useContext(JobContext)
 
  return (
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={myJobRecruitment.images} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {myJobRecruitment.title}
            </Link>
            <Link to="/" className={cx("company")}>
              {myJobRecruitment.name}
            </Link>
            <div className={cx("address")}>
              {myJobRecruitment.location}
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
                {myJobRecruitment.salary}
              </div>
              <div className={cx("category")}>
              {myJobRecruitment.category}
            </div>
            <div className={cx("deadline")}>
              {myJobRecruitment.deadline}
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

export default JobItemRecruitment;
