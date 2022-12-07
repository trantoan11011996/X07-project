import React, { useEffect, useState } from "react";
import { createContext } from "react";

 const JobContext = createContext()

const JobProvider = ({children}) => {
    const [jobHomePage,setJobHomePage] = useState([])
    const number = 1

    const getJobHomePage = async() =>{
           
        const jobs = await fetch(`https://xjob-mindx-production.up.railway.app/api/recruiments/home-page`,{
            method:"GET"
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setJobHomePage(data)
            return data
        })
        return jobs
    }
    useEffect(()=>{
        const getJobs = async() =>{
          const jobs = await getJobHomePage()
          console.log(jobs);
          localStorage.setItem('jobHomePage',JSON.stringify(jobs))
          setJobHomePage(jobs)
        }
        getJobs()
      },[])
    const value = {
        getJobHomePage,
        setJobHomePage,
        jobHomePage,        
    }
    return <JobContext.Provider value={value}>{children}</JobContext.Provider>
}


export { JobContext, JobProvider };