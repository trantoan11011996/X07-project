import React from "react";
import axios from 'axios'
import uuid from "react-uuid"
const register =  (email,password,user_role) =>{
        
        const newUser = {
            "_id" : uuid(),
            email : email,
            password : password,
            user_role : user_role,
            user_info : {},
            user_status : 0,
        }
        return newUser
};

const candidateInfo = (name, gender, age, phone, address, career, description,) => {
    const userInfo = {
      fullname: name,
      age: age,
      gender: gender,
      phoneNumber: phone,
      address: address,
      career: career,
      description: description
    }
    return userInfo
};

const recruiterInfo = (company, website, companyEmail, phone, address, career, description) => {
    const userInfo = {
        name: company,
        website: website,
        email: companyEmail,
        phoneNumber: phone,
        address: address,
        career: career,
        description: description
    }
    return userInfo
};


const autoLogin = () =>{
    const json = localStorage.getItem('currentUser')
    return json ? JSON.parse(json) : null
};;

const UserApis  = {
    register : register,
    autologin : autoLogin,
    candidateInfo: candidateInfo,
    recruiterInfo: recruiterInfo
};
export default UserApis





