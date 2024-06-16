/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [roomType, setRoomType] = useState("");

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const [BookingNotes, setBookingNotes] = useState("");

    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState(null);

    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const [isFormValid, setIsFormValid] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`${firstName}\n${lastName}\n${email}\n${phone}\n${roomType}\n${adults}\n${children}\n${startDate}\n${startTime}\n${endDate}\n${endTime}`);
    };

    return (

        <form className="form" id="form" action="#">

            <h3 className="form-title">Prenota</h3>

            {/* NAME AND LASTNAME */}
            <div className="wrap-name">

                {/* NAME */}
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        id="firstname"
                        placeholder="es: Mario"
                        minLength="1"
                        pattern="[a-zA-Z\s]{2,}"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                {/* LASTNAME */}
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Cognome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        placeholder="es: Rossi"
                        minLength="1"
                        pattern="[a-zA-Z\s]{2,}"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* EMAIL */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="es: mario.rossi@esempio.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            {/* PHONE NUMBER */}
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Numero Di Telefono</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="es: 123 456 7890"
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            {/* ROOM TYPE */}
            <div className="mb-3">
                <label htmlFor="roomType" className="form-label">Tipo di stanza</label>
                <select
                    className="form-select"
                    name="roomType"
                    id="roomType"
                    onChange={(e) => {
                        setRoomType(e.target.value)
                    }}
                    required
                >
                    <option value="">Seleziona una stanza</option>
                    <option value="single">Singola</option>
                    <option value="double">Doppia</option>
                    <option value="matrimoniale">Matrimoniale</option>
                </select>
            </div>

            {/* NUMBER OF ADULTS */}
            <div className="mb-3">
                <label htmlFor="adults" className="form-label">Numero di Adulti</label>
                <input
                    type="number"
                    className="form-control"
                    name="adults"
                    id="adults"
                    min="1"
                    max="10"
                    pattern="\d{1,2}"
                    onChange={(e) => setAdults(e.target.value)}
                    required
                />
            </div>


            {/* NUMBER OF CHILDREN */}
            <div className="mb-3">
                <label htmlFor="children" className="form-label">Numero di Bambini</label>
                <input
                    type="number"
                    className="form-control"
                    name="children"
                    id="children"
                    min="0"
                    max="10"
                    pattern="\d{1,2}"
                    onChange={(e) => setChildren(e.target.value)}
                    required
                />
            </div>

            {/* BOOKING NOTES */}
            <div className="mb-3">
                <label htmlFor="booking-notes" className="form-label">Note / Informazioni</label>
                <textarea
                    className="form-control"
                    name="booking-notes"
                    id="booking-notes"
                    rows="3"
                    onChange={(e) => setBookingNotes(e.target.value)}
                ></textarea>
            </div>

            {/* BOOKING PERIOD - CHECK-IN */}
            <div className="wrap-checkin">
                <div className="mb-3">
                    <label htmlFor="booking-checkin-date" className="form-label">Data Check-In</label>
                    <input
                        type="date"
                        className="form-control"
                        name="booking-checkin-date"
                        id="booking-checkin-date"
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="booking-checkin-time" className="form-label">Ora Check-In</label>
                    <input
                        type="time"
                        className="form-control"
                        name="booking-checkin-time"
                        id="booking-checkin-time"
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />

                </div>
            </div>

            {/* BOOKING PERIOD - CHECK-OUT */}
            <div className="wrap-checkout">
                <div className="mb-3">
                    <label htmlFor="booking-checkout-date" className="form-label">Data Check-Out</label>
                    <input
                        type="date"
                        className="form-control"
                        name="booking-checkout-date"
                        id="booking-checkout-date"
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="booking-checkin-time" className="form-label">Ora Check-In</label>
                    <input
                        type="time"
                        className="form-control"
                        name="booking-checkin-time"
                        id="booking-checkin-time"
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                </div>


            </div>

            {/* DATA PROCESSING */}
            <div className="mb-3">
                <textarea
                    className="form-control data-processing"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    readOnly
                    defaultValue="In conformità con l’articolo 13 del D.L. 196 del 30 giugno 2003, desideriamo informarLa che i dati da Lei forniti nel modulo saranno trattati esclusivamente al fine di rispondere alla Sua richiesta di informazioni e non saranno comunicati a terzi né oggetto di diffusione."
                >
                </textarea>
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="data-processing"
                    id="data-processing"
                    required
                />
            </div>




            {/* SUBMIT BUTTON */}
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleFormSubmit}
            >
                Invia
            </button>
        </form>
    );
};