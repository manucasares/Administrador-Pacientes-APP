import React, { useState } from "react";

const CrearCitaForm = ({setCitas}) => {
    const [inputValue, setInputValue] = useState({
        mascota: "",
        dueño: "",
        sintomas: "",
    });

    const { mascota, dueño, sintomas } = inputValue;


    const handleInputChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value,
        });
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();

        setCitas(prevState => [inputValue , ...prevState])
    };


    return (
        <div className = 'crear-cita-form'>
            <h2 className="titulo titulo-cita">CREAR CITA</h2>

            <form onSubmit={handleInputSubmit}>
                <label htmlFor="nombre_mascota">Nombre Mascota</label>
                <input
                    value={mascota}
                    name="mascota"
                    type="text"
                    id="nombre_mascota"
                    placeholder="Nombre Mascota"
                    onChange={handleInputChange}
                    autoComplete = 'off'
                />

                <label htmlFor="nombre_dueño">Nombre Dueño</label>
                <input
                    value={dueño}
                    name="dueño"
                    type="text"
                    id="nombre_dueño"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleInputChange}
                    autoComplete = 'off'
                />

                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                    value={sintomas}
                    name="sintomas"
                    type="textarea"
                    id="sintomas"
                    minLength="200px"
                    onChange={handleInputChange}
                    autoComplete = 'off'
                />

                <button type="submit">AGREGAR CITA</button>
            </form>
        </div>
    );
};

export default CrearCitaForm;
