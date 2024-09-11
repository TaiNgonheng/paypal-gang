import React from 'react';
import { Link} from "react-router-dom";

const MainContainer = (props) => {
    return(
        <div>
            <ul style={{textAlign:"center"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                {props.children}
            </ul>

        </div>
    )
}
export default MainContainer;