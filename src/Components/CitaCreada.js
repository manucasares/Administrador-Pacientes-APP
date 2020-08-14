import React from "react";

const CitaCreada = ({ citas }) => {
    return (
        <div className="child-container">

            {citas.length === 0 && <h2 className="titulo titulo-cita">NO HAY CITAS</h2>}
            {citas.map(({ mascota, dueño, sintomas }) => (
                <div key={dueño} className="cita-creada">
                    <p>
                        <span>Mascota:</span> {mascota}
                    </p>
                    <p>
                        <span>Dueño:</span> {dueño}
                    </p>
                    <p>
                        <span>Sintomas:</span> {sintomas}
                    </p>
                    <button>ELIMINAR</button>
                </div>
            ))}
        </div>
    );
};

export default CitaCreada;
