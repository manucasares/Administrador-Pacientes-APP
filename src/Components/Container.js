import React, {useState} from 'react'
import CitaCreada from './CitaCreada'
import CrearCita from './CrearCita'

const Container = () => {
    const [citas, setCitas] = useState([]);
    
    return (
        <div className='container'>
            <CrearCita setCitas={setCitas}/>
            <CitaCreada citas = {citas} setCitas={setCitas}/>
        </div>
    )
}

export default Container
