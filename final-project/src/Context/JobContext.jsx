import React, { useEffect, useState } from "react";
import { createContext } from "react";
import JobApi from "../API/ProductApi";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobHomePage, setJobHomePage] = useState([]);
  const [jobList, setJobList] = useState([]);

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

  const value = {
    getJobHomePage,
    setJobHomePage,
    jobHomePage,
    fetchJobDetail,
    fetchAllJobs,
    jobList
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
