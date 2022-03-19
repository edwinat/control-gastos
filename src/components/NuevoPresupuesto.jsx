import React,{ useState } from "react";
import Mensaje from "../views/mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    const [mensaje,setMensaje] = useState('');

    const handlePresupuesto = (evento) => {
        evento.preventDefault();
        
        if (!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('El presupuesto no es valido')
            return
        }
        setMensaje('')
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form action="" className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        type="text"
                        name="" id=""
                        className="nuevo-presupuesto"
                        value={presupuesto}
                        onChange={evento => setPresupuesto(evento.target.value)}
                    />
                </div>
                <input type="submit" value="Añadir"onClick={handlePresupuesto} />
                {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto;