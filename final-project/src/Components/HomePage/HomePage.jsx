import React, { useContext } from "react";
import { useSelector } from "react-redux";
import MetaData from "../MetaData/MetaData";
import "../HomePage/Homepage.css";
import { UserContext } from "../../Context/UserContext";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeJobs from "../HomePage/HomeJobs/HomeJobs"
export default function HomePage() {
  const { user } = useSelector((state) => state.auths);
  console.log(user);


  return (
    <>
      <MetaData title="Home" />
      <div className="home-page">
        <HomeBanner />
        <HomeJobs/>
      </div>
    </>
  );
}
