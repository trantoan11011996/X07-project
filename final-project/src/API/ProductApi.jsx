import axios from "axios";
import React, { useEffect, useState } from "react";
// url
 const url = "https://xjob-mindx-production.up.railway.app";
 const allJobUrl = url + "/api/recruiments";
 const homepageJobUrl = allJobUrl + "/home-page";

 const fetchAllJobs = async () => {
    const res = await axios({
        method: "get",
        url: allJobUrl,
        type: "json",
    });

    if (res.status === 200) {
        return res.data;
    }
 };

 const fetchJobHomepage = async () => {
    const res = await axios({
        method: "get",
        url: homepageJobUrl,
        type: "json",
    });

    if (res.status === 200) {
        return res.data;
    }
 }

 const fetchJobDetail = async (id) => {
    const JobDetailUrl = `https://xjob-mindx-production.up.railway.app/api/recruiments/detail/${id}`

    const res = await axios({
        method: "get",
        url: JobDetailUrl,
        type: "json",
    });

    if (res.status === 200) {
        return res.data;
    }
 }
 const getAllCategory = async() =>{
    const categories = await fetch(`https://xjob-mindx-production.up.railway.app/api/users/category`,{
      method :"GET"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data
    })
    return categories
  }
  const getAllLocation = async() =>{
    const locations = await fetch(`https://xjob-mindx-production.up.railway.app/api/users/location`,{
      method :"GET"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data
    })
    return locations
  };

 

 const JobApi = {
    allJobs : fetchAllJobs,
    homepageJob: fetchJobHomepage,
    jobDetail: fetchJobDetail,
    categories : getAllCategory,
    locations:getAllLocation
 }

 export default JobApi;