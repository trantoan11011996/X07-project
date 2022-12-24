import React, { Fragment, useState} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { useEffect } from "react";
const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment, id }) {

  const [createDate, setCreateDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");

  const image = myJobRecruitment?.name?.avatar
  const splitString  = image.split("/")
  const imageString = splitString[1]+"/".concat(splitString[2])

  useEffect(() => {
    let crTime = new Date(myJobRecruitment.createAt).getTime();
    let crDay = new Date(crTime).getDate();
    let crMonth = new Date(crTime).getMonth() + 1;
    let crYear = new Date(crTime).getFullYear();
    let newCreate = `${crDay}-${crMonth}-${crYear}`;
    setCreateDate(newCreate);
  
    let dlTime = new Date(myJobRecruitment.deadline).getTime();
    let dlDay = new Date(dlTime).getDate();
    let dlMonth = new Date(dlTime).getMonth() + 1;
    let dlYear = new Date(dlTime).getFullYear();
    let newDealine = `${dlDay}-${dlMonth}-${dlYear}`;
    setDeadlineDate(newDealine);

  }, [])

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
                Ngày tạo:  <span className="create-date"> {createDate}</span>
              </div>
              <div className={cx("deadline")}>
                Ngày hết hạn:  <span className="deadline-date">{deadlineDate}</span>
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
