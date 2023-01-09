import React, { useEffect, useState, useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import { Link, useSearchParams } from "react-router-dom";
import CompanyList from "./CompanyList";
import styles from "./Company.module.css";
import loadingAnimation from "../../animationJson/loading-animation.json";
import Lottie from "lottie-react";
import { images } from "../../img/index";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import MetaData from "../MetaData/MetaData";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const CompanyPage = () => {
    const { getRecruiterCompany, company, setCompany, allCategory}  = useContext(JobContext)
    const [params, setParams] = useSearchParams();
    const [complete, setComplete] = useState(false);
    const [selectedOptionsField, setSelectedOptionsField] = useState([]);
    const setParamsKey = (key, value) => {
        // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
        let currentParams = Object.fromEntries([...params]);
        setParams({ ...currentParams, [key]: value });
      };
    
      useEffect(() => {
        getRecruiterCompany("", "", "");
        window.scrollTo(0, 0);
      }, []);
    

    useEffect(() => {
        const searchParams = params.get("search");
        const operationSectorParams = params.get("operationSector");
        const getMyListJob = async (zeta, page, operationSector) => {
          const ListCompany = await  getRecruiterCompany(
            zeta,
            page,
            operationSector
          );
          console.log(ListCompany.rcts)
          setCompany(ListCompany.rcts);
          return  ListCompany;
        };
        getMyListJob(searchParams, "",  operationSectorParams);
      }, [params]);

      setTimeout(() => {
        setComplete(true);
      }, 2500);

      // const listCategory = allCategory?.map((item) => {
      //   return {
      //     id: item._id,
      //     label: item.name,
      //   };
      // });

      // const handlSelectCategory = (e) => {
      //   let arrField = e;
      //   console.log(arrField);
      //   if (arrField.length == 0) {
      //     setParamsKey("operationSector", "");
      //   } else {
      //     const id = arrField.map((item) => {
      //       return item.id;
      //     });
      //     if (id) {
      //       setParamsKey("operationSector", id);
      //     }
      //   }
      // };
    

      return(
        <>
            <MetaData title="Danh sách tin tuyển dụng đã đăng" />
            <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="">
              <div className={cx("form-group")}>
                <input
                  type="text"
                  placeholder="Tìm công ty"
                  onChange={(e) => setParamsKey("search", e.target.value)}
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  isMulti
                  // options={listCategory}
                  // onChange={handlSelectCategory}
                  // isOptionDisabled={() => selectedOptionsField.length >= 2}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Lĩnh Vực"
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
                  <h2 className={cx("header-myrcm")}>
                    Danh sách công ty
                  </h2>
                </div>
                {/* <div className={cx("right")}>
                  <Link to="/upload_recruiment">Đăng tin ứng tuyển</Link>
                </div> */}
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
                       { company?.length} <span>Công ty</span>
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
                      <CompanyList company={company} />
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
      )
    
}