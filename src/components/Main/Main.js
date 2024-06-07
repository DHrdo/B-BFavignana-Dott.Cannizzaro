import React from "react";
import { Carousel } from "../Carousel/Carousel";

export const Main = ({ isMenuOpened }) => {
    return (
        <main className={!isMenuOpened ? "main" : "hidden"}>
            <Carousel />
        </main>
    );
}