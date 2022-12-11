import React, { useEffect, useState, } from "react";
import { createContext } from "react";
import JobApi from "../API/ProductApi";
import axios from "axios";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobHomePage, setJobHomePage] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [allCategory,setAllCategory] = useState([])
  const [allLocation,setAllLocation] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [page, setPage] = useState("")
  const [fieldSort, setFieldSort] = useState("")
  const [typeSort, setTypeSort] = useState("")
  const [token,setToken] = useState(null)

  const [myJobRecruitment, setMyJobRecruitment] = useState([])



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
      // console.log(jobs);
      localStorage.setItem("jobHomePage", JSON.stringify(jobs));
      setJobHomePage(jobs);
    };
    getJobs();
  }, []);

  const getMyRecruitmentJobs = async (token) => {
    console.log('token2', token)
    await axios.get(
      `https://xjob-mindx-production.up.railway.app/api/recruiments/my-recruiment?search=${search}&category=${category}&page=${page}&fieldSort=${fieldSort}&typeSort=${typeSort}`,
      { headers: {authorization: `Bearer ${token}`} },
    
    ).then((res) => {
      const data = res.data;
    
      setMyJobRecruitment(data.myRcm);
      console.log('myRcm',data.myRcm)
     
      if (!localStorage.getItem("myRcm")) {
        localStorage.setItem("myRcm", JSON.stringify(data.myRcm));
      }
    }).catch((error) => console.log(error.response));
}


  // useEffect(() => {
  //   getMyRecruitmentJobs()
  // }, [search, category, page,fieldSort, typeSort])



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
    // console.log('loca',locations);
    setAllLocation(locations)
  }
  useEffect(()=>{
    getallCategory()
    getallLocation()
  },[])

  //post CV
  const postCV = async ( id, file, token) => {
    let item = {
      params: id,
      body: file
    };

    let userCV = await fetch ("https://xjob-mindx-production.up.railway.app/api/recruiments/apply",
    {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data.json
    })
    return userCV
  }

  const value = {
    getJobHomePage,
    setJobHomePage,
    jobHomePage,
    fetchJobDetail,
    fetchAllJobs,
    jobList,
    allCategory,
    allLocation,
    getMyRecruitmentJobs,
    setMyJobRecruitment,
    myJobRecruitment,
    setFieldSort,
    setTypeSort,
    search, category, page,fieldSort, typeSort,
    token,
    postCV,
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
