import React from "react";
import { createContext } from "react";
import { useState } from "react";
import JobApi from "../API/JobApi";


const JobContext = createContext();

const JobProvider = ({ children }) => {

    const [jobList, setJobList] = useState();

    //fetch all Job
    const fetchAllJobs = async () => {
        let data = await JobApi.allJobs()
        
        setJobList(data.allJobs)
    };


    //fetch job detail
    const fetchJobDetail = async (id) => {
        let jobDetail = await JobApi.jobDetail(id);

        if (jobDetail) {
            return jobDetail;
        }
    };

    const value = {
        jobList,
        setJobList,
        fetchAllJobs,
        fetchJobDetail,
    };

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};


export {JobContext, JobProvider}