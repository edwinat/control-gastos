import { element } from 'prop-types';
import { useState, useEffect } from 'react'
import Filtros from './components/Filtros';
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarID } from './helpers/index';
import IconoNUevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro,setFiltro] = useState("")
  const [gastosFiltrados,setGastosFiltrados] = useState([])

  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 800)
    }
  }, [gastoEditar])


  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])


  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [gastos])


  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(elemento=> elemento.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])
  

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0)
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
      setPresupuesto(presupuestoLS)
    }
  }, [])




  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(item => item.id !== id)
    setGastos(gastosActualizados);
  }

  const handleNuevoGasto = () => {
    setGastoEditar({})
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 800)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}        
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNUevoGasto}
              alt="Imagen"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
