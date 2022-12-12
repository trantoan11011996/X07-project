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
  const [myJobRecruitment, setMyJobRecruitment] = useState([])
  const [category, setCategory] = useState("")
  const [operationSector,setOperationSector] = useState("")
  const [page, setPage] = useState("")
  const [fieldSort, setFieldSort] = useState("")
  const [typeSort, setTypeSort] = useState("")
  const [token,setToken] = useState(null)
  const [title,setTitle] = useState('')
  const [name,setName] = useState('')
  const [description,setDescription]= useState('')
  const [position,setPosition] = useState('')
  const [type,setType] = useState('')
  const [level,setLevel] = useState('')
  const [age,setAge] = useState('')
  const [experience,setExperience] = useState('')
  const [salary,setSalary] = useState('')
  const [numberApplicant,setNumberApplicant] = useState('')
  const [location,setLocation] = useState('')
  const [createAt,setCreatAt] = useState('')
  const [deadline,setDeadline] = useState('')



  const getJobHomePage = async (categoryId) => {
    console.log('id',categoryId);
    const user_category = {"categoryId"  : categoryId }
    console.log('user_category',user_category);
    const jobs = await fetch(
      `https://xjob-mindx-production.up.railway.app/api/recruiments/home-page/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('data',data);
        setJobHomePage(data);
        localStorage.setItem("jobHomePage", JSON.stringify(data));
        return data;
      });
    
    return jobs;
  
  };
  useEffect(() => {
    getallCategory()
    getallLocation()
    const getToken = JSON.parse(localStorage.getItem('token'))
    setToken(getToken)
  }, []);

  const getMyRecruitmentJobs = async (token) => {
    console.log('token2', token)
    await axios.get(
      `https://xjob-mindx-production.up.railway.app/api/recruiments/my-recruiment?search=${search}&category=${category}&page=${page}&fieldSort=${deadline}&typeSort=${typeSort}`,
      { headers: {authorization: `Bearer ${token}`} },
    
    ).then((res) => {
      const data = res.data;
    
      setMyJobRecruitment(data.myRcm);
     
      if (!localStorage.getItem("myRcm")) {
        localStorage.setItem("myRcm", JSON.stringify(data.myRcm));
      }
    }).catch((error) => console.log(error.response));
}


  


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
  //create recruiment
  const createRecruiment = async (description) =>{
    const newRecruiment = JobApi.recruiment(
      title,
      name,
      description,
      position,
      type,
      level,
      age,
      experience,
      salary,
      numberApplicant,
      location,
      category,
      operationSector,
      createAt,
      deadline
    )
    const createRecruiment = await (`https://xjob-mindx-production.up.railway.app/api/recruiments/new`,{
      method: "post",
      body: JSON.stringify(newRecruiment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log('data',data);
    })
    return createRecruiment
  }

  //post CV
  const postCV = async ( id, file, token) => {

    const CvData = new FormData();
		CvData.append('CV', file);
    let userCV = await fetch ("https://xjob-mindx-production.up.railway.app/api/recruiments/apply",
    {
      method: "POST",
      body: CvData,
      headers: {
        authorization: `Bearer ${token}`,
      }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data
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
    setSearch,
    search, category, page,fieldSort, typeSort,
    token,
    postCV,
    createRecruiment,
    setTitle,
    setName,
    setDescription,
    setPosition,
    setType,
    setLevel,
    setAge,
    setExperience,
    setSalary,
    setNumberApplicant,
    setLocation,
    setCategory,
    setCreatAt,
    setDeadline,
    title,
    name,
    description,
    position,
    type,
    level,
    age,
    experience,
    salary,
    numberApplicant,
    location,
    category,
    createAt,
    deadline
  
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
