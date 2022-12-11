import React, { useEffect, useState , useContext} from "react";

import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link } from "react-router-dom";

import { images } from "../../img/index";


import { CiSearch } from "react-icons/ci";
import { colourOptions } from "../DataJob/data";
import { address } from "../DataJob/data";
import Select from "react-select";
import { JobContext } from "../../Context/JobContext";

import JobListRecruitment from "./JobListRecruitment";
const cx = classNames.bind(styles);

export const AvailableRecruitment = () => {
  const {getMyRecruitmentJobs, myJobRecruitment , search, category, page,fieldSort, typeSort, token} = useContext(JobContext)
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [selectedOptionsAddress, setSelectedOptionsAddress] = useState([]);
  

  useEffect(() => {
    getMyRecruitmentJobs(token)
  }, [search, category, page,fieldSort, typeSort])
 
  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem('token'))
    getMyRecruitmentJobs(getlocalToken)
  },[])

 

  return (
    <>
      <MetaData title="Danh sách tất cả việc làm" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="">
              <div className={cx("form-group")}>
                <input
                  type="text"
                  name="search"
                  placeholder="Tên công ty, vị trí việc làm"
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  defaultValue={selectedOptionsField}
                  isMulti
                  name="field"
                  options={colourOptions}
                  onChange={(e) => setSelectedOptionsField(e)}
                  isOptionDisabled={() => selectedOptionsField.length >= 2}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Lĩnh Vực"
                />
              </div>
              <div className={cx("form-group")}>
                <Select
                  defaultValue={selectedOptionsAddress}
                  isMulti
                  name="address"
                  options={address}
                  isSearchable="true"
                  className="basic-multi-select"
                  onChange={(e) => setSelectedOptionsAddress(e)}
                  isOptionDisabled={() => selectedOptionsAddress.length >= 2}
                  classNamePrefix="select"
                  placeholder="Địa điểm"
                />
              </div>
              <div className={cx("form-group-button")}>
                <button>
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2>Tất cả tin tuyển dụng</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/">Đăng tin ứng tuyển</Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <span>
                      {myJobRecruitment.length} <span>việc làm</span>
                  </span>
                </div>
                <div className={cx("right")}>
                  <p>Sắp xếp</p>
                  <select className={cx("select_box")}>
                    <option value="">Mới cập nhật</option>
                    <option value="">Mới đăng </option>
                    <option value="">Sắp hết hạn</option>
                  </select>
                </div>
              </div>
            
              {/* <ul className={cx("list_group_jobs")}> */}
                  
                <div>
                <ul className={cx("list_group_jobs")}>
               <JobListRecruitment/>
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
        </div>
      </div>
    </>
  );
};
