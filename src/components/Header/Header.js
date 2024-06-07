import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { PreHeader } from "../PreHeader/PreHeader";

export const Header = ({ isMenuOpened, handleMenuClick }) => {
    return (
        <div className="header">

            <PreHeader />
            
            <div className="wrap-header">
                <Link to={'/'} className="logo-link">
                    <img 
                        className="bnb-logo-img" 
                        alt="bnb Favignana Logo" 
                        src={process.env.PUBLIC_URL + '/images/logo/bnb-logo.png'}
                    />
                </Link>

                <div className="place-name-container">
                    <h1 className="place-name">B&B Favignana</h1>
                </div>
            </div>
            <div className="wrap-menu">
                <Menu
                    isMenuOpened={isMenuOpened}
                    handleMenuClick={handleMenuClick}
                />
            </div>
        </div>
    );
}
