import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { images } from "../../img/index";
import JobItem from "./JobItem";
import { CiSearch } from "react-icons/ci";
import { colourOptions } from "../DataJob/data";
import { address } from "../DataJob/data";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../Actions/jobAction";
import moment from "moment";
import Loading from "../Loading";

const cx = classNames.bind(styles);
export const AllJob = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [selectedOptionsAddress, setSelectedOptionsAddress] = useState([]);
  const [selects, setSelects] = useState();
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { recruiment, countDoc } = useSelector((state) => state.allJobs.jobs);
  const { loading } = useSelector((state) => state.allJobs);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getAllJobs());
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(recruiment.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(recruiment.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  // useEffect(()=>{
  //   const datas = await fetch (``)
  // },[])
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % recruiment.length;
    setItemOffset(newOffset);
  };
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearchJob = (e) => {
    e.preventDefault();
    dispatch(getAllJobs(search.toLocaleUpperCase()));
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
                  defaultValue={selectedOptionsField}
                  isMulti
                  // name="field"
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
                  <span>
                    {countDoc} <span>việc làm</span>
                  </span>
                </div>
                <div className={cx("right")}>
                  <p>Sắp xếp</p>
                  <select className={cx("select_box")}>
                    <option>Mới cập nhật</option>
                    <option>Mới đăng </option>
                    <option>Ngày hết hạn</option>
                    <option>Số lượng ứng viên</option>
                  </select>
                </div>
              </div>
              {loading ? (
                <Loading loading={loading} />
              ) : (
                <ul className={cx("list_group_jobs")}>
                  {currentItems &&
                    recruiment?.map((item) => (
                      <JobItem key={item.id} data={item} />
                    ))}
                  <div style={{ textAlign: "center" }}>
                    <ReactPaginate
                      className={cx("paginate")}
                      breakLabel="..."
                      nextLabel=" >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={3}
                      pageCount={pageCount}
                      previousLabel="< "
                      renderOnZeroPageCount={null}
                      containerClassName="pagination"
                      pageLinkClassName={cx("page-num")}
                      previousLinkClassName="page-nam"
                      nextLinkClassName="page-num"
                      activeLinkClassName={cx("active")}
                    />
                  </div>
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
