import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <div>
            <ul>
                <li><Link to="/resources"> Resources</Link></li>
                <li><Link to="/tracker"> Tracker </Link></li>
            </ul>
        </div>

    )




}

export default Landing;