import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { UserData } from "../UserData/UserData";
import UserApi from "../API/UserApi";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(UserData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [career, setCareer] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const  registerUser = async() => {
    let newUser = UserApi.register(email, password, role);
    setCurrentUser(newUser)
    const updateData = [...UserData, newUser];
    setUserData(updateData);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("userData", JSON.stringify(updateData));

    // push lên API
    let item = { "email":email, "password":password, "role": role }
    let result = await fetch('https://xjob-mindx.herokuapp.com/api/users/register', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
    // localStorage.setItem("userData", JSON.stringify(result))
    return
  };

  // const autologin = () => {
  //   let user = UserApi.autologin();
  //   setCurrentUser(user);
  // };
  // useEffect(() => {
  //   autologin();
  // }, []);

  const updateCandidateInfo = async() => {
    const info = UserApi.candidateInfo(name, gender, age, phone, address, career, description);
    const updateInfo = { ...currentUser, user_info: info };
    setCurrentUser(updateInfo);
    localStorage.setItem("currentUser", JSON.stringify(updateInfo));

    let item = { "name":name, "gender":gender, "age": age, "phoneNumber": phone, "address": address, "career": career, "description": description }
    let result = await fetch('https://xjob-mindx.herokuapp.com/api/users/updateinfo', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
    // localStorage.setItem("userData", JSON.stringify(result))

    return
  };

  const updateRecruiterInfo = async() => {
    const info = UserApi.recruiterInfo(company, website, companyEmail, phone, address, career, description);
    const updateInfo = { ...currentUser, user_info: info };
    setCurrentUser(updateInfo);
    localStorage.setItem("currentUser", JSON.stringify(updateInfo));

    let item = { "name":company, "website":website, "email": companyEmail, "phoneNumber": phone, "address": address, "career": career, "description": description }
    let result = await fetch('https://xjob-mindx.herokuapp.com/api/users/updateinfo', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
    // localStorage.setItem("userData", JSON.stringify(result))

    return
  }


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
    company,
    setCompany,
    website,
    setWebsite,
    companyEmail,
    setCompanyEmail,
    phone,
    setPhone,
    address,
    setAddress,
    career,
    setCareer,
    description,
    setDescription,
    name,
    setName,
    gender,
    setGender,
    age,
    setAge,
    updateCandidateInfo,
    updateRecruiterInfo
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
