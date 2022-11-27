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

  const registerUser = () => {
    let newUser = UserApi.register(email, password, role);
    setCurrentUser(newUser)
    const updateData = [...UserData, newUser];
    setUserData(updateData);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("userData", JSON.stringify(updateData));
  };

  // const autologin = () => {
  //   let user = UserApi.autologin();
  //   setCurrentUser(user);
  // };
  // useEffect(() => {
  //   autologin();
  // }, []);

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
    setAge
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
