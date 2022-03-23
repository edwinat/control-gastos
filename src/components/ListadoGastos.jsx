import React from 'react'
import Gasto from '../views/Gasto'

const ListadoGastos = ({gastos,setGastos,setGastoEditar,eliminarGasto}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? "Lista de los gastos":"No hay gastos"}</h2>
            {gastos.map(gasto=>{
                return <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                />
            })}
        </div>
    )
}

export default ListadoGastos