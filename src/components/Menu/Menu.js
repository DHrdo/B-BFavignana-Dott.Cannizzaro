import React from "react";

export const Menu = ({
    isMenuOpened,
    handleMenuClick,
    language,
}) => {
    const menuItems = [
        { label: 'Home', englishLabel: 'Home' },
        { label: 'Stanze', englishLabel: 'Rooms' },
        { label: 'Dove siamo', englishLabel: 'Where We Are' },
        { label: 'Prezzi e Condizioni', englishLabel: 'Prices and Conditions' },
        { label: 'Informazioni e Offerte', englishLabel: 'Information and Offers' },
    ];

    return (
        <div className="menu">
            <label className="hamburger-menu" htmlFor="check">
                <input type="checkbox" id="check" onClick={handleMenuClick} />
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div className={!isMenuOpened ? "hidden" : "wrap-menu-items"}>
                <ul className="list">
                    {menuItems.map((item, index) => (
                        <li key={index} className="item">{language === 'english' ? item.englishLabel : item.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
