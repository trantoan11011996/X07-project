import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { images } from "../../img/index";
import { datas } from "../DataJob/index";
import JobItem from "./JobItem";
const cx = classNames.bind(styles);
export const AllJob = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(datas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datas.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <MetaData title="Danh sách tất cả việc làm" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2>Việc làm hấp dẫn</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/">Danh sách việc làm đã ứng tuyển</Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <span>
                    26 <span>việc làm</span>
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
              <ul className={cx("list_group_jobs")}>
                {currentItems?.map((item) => (
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
