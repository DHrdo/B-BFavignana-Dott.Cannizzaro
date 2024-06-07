import React from "react";

export const Main = ({ isMenuOpened }) => {
    return (
        <main className={!isMenuOpened ? "main" : "hidden"}>
            <h1>Main</h1>
        </main>
    );
}