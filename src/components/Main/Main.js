import React from "react";
import { Carousel } from "../Carousel/Carousel";

export const Main = ({ isMenuOpened }) => {
    return (
        <main className={!isMenuOpened ? "main" : "hidden"}>
            <Carousel />

            <div class="content">
                <h2 className="description-title">
                    Il Tuo Rifugio Perfetto nel Cuore di Favignana
                </h2>
                <p>Il <span class="highlight">B&B Favignana</span>, incastonato nel cuore storico di un incantevole paesino, rappresenta una destinazione perfetta per chi cerca una vacanza all'insegna del relax e della bellezza naturale. La vicinanza alla spiaggia <span class="highlight">La Playa</span> lo rende ideale per le famiglie, mentre la varietà di servizi disponibili garantisce comodità e divertimento per tutti i visitatori. L'isola di Favignana, gioiello delle Egadi, offre scenari mozzafiato e un mare cristallino da esplorare, oltre a una vivace vita sociale per i più giovani. La tranquillità estiva del centro pedonale arricchisce l'esperienza, permettendo di immergersi completamente nella serenità dell'isola.</p>
            </div>
        </main>
    );
};