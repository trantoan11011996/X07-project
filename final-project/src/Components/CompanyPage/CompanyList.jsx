import React, { useContext} from "react";
import { List } from "antd";
import CompanyItems from "./items";
import { JobContext } from "../../Context/JobContext";
function CompanyList({company}){
  console.log(company);
    
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
        dataSource={company}
        renderItem={(company) => (
          <List.Item>
            <CompanyItems company={company} id={company._id} />
          </List.Item>
        )}
      ></List>
    )
}

export default CompanyList