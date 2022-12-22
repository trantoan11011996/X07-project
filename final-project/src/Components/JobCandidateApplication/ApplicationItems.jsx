import React, { Fragment, useEffect, useState} from "react";

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
    // console.log('job', job)
    // console.log('item',recruimentId)
    const [jobStatus, setJobStatus] = useState(job?.status)
    const [recruitmentStatus, setRecruitmentStatus] = useState(recruimentId?.status)
    
    useEffect(() => {
      if (jobStatus === "pending" ) {
          
        setJobStatus("Đang chờ")
      } 
      if (jobStatus === "accepted") {
        setJobStatus("Đã xác nhận")
    }  
    if (jobStatus == "denided") {
      setJobStatus("Đã từ chối")
    }
      if (recruitmentStatus === "active") {
        setRecruitmentStatus("Đang hoạt động")
      }

    }, [job])
   
    return(
       
        <Fragment>
      <li className={cx("list_group_item")}>
        <div className={cx("box_item")}>
          <div className={cx("images")}>
            <img src={`https://xjob-mindx-production.up.railway.app/${imageString}`} alt="img" />
          </div>
          <div className={cx("content")}>
            <Link to="/" className={cx("title")}>
              {recruimentId?.title} -  <span><IoLogoUsd></IoLogoUsd></span>{recruimentId?.salary}(VNĐ)
            </Link>
            <div>
              <Link to="/" className={cx("company")}>
               Công ty: {recruimentId?.name.info.name}
              </Link>
            </div>
            <div className={cx("address")}>
       <b> <span><IoLocationSharp></IoLocationSharp>{recruimentId?.location?.name} - {recruimentId?.name.info.address}  </span> </b>  
            </div>
            <div className={cx("info_salary")}>
              <div className={cx("salary ")}>
               <span> Vị trí làm việc: {recruimentId?.position} </span>
              </div>
            </div>
            <div className={cx("small_detail")}>
              <div className={cx("deadline")}>
              <b>  Trạng thái đơn ứng tuyển: {jobStatus} </b>
              </div>
              <div className={cx("deadline")}>
                <b>

              Trạng thái tin ứng tuyển: {recruitmentStatus}
                </b>
              </div>
            </div>
          </div>
        </div>
      </li>
      
     
    </Fragment>
  
    )
}


export default ApplicationItems;