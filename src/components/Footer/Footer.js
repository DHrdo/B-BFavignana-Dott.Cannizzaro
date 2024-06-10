import React from "react";

export const Footer = ({ isMenuOpened }) => {
    return (
        <div className={!isMenuOpened ? "footer" : "hidden"}>
            <h2 className="footer-title">B&B Favignana</h2>
            <div className="upper-footer">
                <h4 className="footer-contacts-title">Contatti</h4>

                <div className="wrap-address">
                    <p className="footer-contacts-address"> <b>Indirizzo</b>: Via Roma, 15, Favignana</p>
                    <a
                        className="map-icon"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.google.com/maps/place/Via+Roma,+15,+91023+Favignana+TP,+Italia/@37.931079,12.329205,17z/data=!4m6!3m5!1s0x131be3eddf621ab9:0x4f40b037da470600!8m2!3d37.9310792!4d12.3292045!16s%2Fg%2F11gfm3_72q?hl=it&entry=ttu">

                        <img
                            src={process.env.PUBLIC_URL + '/images/map-icon.svg'}
                            alt="map icon"
                        />
                    </a>
                </div>
                

                <p className="footer-contacts-phone"> Telefono:
                    <a href="tel:3927252398">392 725 2398</a>
                </p>

                <p className="footer-contacts-mail"> Email:
                    <a href="emailto:info@favignanabb.com">info@favignanabb.com</a>
                </p>
            </div>
            <div className="bottom-footer">
                <div className="footer-copyright">
                    <p>&copy; 2024 Favignana B&B - Tutti i diritti riservati.</p>
                </div>
            </div>


            <div className="post-footer">
                <p className="cookies"><a href="https://www.cookiesandyou.com/">Cookies</a></p>
                <span className="separator">|</span>
                <p className="privacy-policy"><a href="https://www.cookiesandyou.com/">Privacy Policy</a></p>
            </div>
        </div>
    );
};