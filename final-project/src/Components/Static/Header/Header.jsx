import React, { useState }  from "react";
import { Layout } from "antd";
import AuthHeader from "./AuthHeader";
export default function Header(){
  const { Header } = Layout;
    

    return(
      <Layout>
        <Header className="header" style={{alignItems: "center"}}>   
          <div className="logo"/>
          <div>
          <AuthHeader mode={"horizontal"} />
          </div>
        </Header>
    </Layout>
  );
}
