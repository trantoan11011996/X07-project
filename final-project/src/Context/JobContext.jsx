import React, { useEffect, useState } from "react";
import { createContext } from "react";
import JobApi from "../API/ProductApi";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobHomePage, setJobHomePage] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [allCategory,setAllCategory] = useState([])
  const [allLocation,setAllLocation] = useState([])


  const getJobHomePage = async () => {
    const jobs = await fetch(
      `https://xjob-mindx-production.up.railway.app/api/recruiments/home-page`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobHomePage(data);
        return data;
      });
    return jobs;
  };
  useEffect(() => {
    const getJobs = async () => {
      const jobs = await getJobHomePage();
      console.log(jobs);
      localStorage.setItem("jobHomePage", JSON.stringify(jobs));
      setJobHomePage(jobs);
    };
    getJobs();
  }, []);
  //fetch all Job
  const fetchAllJobs = async () => {
    let data = await JobApi.allJobs();

    setJobList(data.allJobs);
  };

  //fetch job detail
  const fetchJobDetail = async (id) => {
    let jobDetail = await JobApi.jobDetail(id);

    if (jobDetail) {
      return jobDetail;
    }
  };
  /// fetch all category 
  const getallCategory = async() =>{
    const categories = await JobApi.categories()
    setAllCategory(categories)
  }
  //fetch all location
  const getallLocation= async() =>{
    const locations = await JobApi.locations()
    console.log('loca',locations);
    setAllLocation(locations)
  }
  useEffect(()=>{
    getallCategory()
    getallLocation()
  },[])
  const value = {
    getJobHomePage,
    setJobHomePage,
    jobHomePage,
    fetchJobDetail,
    fetchAllJobs,
    jobList,
    allCategory,
    allLocation
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
