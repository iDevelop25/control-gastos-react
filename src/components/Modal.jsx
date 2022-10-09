import { useState, useEffect } from 'react';
import CerrarModalBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

function Modal({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    const [mensaje, setMensaje] = useState('');
    

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
          setNombre(gastoEditar.nombre)
          setCantidad(gastoEditar.cantidad)
          setCategoria(gastoEditar.categoria)
          setId(gastoEditar.id)
          setFecha(gastoEditar.fecha)
        }
    }, []);

    const ocultarModal = () => {
        //Animacion modal al cerrar
        setAnimarModal(false);
        setTimeout(()=>{
            setModal(false);
            setGastoEditar({})
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            setTimeout(()=>{
                setMensaje('')
            }, 3000)
        }else{
            guardarGasto({nombre, cantidad, categoria, id, fecha})
        }
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={CerrarModalBtn}
                alt="Cerrar Modal"
                onClick={ocultarModal}
            />
        </div>

        <form 
        onSubmit={handleSubmit}
        className={`formulario ${ animarModal ? 'animar' : 'cerrar'}`}>
            <legend>{ gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor='nombre'>Nombre Gasto</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Agrega el Nombre del Gasto"
                    value={ nombre }
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id="cantidad"
                    type="number"
                    placeholder="Agrega la cantidad del gasto: Ej: 300"
                    value={ cantidad }
                    onChange={ (e) => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor='cantidad'>Categorías</label>
                <select
                    id='categoria'
                    value={ categoria }
                    onChange={ (e) => setCategoria(e.target.value)}
                >
                    <option value="" disabled>-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input
                type="submit"
                value={ gastoEditar.nombre ? 'Guardar Cambios' : 'Agregar Gasto'}
            />
        </form>
    </div>
  )
}

export default Modal