import React, { useEffect, useState, useContext } from "react";

import styles from "./JobCandidateApplication.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link } from "react-router-dom";
import HomeCategory from "../HomePage/HomeCategory/HomeCategory";
import { images } from "../../img/index";


import { JobContext } from "../../Context/JobContext";
import ApplicationList from "./ApplicationList";

const cx = classNames.bind(styles);

export const JobCandidateApplication = () => {
  const { jobCandidateApplication, getJobCandidateApplication, token } =
    useContext(JobContext);
  useEffect(() => {
    getJobCandidateApplication(token);
  }, [token]);
  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    getJobCandidateApplication(getlocalToken);
  }, []);
  console.log('JobCandidateApplication', jobCandidateApplication)
  return(
    <>
         <MetaData title="Danh sách tất cả việc làm" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
         
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2>Công việc đã ứng tuyển</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/"></Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <span>
                      {jobCandidateApplication?.length} <span>việc làm</span>
                  </span>
                </div>
               
              </div>
            
              {/* <ul className={cx("list_group_jobs")}> */}
                  
                <div>
                <ul className={cx("list_group_jobs")}>
                    <ApplicationList/>
              </ul>

                </div>
                <div style={{ textAlign: "center" }}>
                  
                </div>
              {/* </ul> */}
            </div>
            <div className={cx("wrapper_banner")}>
              <img src={images.banner} alt="" />
            </div>
          </div>
        <HomeCategory/>
        </div>
      </div>
    </>
  )
};
