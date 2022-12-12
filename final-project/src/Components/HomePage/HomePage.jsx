import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../MetaData/MetaData";
import "../HomePage/Homepage.css";
import { UserContext } from "../../Context/UserContext";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeJobs from "../HomePage/HomeJobs/HomeJobs";
import { JobContext } from "../../Context/JobContext";

export default function HomePage() {
  const { user } = useSelector((state) => state.auths);
  const { getJobHomePage, setJobHomePage, jobHomePage } =
    useContext(JobContext);
  useEffect(() => {
    getJobHomePage();
    const getJobs = JSON.parse(localStorage.getItem("jobHomePage"));
    setJobHomePage(getJobs);
  }, []);
  return (
    <>
      <MetaData title="Trang chủ" />
      <div className="home-page">
        <HomeBanner />
        <HomeJobs jobHomePage={jobHomePage} />
      </div>
    </>
  );
}
