import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers/index.js";

import InconoAhorro from "../img/icono_ahorro.svg";
import InconoCasa from "../img/icono_casa.svg";
import InconoComida from "../img/icono_comida.svg";
import InconoGastos from "../img/icono_gastos.svg";
import InconoOcio from "../img/icono_ocio.svg";
import InconoSalud from "../img/icono_salud.svg";
import InconoSuscripciones from "../img/icono_suscripciones.svg";

function Gasto({gasto, setGastoEditar, eliminarGasto}) {
  const {categoria, nombre, cantidad, id, fecha} = gasto;

  const diccionarioIconos = {
    ahorro: InconoAhorro,
    comida: InconoCasa,
    casa: InconoComida,
    varios: InconoGastos,
    ocio: InconoOcio,
    salud: InconoSalud,
    suscripciones: InconoSuscripciones
  }

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={()=> setGastoEditar(gasto)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
  }
  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction 
        onClick={()=> eliminarGasto(id)}
        destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions(leadingActions)}
        trailingActions={trailingActions(trailingActions)}
      >
      <div className="gasto sombra">
        <div className="contenido-gasto">
          <img
            src={diccionarioIconos[categoria]}
            alt="icno gastos"
          />
          <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
            <p className="fecha-gasto">Agregado el: {''}<span>{formatearFecha(fecha)}</span></p>
          </div>
        </div>
        <p className="cantidad-gasto">${cantidad}</p>
      </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto