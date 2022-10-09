import { useState } from 'react'
import Mensaje from './Mensaje';

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (!(presupuesto) || (presupuesto) <= 0) {
            setMensaje("No es un presupuesto valido");
        }else{
            setMensaje('');
            setIsValidPresupuesto(true);
        }
        
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Agrega tu Presupuesto"
                    value={presupuesto}
                    onChange={ (e) => {
                        console.log(Number(e.target.value));
                        setPresupuesto(Number(e.target.value));
                    }}
                />
            </div>

            <input type="submit" value="Agregar"/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto