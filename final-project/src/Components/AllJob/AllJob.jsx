import React, { useEffect, useState } from "react";

import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link } from "react-router-dom";

import { List } from "antd";

import { images } from "../../img/index";
import JobItem from "./JobItem";
import { CiSearch } from "react-icons/ci";
import { colourOptions } from "../DataJob/data";
import { address } from "../DataJob/data";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobCategory, getAllJobs } from "../../Actions/jobAction";

import Loading from "../Loading";

const cx = classNames.bind(styles);
export const AllJob = () => {
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [selectedOptionsAddress, setSelectedOptionsAddress] = useState([]);
  const { recruiment, countDoc } = useSelector((state) => state.allJobs.jobs);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.allJobs);
  const [search, setSearch] = useState("");
  // const [createAt, setCreateAt] = useState("");
  // const [deadline, setDeadline] = useState("");
  // const [defaults, setDefaults] = useState("");
  const [id, setId] = useState("");
  const listCategory = categories?.map((item) => {
    return {
      id: item._id,
      label: item.name,
    };
  });
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllJobCategory());
  }, [dispatch]);

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearchJob = (e) => {
    e.preventDefault();
    dispatch(getAllJobs(search.toLocaleUpperCase(), "", "", "", id[0]));
  };
  const handleSortDate = (e) => {
    if (e.target.value === "createAt") {
      dispatch(getAllJobs(search, e.target.value));
    }
    if (e.target.value === "deadline") {
      dispatch(getAllJobs(search, e.target.value));
    }
    if (e.target.value === "defaults") {
      dispatch(getAllJobs(search, e.target.value));
    }
  };
  const handleChangeField = (e) => {
    let arrField = e;
    console.log(arrField);
    if (arrField.length === 0) {
      dispatch(getAllJobs())
    } else {
      const id = arrField.map((i) => i.id);
      if (id) {
        setId(id);
      }
    }
  };
  return (
    <>
      <MetaData title="Danh sách tất cả việc làm" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="" onSubmit={handleSubmitSearchJob}>
              <div className={cx("form-group")}>
                <input
                  type="text"
                  name="search"
                  onChange={handleChangeInput}
                  placeholder="Tên công ty, vị trí việc làm"
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  // defaultValue={selectedOptionsField}
                  isMulti
                  // name="field"
                  onChange={handleChangeField}
                  options={listCategory}
                  // onChange={(e) => setSelectedOptionsField(e)}
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
                  // name="address"
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
                  <Link to="/">Danh sách việc làm đã ứng tuyển</Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <div style={{ marginBottom: "15px" }}>
                    {countDoc} <span>việc làm</span>
                  </div>
                  {/* <div className={cx("right")}>
                    <p>Sắp xếp</p>
                    <select
                      className={cx("select_box")}
                      onChange={handleSortDate}
                    >
                      <option value="newUpdate">-- Sắp xếp --</option>
                      <option value="createAt">Tăng dần </option>
                      <option value="deadline">Giảm dần</option>
                    </select>
                  </div> */}
                </div>

                <div className={cx("right")}>
                  <p>Sắp xếp</p>
                  <select
                    className={cx("select_box")}
                    onChange={handleSortDate}
                  >
                    <option value="defaults">-- Sắp xếp theo --</option>
                    <option value="createAt">Mới đăng </option>
                    <option value="deadline">Ngày hết hạn</option>
                    <option value="numberApplicant">Số lượng ứng viên</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Loading loading={loading} color={"#6800fa"} size={"35"} />
                </div>
              ) : (
                <ul className={cx("list_group_jobs")}>
                  <List
                    className={cx("list-container")}
                    pagination={{
                      pageSize: 6,
                    }}
                    dataSource={recruiment}
                    renderItem={(item) => <JobItem key={item.id} data={item} />}
                  ></List>
                </ul>
              )}
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
