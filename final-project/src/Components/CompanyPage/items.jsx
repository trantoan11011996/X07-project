import React, { Fragment, useState } from "react";
import { AiOutlineHeart, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Company.module.css";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import { getApiHostImage } from "../../config";
const cx = classNames.bind(styles);

function CompanyItems({ company, id }) {
  const image = company?.avatar;
  const splitString = image.split("/");
  const imageString = splitString[1] + "/".concat(splitString[2]);
  // const t = getApiHostImage() + `${imageString}`;
  // console.log(t);

  return (
    //   <Link to={"/" + id}>
    <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={getApiHostImage() + `${imageString}`} alt="" />
            {/* <img src={image} alt="" /> */}
          </div>
          <div className={cx("content")}>
            <Link to={"/" + id} className={cx("title")}></Link>
            <div>
              <Link to={"/" + id} className={cx("company")}>
                {company.info.name}
              </Link>
            </div>
            <div className={cx("address")}>
              <span>
                <IoLocationSharp></IoLocationSharp>Địa điểm:{" "}
                {company.info.address}{" "}
              </span>
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
                <span>
                  <AiOutlinePhone></AiOutlinePhone>
                </span>{" "}
                <span>Liên hệ: {company.info.phoneNumber} </span>
              </div>
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("category  ")}>
                <span>
                  <AiOutlineMail></AiOutlineMail>Email: {company.info.email}
                </span>
              </div>
            </div>
            <div className={cx("small_detail")}></div>
            {company.status === "removed" && (
              <>
                <span className={cx("alert-myrcm-removed")}>
                  Hãy kiểm tra <strong>Email</strong> của bạn để biết được tại
                  sao tin của bạn bị gỡ bỏ.
                </span>
              </>
            )}
          </div>
        </div>
      </li>
    </Fragment>

    //   </Link>
  );
}

export default CompanyItems;
