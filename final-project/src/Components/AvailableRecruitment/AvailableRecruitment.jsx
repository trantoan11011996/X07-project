import React, { useEffect, useState, useContext } from "react";
import styles from "./AvailableRecruitment.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import loadingAnimation from "../../animationJson/loading-animation.json";
import Lottie from "lottie-react";
import { Link, useSearchParams } from "react-router-dom";
import { images } from "../../img/index";
import { CiSearch } from "react-icons/ci";
import { colourOptions } from "../DataJob/data";
import { address } from "../DataJob/data";
import Select from "react-select";
import { JobContext } from "../../Context/JobContext";

import JobListRecruitment from "./JobListRecruitment";
const cx = classNames.bind(styles);

export const AvailableRecruitment = () => {
  const {
    getMyRecruitmentJobs,
    myJobRecruitment,
    search,
    allCategory,
    page,
    fieldSort,
    typeSort,
    token,
    setSearch,
  } = useContext(JobContext);
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [selectedOptionsAddress, setSelectedOptionsAddress] = useState([]);
  const [params, setParams] = useSearchParams();
  const [complete, setComplete] = useState(false);

  const setParamsKey = (key, value) => {
    // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };
  const searchParams = params.get("search");
  const categoryParams = params.get("category");
  const dateParams = params.get("date");

  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    getMyRecruitmentJobs(getlocalToken, "", "", "", "");
    window.scrollTo(0, 0);
  }, []);

  const listCategory = allCategory?.map((item) => {
    return {
      id: item._id,
      label: item.name,
    };
  });

  ///setting loading animation
  setTimeout(() => {
    setComplete(true);
  }, 2500);

  const handlSelectCategory = (e) => {
    let arrField = e;
    console.log(arrField);
    if (arrField.length == 0) {
      console.log("....");
      setParamsKey("category", "");
    } else {
      const id = arrField.map((item) => {
        return item.id;
      });
      if (id) {
        setParamsKey("category", id);
      }
    }
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    getMyRecruitmentJobs(
      token,
      searchParams.toLocaleUpperCase(),
      categoryParams,
      "",
      dateParams
    );
  };
  return (
    <>
      <MetaData title="Danh sách tin tuyển dụng đã đăng" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="" onSubmit={onSubmitSearch}>
              <div className={cx("form-group")}>
                <input
                  type="text"
                  placeholder="Tìm việc làm"
                  onChange={(e) => setParamsKey("search", e.target.value)}
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  isMulti
                  options={listCategory}
                  onChange={handlSelectCategory}
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
                  <h2>Danh sách tin tuyển dụng của bạn</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/">Đăng tin ứng tuyển</Link>
                </div>
              </div>
              {/* <ul className={cx("list_group_jobs")}> */}
              {!complete ? (
                <div className="loading-job">
                  <Lottie
                    animationData={loadingAnimation}
                    className="loading-animation-list-cv"
                  ></Lottie>
                </div>
              ) : (
                <>
                  <div className={cx("recruit_title")}>
                    <div className={cx("left")}>
                      <span>
                        {myJobRecruitment?.length} <span>việc làm</span>
                      </span>
                    </div>
                    <div className={cx("right")}>
                      <p>Sắp xếp</p>
                      <select
                        className={cx("select_box")}
                        onChange={(e) => setParamsKey("date", e.target.value)}
                      >
                        <option value="createAt">Mới đăng </option>
                        <option value="deadline">Sắp hết hạn</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <ul className={cx("list_group_jobs")}>
                      <JobListRecruitment />
                    </ul>
                  </div>
                </>
              )}

              <div style={{ textAlign: "center" }}></div>
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
