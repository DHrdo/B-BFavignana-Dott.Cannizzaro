import React from "react";
import datePeriodsIT from "../../JSON/booking-periods_it.json";
import datePeriodsEN from "../../JSON/booking-periods_en.json";

export const PricesAndConditions = ({ language, isMenuOpened, }) => {
    const renderBookingPeriods = () => {
        const periods = language === 'italian' ? datePeriodsIT : datePeriodsEN;

        return periods.map((item, index) => {
            const { name_it: nameIT = '', name_en: nameEN = '', date = [], prices = {} } = item;

            return (
                <div className="section" key={index}>
                    <h4 className="section-title">{language === 'italian' ? nameIT : nameEN}</h4>
                    <div className="wrap-dates">
                        <p className="first-date">{date[0] || ""}</p>
                        <p className="second-date">{date[1] || ""}</p>
                    </div>
                    <div className="wrap-prices">
                        {Object.keys(prices).map((priceKey, priceIndex) => (
                            <p className="room-price" key={priceIndex}> {priceKey}: <b>{prices[priceKey]}</b></p>
                        ))}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={isMenuOpened ? "hidden" : "prices-and-conditions"}>
            <p className="title">{language === 'italian' ? 'PREZZI E CONDIZIONI' : 'PRICES AND CONDITIONS'}</p>
            <div className="prices-table">
                {renderBookingPeriods()}
            </div>
        </div>
    );
};
