import React from "react";

const publicPath = process.env.PUBLIC_URL;
const servicesList = [
    { distance: "500m", image: publicPath + "/images/services/boat.svg", alt: "boat icon" },
    { distance: "100m", image: publicPath + "/images/services/cafè.svg", alt: "cafè icon" },
    { distance: "160m", image: publicPath + "/images/services/bicycle.svg", alt: "bicycle icon" },
    { distance: "10+", image: publicPath + "/images/services/restaurant.svg", alt: "restaurant icon" },
    { distance: "80m", image: publicPath + "/images/services/pharmacy.svg", alt: "pharmacy icon" },
    { distance: "180m", image: publicPath + "/images/services/restaurant.svg", alt: "restaurant icon" },
    { distance: "150m", image: publicPath + "/images/services/atm.svg", alt: "atm icon" },
];
export const Directions = ({
    isMenuOpened
}) => {


    return (
        <div className={isMenuOpened ? "hidden" : "directions"}>
            <div className="directions-container">
                <h2 className="directions-title">Dove siamo</h2>
                <p className="directions-description">
                    Il nostro Bed & Breakfast è un'oasi di comfort situata in <br /><b>Via Roma 15, Favignana</b>.
                </p>
            </div>

            <div className="near-locations-container">
                <h2 className="services-title">Nei Dintorni</h2>
                <ul className="services-list">
                    {servicesList.map((item, index) => (
                        <li key={index} className="service-item">
                            <img
                                className="service-type-image"
                                src={item.image}
                                alt={item.alt}
                            />
                            <p className="service-distance">{item.distance}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

