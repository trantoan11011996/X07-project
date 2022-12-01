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
  const [token,setToken] = useState(null)
  const { user } = useSelector((state) => state.auths);
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [operationSector, setOperationSector] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  useEffect(()=>{
    setToken(user?.token)
  },[user])
  
  const registerUser = async () => {
    let newUser = UserApi.register(email, password, role);
    setCurrentUser(newUser);
    // push lên API
    let item = { email: email, password: password, role: role };
    let result = await fetch(
      "https://xjob-mindx.herokuapp.com/api/users/register",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    if (result.token) {
      setCurrentUser(result);
      setToken(result.token)
      localStorage.setItem("currentUser", JSON.stringify(result));
    }
    return result;
  };

  const autologin = () => {
    let user = UserApi.autologin();
    if (!user) {
      return;
    }
    setShowLogin(false);
    return user
  };
  const logOutUser = () => {
    UserApi.logOut();
    setShowLogin(true);
    setCurrentUser(null);
  };
  useEffect(() => {
    const current = autologin();
    setCurrentUser(current)
  }, []);

  const updateCandidateInfo = async () => {
    const info = UserApi.candidateInfo(
      name,
      gender,
      age,
      phone,
      address,
      category,
      description
    );
    console.log("info",info);
    console.log('curent user',currentUser);
    const user_info = await fetch(
      "https://xjob-mindx.herokuapp.com/api/users/update-profile",
      {
        method: "PUT",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    ).then((res)=>{
      return res.json()
    }).then((data)=>{
      localStorage.setItem('currentUser',JSON.stringify(data))
      setCurrentUser(data)
      console.log('data',data);
      return data;
    })
    // if(user_info.token){
    //   setCurrentUser(user_info)
    //   localStorage.setItem("currentUser", JSON.stringify(user_info))
    // }
    return user_info;
  };

  const updateRecruiterInfo = async () => {
    const info = UserApi.recruiterInfo(
      companyEmail,
      companyEmail,
      companyPhone,
      companyAddress,
      companyDescription,
      operationSector,
    );
    let result = await fetch(
      "https://xjob-mindx.herokuapp.com/api/users/updateinfo",
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    result = await result.json();
    if (!result.message) {
      localStorage.setItem("currentUser", JSON.stringify(result));
      return result;
    }
    return result;
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
    operationSector,
    setCompanyEmail,
    setCompanyPhone,
    setCompanyAddress,
    setOperationSector,
    setCompanyDescription,
    setCompanyName,
    token

  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
