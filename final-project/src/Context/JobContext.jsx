import React, { useEffect, useState } from "react";
import { createContext } from "react";
import JobApi from "../API/ProductApi";
import axios from "axios";
import { getApiHost } from "../config";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobHomePage, setJobHomePage] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allLocation, setAllLocation] = useState([]);
  const [search, setSearch] = useState("");
  const [myJobRecruitment, setMyJobRecruitment] = useState([]);
  const [category, setCategory] = useState("");
  const [operationSector, setOperationSector] = useState("");
  const [page, setPage] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [token, setToken] = useState(null);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [numberApplicant, setNumberApplicant] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState([]);
  const [jobCandidateApplication, setJobCandidateApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);
  useEffect(() => {
    getallCategory();
    getallLocation();
    getJobHomePage("");
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);

  const getJobHomePage = async (categoryId) => {
    // console.log('id',categoryId);
    const user_category = { categoryId: categoryId };
    const jobs = await fetch(
      getApiHost() + `recruiments/home-page/`,
      {
        method: "POST",
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
        setJobHomePage(data);
        localStorage.setItem("jobHomePage", JSON.stringify(data));
      });
    return jobs;
  };

  const getMyRecruitmentJobs = async (token, search, category, page, date) => {
    await axios
      .get(
        getApiHost() + `recruiments/my-recruiment?search=${search}&category=${
          category ?? ""
        }&page=${page}&fieldSort=${date}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data;

        setMyJobRecruitment(data.myRcm);

        if (!localStorage.getItem("myRcm")) {
          localStorage.setItem("myRcm", JSON.stringify(data.myRcm));
        }
      })
      .catch((error) => console.log(error.response));
  };

  const getJobCandidateApplication = async (token, status) => {
    await axios
      .get(
        getApiHost() + `recruiments/list-recruiment-application?status=${
          status ?? ""
        }`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data;
        localStorage.setItem("C-applied", JSON.stringify(data));
        setJobCandidateApplication(data);
        return data;
        // console.log('data', (data[0].recruimentId))
      })
      .catch((error) => console.log(error.response));
  };

  const fetchCandidateApplication = async (id) => {
    let applicationDetail = await JobApi.CandidateApplicationDetail(id);
    if (applicationDetail) {
      return applicationDetail;
    }
  };

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
  const getallCategory = async () => {
    const categories = await JobApi.categories();
    setAllCategory(categories);
  };
  //fetch all location
  const getallLocation = async () => {
    const locations = await JobApi.locations();
    // console.log('loca',locations);
    setAllLocation(locations);
  };
  //create recruiment
  const createRecruiment = async (description, createAt, deadline, age) => {
    const getUserId = JSON.parse(localStorage.getItem("currentUser"));
    const userId = getUserId.id;
    const newRecruiment = JobApi.recruiment(
      title,
      userId,
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
    );
    console.log("new", newRecruiment);
    const createRecruiment = await fetch(
      getApiHost() + `recruiments/new`,
      {
        method: "post",
        body: JSON.stringify(newRecruiment),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return createRecruiment;
  };

  //updateRecruitment
  const updateRecruitment = async (description, deadline, age, id) => {
    const getUserId = JSON.parse(localStorage.getItem("currentUser"));
    const newUpdatedRecruitment = JobApi.update(
      title,
      description,
      position,
      type,
      level,
      age,
      experience,
      salary,
      numberApplicant,
      deadline
    );
    console.log("update", newUpdatedRecruitment);
    const updateRecruitment = await fetch(
      getApiHost() + `recruiments/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(newUpdatedRecruitment),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
    return updateRecruitment;
  };

  //post CV
  const postCV = async (id, file, token) => {
    const CvData = new FormData();
    CvData.append("formFile", file);
    let userCV = await fetch(
      getApiHost() + `recruiments/app/${id}`,
      {
        method: "POST",
        body: CvData,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
    return userCV;
  };

  const confirmCV = async (value, idCv, token) => {
    const item = { status: value };
    const updateCV = await fetch(
      getApiHost() + `recruiments/application/${idCv}`,
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.status = data.status;
        localStorage.setItem("currentUser", JSON.stringify(user));
        return data;
      });
    return updateCV;
  };

  const filterCV = async (id, status, token) => {
    const filter = await fetch(
      getApiHost() + `recruiments/list-candidate-application/${id}?status=${status}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return filter;
  };

  const deleteCV = async (idCV, token) => {
    const del = await fetch(
      getApiHost() + `recruiments/application/${idCV}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return del;
  };

  const value = {
    getJobHomePage,
    setJobHomePage,
    jobHomePage,
    fetchJobDetail,
    fetchAllJobs,
    fetchCandidateApplication,
    jobList,
    allCategory,
    allLocation,
    getMyRecruitmentJobs,
    setMyJobRecruitment,
    myJobRecruitment,
    setFieldSort,
    setTypeSort,
    setSearch,
    search,
    category,
    page,
    fieldSort,
    typeSort,
    token,
    getJobCandidateApplication,
    jobCandidateApplication,
    postCV,
    createRecruiment,
    setTitle,
    setName,
    setDescription,
    setPosition,
    setType,
    setLevel,
    setAgeFrom,
    setAgeTo,
    setExperience,
    setSalary,
    setNumberApplicant,
    setLocation,
    setCategory,
    setDate,
    title,
    name,
    description,
    position,
    type,
    level,
    ageFrom,
    ageTo,
    experience,
    salary,
    numberApplicant,
    location,
    category,
    date,
    updateRecruitment,
    confirmCV,
    filterCV,
    deleteCV,
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
