import React from "react";
import { useSelector } from "react-redux";

export default function HomePage(){
    const {user} = useSelector(state=>state.auths)
    
    return (
        <div className="home-page">
            HomePage
        </div>
    )
}