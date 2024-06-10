import React from "react";

export const PreHeader = ({
    handleLanguageChange,
    language
}) => {

    return (
        <div className="pre-header">

            <h5 className="book-now">{language === 'english' ? 'Book Now!' : 'Prenota!'}</h5>

            <div className="wrap-book-now">

                <img
                    className="telephone-icon"
                    src={process.env.PUBLIC_URL + '/images/telephone-icon.svg'}
                    alt="telephone icon"
                />
                <h5 className="booking-tel-number">392 725 2398</h5>
            </div>

            <div className="wrap-change-language">
                <img
                    className="flag-icon"
                    src={process.env.PUBLIC_URL + '/images/flags/italian-flag-icon.svg'}
                    alt="flag icon"
                    onClick={() => handleLanguageChange('italian')}
                />

                <img
                    className="flag-icon"
                    src={process.env.PUBLIC_URL + '/images/flags/english-flag-icon.svg'}
                    alt="flag icon"
                    onClick={() => handleLanguageChange('english')}
                />
            </div>
        </div>
    );
};