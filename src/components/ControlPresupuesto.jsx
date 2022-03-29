import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = (props) => {
    const { gastos, presupuesto,setGastos,setPresupuesto,setIsValidPresupuesto } = props;
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

    const handleResetApp =()=>{
        const resultado = confirm('¿Deseas reiniciar el presupuesto y gastos?')

        if (resultado) {
            setGastos([])
            setPresupuesto([])
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 90 ?'#DC2626':'#3b82f6',
                        trailColor:'#f5f5f5',
                        textColor: `${porcentaje>90 ?'#DC2626':'#3b82f6'}`,
                    })}
                    value={porcentaje} 
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button 
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span> {formaterarPresupuesto(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo':''}`}>
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