/* eslint-disable default-case */
import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { Directions } from "../Directions/Directions";
import { PricesAndConditions } from "../PricesAndConditions/PricesAndConditions";

export const Main = ({ isMenuOpened, language }) => {

    const mainDescriptionLanguage = () => {
        switch (language) {
            case 'italian':
                return (
                    <p className="location-description">
                        Il <span className="highlight">B&B Favignana</span>,
                        incastonato nel cuore storico di un incantevole paesino,
                        rappresenta una destinazione perfetta per chi cerca una vacanza all'insegna del relax e della bellezza naturale.
                        La vicinanza alla spiaggia <span className="highlight">La Playa</span> lo rende ideale per le famiglie,
                        mentre la varietà di servizi disponibili garantisce comodità e divertimento per tutti i visitatori.
                        L'isola di Favignana, gioiello delle Egadi, offre scenari mozzafiato e un mare cristallino da esplorare,
                        oltre a una vivace vita sociale per i più giovani. La tranquillità estiva del centro pedonale arricchisce l'esperienza,
                        permettendo di immergersi completamente nella serenità dell'isola.
                    </p>
                );
            case 'english':
                return (
                    <p className="location-description">
                        The <span className="highlight">B&B Favignana</span>,
                        nestled in the historic heart of a charming village,
                        represents a perfect destination for those seeking a vacation full of relaxation and natural beauty.
                        The proximity to the beach <span className="highlight">La Playa</span> makes it ideal for families,
                        while the variety of available services guarantees comfort and fun for all visitors.
                        The island of Favignana, the jewel of the Egadi, offers breathtaking scenery and crystal-clear waters to explore,
                        as well as a lively social life for the younger crowd. The summer tranquility of the pedestrian center enriches the experience,
                        allowing for a complete immersion in the serenity of the island.
                    </p>
                );
        }
    }

    return (
        <main className={!isMenuOpened ? "main" : "hidden"}>

            <div className="text-location-container">
                <h4 className="description-title">Il Tuo Rifugio Perfetto nel Cuore di Favignana</h4>
                {mainDescriptionLanguage()}
            </div>


            <Carousel />
            <span className="line"></span>
            <Directions isMenuOpened={isMenuOpened} />
            <PricesAndConditions isMenuOpened={isMenuOpened} language={language} />
            <span className="line"></span>
        </main>
    );
};
