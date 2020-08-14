import React, {useState} from 'react'
import CitaCreada from './CitaCreada'
import CrearCitaForm from './CrearCitaForm'

const Container = () => {
    const [citas, setCitas] = useState([]);
    
    console.log(citas);
    return (
        <div className='container'>
            <CrearCitaForm setCitas={setCitas}/>
            <CitaCreada citas = {citas}/>
        </div>
    )
}

export default Container
