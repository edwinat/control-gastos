import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = (props) => {
    const { presupuesto, setPresupuesto } = props

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </header>
    )
}

export default Header