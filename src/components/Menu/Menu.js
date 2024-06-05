import React from "react";

export const Menu = ({ isMenuOpened, handleMenuClick }) => {
    return (
        <div className="menu">
            <label htmlFor="check">
                <input type="checkbox" id="check" onClick={handleMenuClick}/> 
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div className={!isMenuOpened ? "hidden" : "wrap-menu-items"}>
                <ul className="list">
                    <li className="item">Home</li>
                    <li className="item">Foto Stanze</li>
                    <li className="item">Dove Siamo</li>
                    <li className="item">Tariffe e Condizioni</li>
                    <li className="item">Informazioni e Preventivi</li>
                </ul>
            </div>
        </div>
    );
}
