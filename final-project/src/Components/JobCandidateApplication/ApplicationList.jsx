import React, { useContext} from "react";
import { List } from "antd";

import { JobContext } from "../../Context/JobContext";
import ApplicationItems from "./ApplicationItems";


function ApplicationList({jobCandidateApplication}){
    console.log('job',jobCandidateApplication);
    return(
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={jobCandidateApplication}
        renderItem={(job) => (
          <List.Item>
            <ApplicationItems job={job} recruimentId={job.recruimentId} id={job.recruimentId._id}/>
          </List.Item>
        )}
      ></List>
    )
}

export default ApplicationList