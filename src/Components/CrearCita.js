import React, { useState } from "react";

const CrearCita = ({setCitas}) => {

    const initialState = {
        id : new Date().getTime(),
        mascota: "",
        dueño: "",
        sintomas: "",
    }

    const [inputValue, setInputValue] = useState(initialState);

    //creo este state para mostrar el cartel
    const [validation, setValidation] = useState(false)

    const { mascota, dueño, sintomas } = inputValue;
   

    const handleInputChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value,
        });
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();

        const validateInputs = [mascota, dueño, sintomas].some( input => input === '');
        
        if(validateInputs){
            setValidation(true);
            return;
        }

        setValidation(false);
        setCitas(prevState => [inputValue , ...prevState]);
        setInputValue(initialState);
    };


    return (
        <div className = 'crear-cita-form'>
            <h2 className="titulo titulo-cita">CREAR CITA</h2>

            { validation  && (<h4 className='validationMensaje'>COMPLETE TODOS LOS CAMPOS</h4>) } 

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

export default CrearCita;
