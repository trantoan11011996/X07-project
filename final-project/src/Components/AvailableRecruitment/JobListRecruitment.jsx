import React, { useContext} from "react";
import { List } from "antd";
import JobItemRecruitment from "./JobItemRecruitment";
import { JobContext } from "../../Context/JobContext";
function JobListRecruitment({myJobRecruitment,removeRcm}){
  // console.log(myJobRecruitment);

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
        dataSource={myJobRecruitment}
        renderItem={(myJobRecruitment) => (
          <List.Item>
            <JobItemRecruitment myJobRecruitment={myJobRecruitment} id={myJobRecruitment._id} removeRcm={removeRcm} />
          </List.Item>
        )}
      ></List>
    )
}

export default JobListRecruitment