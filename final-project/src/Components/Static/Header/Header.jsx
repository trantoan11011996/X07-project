import React, { useState } from "react";
import { Layout, Menu, Button, Avatar, Row, Col, Space, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Header/Header.css";
export default function Header() {
  const navigation = [
    { label: "Home", key: "/" },
    { label: "Login", key: "/login" },
    { label: "Register", key: "/register" },
  ];
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key) {
      navigate(key);
    }
  };
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Row style={{ backgroundColor: "white" }}>
        <Col style={{ padding: 5, margin: 0, height: 48 }} flex="300px">
          <a href="/">
            <img src="/logo.png" alt="logo" style={{ height: 38 }} />
          </a>
        </Col>

        <Col
          style={{ paddingRight: 100, margin: 0, height: 48 }}
          flex="300px"
        ></Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            items={navigation}
            onClick={handleMenuClick}
          />
        </Col>
      </Row>

      <Layout
        style={{
          padding: 0,
          backgroundColor: "white",
          marginLeft: 28,
          marginRight: 28,
        }}
      >
        <Outlet />
      </Layout>
    </Layout>
  );
}
