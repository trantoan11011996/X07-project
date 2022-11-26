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

  const registerUser = () => {
    let newUser = UserApi.register(email, password, role);
    const updateData = [...UserData, newUser];
    console.log('user',updateData);
    setUserData(updateData);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("userData", JSON.stringify(updateData));
  };
  const autologin = () => {
    let user = UserApi.autologin();
    setCurrentUser(user);
  };
  useEffect(() => {
    autologin();
  }, []);

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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
