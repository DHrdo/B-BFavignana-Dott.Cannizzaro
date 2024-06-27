import React, { useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import form_language from "../../JSON/form_language.json"

const InputField = ({ label, type, id, placeholder, pattern, min, max, required, onChange }) => (
    <div className="mb-3">
        {label && <label htmlFor={id} className="form-label">{label}</label>}
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            pattern={pattern}
            min={min}
            max={max}
            onChange={onChange}
            required={required}
        />
    </div>
)

const SelectField = ({ label, id, options, required, onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <select className="form-select" id={id} onChange={onChange} required={required}>
            <option value="">{label}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
)

const TextAreaField = ({ label, id, rows, readOnly, defaultValue, onChange }) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <textarea
            className="form-control"
            id={id}
            rows={rows}
            readOnly={readOnly}
            defaultValue={defaultValue}
            onChange={onChange}
        />
    </div>
)

const CheckboxField = ({ label, id, required, onChange }) => (
    <div className="mb-3 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id={id}
            onChange={onChange}
            required={required}
        />
        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
)

export const Form = ({ language }) => {

    const labels = form_language[language] || form_language["italian"]


    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        roomType: "",
        adults: 0,
        children: 0,
        bookingNotes: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        dataProcessing: false,
        isFormValid: false
    })

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target
        setFormState(prevState => ({
            ...prevState,
            [id]: type === "checkbox" ? checked : value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <form className="form" id="form" onSubmit={handleFormSubmit}>
            <h3 className="form-title">{labels.submit}</h3>

            <div className="wrap-name">
                <InputField
                    label={labels.firstName}
                    type="text"
                    id="firstName"
                    placeholder="es: Mario"
                    pattern="[a-zA-Z\s]{2,}"
                    onChange={handleInputChange}
                    required
                />
                <InputField
                    label={labels.lastName}
                    type="text"
                    id="lastName"
                    placeholder="es: Rossi"
                    pattern="[a-zA-Z\s]{2,}"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <InputField
                label={labels.email}
                type="email"
                id="email"
                placeholder="es: mario.rossi@esempio.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={handleInputChange}
                required
            />
            <InputField
                label={labels.phone}
                type="tel"
                id="phone"
                placeholder="es: 123 456 7890"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                onChange={handleInputChange}
                required
            />
            <SelectField
                label={labels.roomType}
                id="roomType"
                options={[
                    { value: "single", label: labels.single },
                    { value: "double", label: labels.double },
                    { value: "matrimonial", label: labels.matrimonial }
                ]}
                onChange={handleInputChange}
                required
            />
            <InputField
                label={labels.adults}
                type="number"
                id="adults"
                min="1"
                max="10"
                onChange={handleInputChange}
                required
            />
            <InputField
                label={labels.children}
                type="number"
                id="children"
                min="0"
                max="10"
                onChange={handleInputChange}
                required
            />
            <TextAreaField
                label={labels.bookingNotes}
                id="bookingNotes"
                rows="3"
                onChange={handleInputChange}
            />
            <div className="wrap-checkin">
                <InputField
                    label={labels.startDate}
                    type="date"
                    id="startDate"
                    onChange={handleInputChange}
                    required
                />
                <InputField
                    label={labels.startTime}
                    type="time"
                    id="startTime"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="wrap-checkout">
                <InputField
                    label={labels.endDate}
                    type="date"
                    id="endDate"
                    onChange={handleInputChange}
                    required
                />
                <InputField
                    label={labels.endTime}
                    type="time"
                    id="endTime"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <TextAreaField
                label={labels.privacyInfo}
                id="dataProcessingInfo"
                rows="8"
                readOnly
                defaultValue={
                    "[IT] In conformità con l’articolo 13 del D.L. 196 del 30 giugno 2003, desideriamo informarLa che i dati da Lei forniti nel modulo saranno trattati esclusivamente al fine di rispondere alla Sua richiesta di informazioni e non saranno comunicati a terzi né oggetto di diffusione.\n\n[EN] In accordance with Article 13 of Legislative Decree 196 of June 30, 2003, we would like to inform you that the data you provide in the form will be processed exclusively for the purpose of responding to your request for information and will not be disclosed to third parties or disseminated."
                } 
            />
            <CheckboxField
                label={labels.acceptPrivacy}
                id="dataProcessing"
                onChange={handleInputChange}
                required
            />
            <button type="submit" className="btn btn-primary">{labels.submit}</button>
        </form>
    )
}
