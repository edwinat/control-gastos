import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = (props) => {
    const { gastos,
        presupuesto,
        setPresupuesto,
        isValidPresupuesto,
        setIsValidPresupuesto,
        setGastos, } = props

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    )
}

export default Header