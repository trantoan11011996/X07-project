import React, { Fragment} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment, id }) {

  const image = myJobRecruitment?.name?.avatar
  const splitString  = image.split("/")
  const imageString = splitString[1]+"/".concat(splitString[2])

  return (
    <Link to={"/RJDetails/" + id}>
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={`https://xjob-mindx-production.up.railway.app/${imageString}`} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {myJobRecruitment.title}
            </Link>
            <div>
              <Link to="/" className={cx("company")}>
                Công ty {myJobRecruitment.name.info.name}
              </Link>
            </div>
            <div className={cx("address")}>
            <span><IoLocationSharp></IoLocationSharp>Địa điểm: {myJobRecruitment.location.name} </span> 
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
              <span><IoLogoUsd></IoLogoUsd></span>  <span>Lương: {myJobRecruitment.salary} (VNĐ) </span>
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
