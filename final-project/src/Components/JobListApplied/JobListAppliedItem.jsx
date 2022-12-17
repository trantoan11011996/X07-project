import React, { Fragment} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./JobListApplied.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment, id }) {
  // console.log("jobR", myJobRecruitment);

  return (
    <Link to={"/jobDetail/" + id}>
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={""} alt="" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {}
            </Link>
            <div>
              <Link to="/" className={cx("company")}>
                {}
              </Link>
            </div>
            <div className={cx("address")}>
            <span><IoLocationSharp></IoLocationSharp>{} Địa điểm tuyển dụng </span> 
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
              <span><IoLogoUsd></IoLogoUsd></span>  <span> {}Vị trí tuyển dụng </span>
              </div>
            </div>
            <div className={cx("small_detail")}>
              <div className={cx("deadline")}>
                Trạng thái đơn ứng tuyển: {}
              </div>
              <div className={cx("deadline")}>
               Trạng thái tin ứng tuyển: {}
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
