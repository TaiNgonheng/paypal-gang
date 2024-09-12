import React from "react";
import {Link } from "react-router-dom";

const MainContainer = (props) =>{
    return(
        <h1 style={{textAlign:"center"}}>
            <ul>
                <li><Link to="/">Home nv kng Maincontainer</Link></li>
                <li><Link to="/profile">Profile nv kng Maincontainer</Link></li>
                <li><Link to="/contact">Contact nv kng Maincontainer</Link></li>
                <li><Link to="/about">About Us nv kng Maincontainer</Link></li>
                {props.children}
            </ul>
        </h1>
    )
}
export default MainContainer;