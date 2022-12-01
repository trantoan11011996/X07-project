import React, { useContext, useState, useEffect } from "react";
import { Spin, Layout, Menu } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { JobContext } from "../../../Context/JobContext";

export default function HomeJobs (){
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
//   const GetJobsForHp = async () => {
//     await axios
//       .get("https://xjob-mindx.herokuapp.com/api/recruiments/home-page")
//       .then((res) => {
//         const data = res.data;
//         setJobs(data);
//         setIsLoading(false);
//         if (!localStorage.getItem("jobs")) {
//           localStorage.setItem("jobs", JSON.stringify(data));
//           console.log(jobs);
//         }
//       })
//       .catch((error) => console.log(`error: ${error}`));
//   };
//   useEffect(() => {
//     GetJobsForHp();
    
//   }, []);

  const { Content, Sider } = Layout;
  return (
    <JobContext.Provider value={{ jobs }}>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Content style={{ padding: "0 24px", height: "690px" }}>
          Content
        </Content>
        <Sider className="site-layout-background" width={"40%"}></Sider>
      </Layout>
    </JobContext.Provider>
  );
};
