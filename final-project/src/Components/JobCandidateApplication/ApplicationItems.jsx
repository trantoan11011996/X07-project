import React, { Fragment} from "react";

import { Link } from "react-router-dom";
import styles from "./JobCandidateApplication.module.scss";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
const cx = classNames.bind(styles);

function ApplicationItems({job,recruimentId, id}){
    const image = recruimentId?.name?.avatar
    const splitString  = image.split("/")
    const imageString = splitString[1]+"/".concat(splitString[2])
    // console.log('recruiTd', recruimentId)
    console.log('job', job)
    console.log('item',recruimentId)
    return(
       
        <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={`https://xjob-mindx-production.up.railway.app/${imageString}`} alt="img" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {recruimentId?.title} -  <span><IoLogoUsd></IoLogoUsd></span>{recruimentId?.salary}(VND)
            </Link>
            <div>
              <Link to="/" className={cx("company")}>
                {recruimentId?.name.info.name}
              </Link>
            </div>
            <div className={cx("address")}>
            <span><IoLocationSharp></IoLocationSharp>{recruimentId?.location?.name} - {recruimentId?.name.info.address}  </span> 
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
               <span> {recruimentId?.position} </span>
              </div>
            </div>
            <div className={cx("small_detail")}>
              <div className={cx("deadline")}>
                Trạng thái đơn ứng tuyển: {job?.status}
              </div>
              <div className={cx("deadline")}>
              Trạng thái tin ứng tuyển: {recruimentId?.status}
              </div>
            </div>
          </div>
        </div>
      </li>
      
     
    </Fragment>
  
    )
}


export default ApplicationItems;