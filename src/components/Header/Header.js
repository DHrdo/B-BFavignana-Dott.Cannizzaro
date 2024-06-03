import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrap-logo-container">
                <Link to={'/'}>
                    <img className="bnb-logo-img" src={process.env.PUBLIC_URL + '/images/logo/bnb-logo.png'}></img>
                </Link>
            </div>
            
             
        </div>
    )
}