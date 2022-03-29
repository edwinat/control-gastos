import React from 'react'
import Gasto from '../views/Gasto'

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados, }) => {

    const mostrarGastos = (lista) => {
        return (<>
            <h2>{lista.length ? "Lista de los gastos" : "No hay gastos"}</h2>
            {lista.map(gasto => {
                return <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto} />
            })}
        </>)
    }


    return (
        <div className='listado-gastos contenedor'>
            {filtro ? (<>
                {mostrarGastos(gastosFiltrados)}
            </>) : (<>
                {mostrarGastos(gastos)}
            </>)}
        </div>
    )
}

export default ListadoGastos