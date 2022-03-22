import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = (props) => {
    const { presupuesto,
        setPresupuesto,
        isValidPresupuesto,
        setIsValidPresupuesto } = props

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    presupuesto={presupuesto}
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