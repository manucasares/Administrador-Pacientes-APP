import React, { useEffect } from "react";

const CitaCreada = ({ citas, setCitas }) => {

    useEffect(() => {
        setCitas(JSON.parse(localStorage.getItem("citas") || []))
    }, [setCitas])

    useEffect(() => {     
        localStorage.setItem('citas', JSON.stringify(citas));  
    }, [citas])

    const handleDelete = (id) => {
        const newCitas = citas.filter((cita) => cita.id !== id);
        setCitas(newCitas);
    }

    return (
        <div className="child-container">

            {citas.length === 0 && <h2 className="titulo titulo-cita">NO HAY CITAS</h2>}

            
            <div className="cita-creada-container">
                {citas.map(({ id, mascota, dueño, sintomas }) => (
                    <div key={id} className="cita-creada">
                        <p>
                            <span>Mascota:</span> {mascota}
                        </p>
                        <p>
                            <span>Dueño:</span> {dueño}
                        </p>
                        <p>
                            <span>Sintomas:</span> {sintomas}
                        </p>
                        <button onClick={() => handleDelete(id)}>ELIMINAR</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitaCreada;
