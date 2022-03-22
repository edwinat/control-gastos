import React from 'react'

const ControlPresupuesto = (props) => {
    const { presupuesto } = props;

    const formaterarPresupuesto= (cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafico Aqui va</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formaterarPresupuesto(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formaterarPresupuesto(0)}
                </p>
                <p>
                    <span>Gstado: </span> {formaterarPresupuesto(0)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto