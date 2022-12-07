import axios from "axios";

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
    const JobDetailUrl = allJobUrl + "/" + id;

    const res = await axios({
        method: "get",
        url: JobDetailUrl,
        type: "json",
    });

    if (res.status === 200) {
        return res.data;
    }
 }

 const JobApi = {
    allJobs : fetchAllJobs,
    homepageJob: fetchJobHomepage,
    jobDetail: fetchJobDetail
 }

 export default JobApi;