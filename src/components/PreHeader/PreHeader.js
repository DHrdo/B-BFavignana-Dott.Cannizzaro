import React from "react";

export const PreHeader = () => {
    return (
        <div className="pre-header">
            <img className="telephone-icon" src={process.env.PUBLIC_URL + '/images/telephone-icon.svg'}/>
            <h5 className="booking-tel-number">123 456 7891</h5>
        </div>
    );
};