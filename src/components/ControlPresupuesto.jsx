import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto}) {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0);
      const totalDisponible = presupuesto-totalGastado;
      //Calcular porcentaje grafica
      const nuevoProcentaje = (((presupuesto-totalDisponible) / (presupuesto)) * 100).toFixed(2);

      setGastado(totalGastado);
      setDisponible(totalDisponible);

      setTimeout(() => {
        setPorcentaje(nuevoProcentaje);
      }, 1500);
    }, [gastos])
    

    const formatearValor = (valor) => {
        return valor.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Desea reiniciar presupuesto y gastos?');

        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
                    trailColor: '#f5f5f5',
                    textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className="contenido-presupuesto">
            <button 
            className="reset-app" 
            type="button"
            onClick={handleResetApp}
            >
                Reset App
            </button>
            <p>
                <span>Presupuesto: </span> {formatearValor(presupuesto)}
            </p>
            <p className={ disponible < 0 ? 'negativo' : ''}>
                <span>Disponible: </span> {formatearValor(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearValor(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto