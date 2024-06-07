import React from "react";

export const Footer = ({ isMenuOpened }) => {
    return (
        <div className={!isMenuOpened ? "footer" : "hidden"}>
            <h2 className="footer-title">B&B Favignana</h2>
            <div class="upper-footer">
                <h4 className="footer-contacts-title">Contatti</h4>
                <p class="footer-contacts-address"> <b>Indirizzo</b>: Via del Mare, Favignana</p>

                <p class="footer-contacts-phone"> Telefono: 
                    <a href="tel:3927252398">392 725 2398</a>
                </p>

                <p class="footer-contacts-mail"> Email: 
                    <a href="emailto:info@favignanabb.com">info@favignanabb.com</a>
                </p>
            </div>
            <div class="bottom-footer">
                <div class="footer-copyright">
                    <p>&copy; 2024 Favignana B&B - Tutti i diritti riservati.</p>
                </div>
            </div>


            <div class="post-footer">
                <p className="cookies"><a href="https://www.cookiesandyou.com/">Cookies</a></p>
                <span className="separator">|</span>
                <p className="privacy-policy"><a href="https://www.cookiesandyou.com/">Privacy Policy</a></p>
            </div>
        </div>
    );
};