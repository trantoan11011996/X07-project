import React, { Fragment} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment, id }) {
  console.log("jobR", myJobRecruitment);

  return (
    <Link to={"/RJDetails/" + id}>
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
            <span><IoLocationSharp></IoLocationSharp>{myJobRecruitment.location.name} </span> 
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
              <span><IoLogoUsd></IoLogoUsd></span>  <span> {myJobRecruitment.salary} </span>
              </div>
            </div>
            <div className={cx("category")}>
              <span>{myJobRecruitment.category.name}</span>
            </div>
            <div className={cx("small_detail")}>
              <div className={cx("deadline")}>
                Ngày tạo: {myJobRecruitment.createAt}
              </div>
              <div className={cx("deadline")}>
                Ngày hết hạn: {myJobRecruitment.deadline}
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
      
     
    </Fragment>
    
</Link>
  );
}

export default JobItemRecruitment;
