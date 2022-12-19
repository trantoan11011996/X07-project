import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { UserData } from "../UserData/UserData";
import UserApi from "../API/UserApi";
import axios from "axios";
import { useSelector } from "react-redux";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(UserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [token, setToken] = useState(null);
  const { user } = useSelector((state) => state.auths);
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [fieldActivity, setFieldActivity] = useState("");

  useEffect(() => {
    const current = autologin();
    setCurrentUser(current);
  }, []);
  useEffect(() => {
    setToken(user?.token);
  }, [user]);
  useEffect(() => {
    let getToken = localStorage.getItem("token");
    if (getToken) {
      getToken = JSON.parse(getToken);
      setToken(getToken);
      return;
    }
    return;
  }, []);

  const registerUser = async () => {
    // push lên API
    let item = { email: email, password: password, role: role };
    let user = await fetch(
      "https://xjob-mindx-production.up.railway.app/api/users/register",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (res.status === "400") {
          throw new Error(`loi 400`);
        }
        return res.json();
      })
      .then((data) => {
        if(!data.message){
          setCurrentUser(data);
          setToken(data.token);
          localStorage.setItem("currentUser", JSON.stringify(data));
          localStorage.setItem("token", JSON.stringify(data.token));
          return data
        }
        return 
      })
      .catch((err) => {
        console.log(err);
      });
    return user;
  };

  const autologin = () => {
    let user = UserApi.autologin();
    if (!user) {
      return;
    }
    setShowLogin(false);
    return user;
  };
  const logOutUser = () => {
    UserApi.logOut();
    setShowLogin(true);
    setCurrentUser(null);
  };

  const updateCandidateInfo = async (description) => {
    const info = UserApi.candidateInfo(
      name,
      gender,
      age,
      phone,
      address,
      category,
      description
    );

    const user_info = await fetch(
      "https://xjob-mindx-production.up.railway.app/api/users/update-profile",
      {
        method: "PUT",
        body: JSON.stringify(info),
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
        console.log('data',data);
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.info = data.info;
        user.category = data.caterogry
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        return data;
      });
    // if(user_info.token){
    //   setCurrentUser(user_info)
    //   localStorage.setItem("currentUser", JSON.stringify(user_info))
    // }
    return user_info;
  };

  const updateRecruiterInfo = async (
    companyName,
    companyEmail,
    companyPhone,
    companyAddress,
    ckEditorOutput,
    operationSector
  ) => {
    const info = UserApi.recruiterInfo(
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      ckEditorOutput,
      operationSector
    );
    console.log("info",info);
    let user_info = await fetch(
      "https://xjob-mindx-production.up.railway.app/api/users/update-profile",
      {
        method: "PUT",
        body: JSON.stringify(info),
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
        console.log("data",data);
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.info = data.info;
        user.operationSector = data.operationSector
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        return data;
      });
    return user_info;
  };

  const value = {
    userData,
    registerUser,
    setEmail,
    setPassword,
    setRole,
    email,
    password,
    role,
    setConfirmPassword,
    confirmPassword,
    currentUser,
    setCurrentUser,
    phone,
    setPhone,
    address,
    setAddress,
    category,
    setCategory,
    description,
    setDescription,
    name,
    setName,
    gender,
    setGender,
    age,
    setAge,
    updateCandidateInfo,
    updateRecruiterInfo,
    setShowLogin,
    showLogin,
    logOutUser,
    currentUser,
    setCurrentUser,
    companyEmail,
    companyName,
    companyPhone,
    companyAddress,
    companyDescription,
    setCompanyEmail,
    setCompanyPhone,
    setCompanyAddress,
    setCompanyDescription,
    setCompanyName,
    setFieldActivity,
    token,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
