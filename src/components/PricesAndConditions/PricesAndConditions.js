import React from "react";
import dateperiods from "../../JSON/booking-periods.json";

export const PricesAndConditions = ({
    isMenuOpened
}) => {

    const mapPeriods = dateperiods.map((item, index) => {
        return (
            <div className="section" key={index}>
                <h4 className="section-title">{item.name}</h4>
                <div className="wrap-dates">
                    <p className="first-date">{item.date?.[0] || ""}</p>
                    <p className="second-date">{item.date?.[1] || ""}</p>
                </div>
                <div className="wrap-prices">
                    <p className="room-price">SINGOLA: <b>{item.prices?.["Singola"] || ""}</b></p>
                    <p className="room-price">DOPPIA (USO SINGOLA): <b>{item.prices?.["Doppia Uso Singola"] || ""}</b></p>
                    <p className="room-price">DOPPIA MATRIMONIALE: <b>{item.prices?.["Doppia Matrimoniale"] || ""}</b></p>
                </div>
            </div>
        )
    });

    return (
        <div className={isMenuOpened ? "hidden" : "prices-and-conditions"}>
            <p className="title">PREZZI E CONDIZIONI</p>
            <div className="prices-table">
                {mapPeriods}
            </div>
        </div>
    );
};