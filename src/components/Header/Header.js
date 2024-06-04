import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrap-header">
                <Link to={'/'} className="logo-link">
                    <img className="bnb-logo-img" src={process.env.PUBLIC_URL + '/images/logo/bnb-logo.png'}></img>
                </Link>

                <div className="place-name-container">
                    <h1 className="place-name">B&B Favignana</h1>
                </div>
            </div>
        </div>
    )
}