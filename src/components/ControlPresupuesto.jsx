import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = (props) => {
    const { gastos, presupuesto } = props;
    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        calcularTotalGastado();
    }, [gastos])

    const calcularTotalGastado = () => {
        const totalGastado = gastos.reduce((total, gasto) => {
            return gasto.cantidad + total
        }, 0)
        const totalDisponible = presupuesto - totalGastado
        setGastado(totalGastado)
        setDisponible(totalDisponible)

        calcularPorcentaje(totalDisponible);
    }

    const calcularPorcentaje = (totalDisponible) => {
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)    
        }, 1500);
        
    }


    const formaterarPresupuesto = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor:'#3b82f6',
                        trailColor:'#f5f5f5',
                        // textColor:'#3b82f6',
                        textColor: `${porcentaje}>90`,
                    })}
                    value={porcentaje} 
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formaterarPresupuesto(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formaterarPresupuesto(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formaterarPresupuesto(gastado)}
                </p>
            </div>

        </div>
    )
}

export default ControlPresupuesto