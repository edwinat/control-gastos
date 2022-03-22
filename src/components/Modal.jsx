import React, { useState } from 'react'
import Mensaje from '../views/mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState("")

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = evento => {
        evento.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            //No calcula si la cantidad < 0
            setMensaje("Llenar todos los campos")
            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return;
        }
        guardarGasto({ nombre, cantidad, categoria })

    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrar"
                    onClick={ocultarModal}
                />
            </div>

            <form
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={evento => setNombre(evento.target.value)} />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        placeholder='Añade la cantidad'
                        value={cantidad}
                        onChange={evento => setCantidad(Number(evento.target.value))} />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={evento => setCategoria(evento.target.value)}
                    >
                        <option value="">---Seleccione---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    )
}

export default Modal    