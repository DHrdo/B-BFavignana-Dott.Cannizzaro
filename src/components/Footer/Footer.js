import React from "react";

export const Footer = ({ isMenuOpened }) => {
    return (
        <div className={!isMenuOpened ? "footer" : "hidden"}>
            <h1>Footer</h1>
        </div>
    )
}