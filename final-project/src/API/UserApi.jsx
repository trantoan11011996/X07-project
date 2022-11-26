import React from "react";
import axios from 'axios'
import uuid from "react-uuid"
const register =  (email,password,user_role) =>{
        console.log('email',email);
        console.log('password',password);
        const newUser = {
            "_id" : uuid(),
            email : email,
            password : password,
            user_role : user_role,
            user_info : {},
            user_status : 0,
        }
        return newUser
}
const autoLogin = () =>{
    const json = localStorage.getItem('currentUser')
    return json ? JSON.parse(json) : null
}

const UserApis  = {
    register : register,
    autologin : autoLogin
}
export default UserApis