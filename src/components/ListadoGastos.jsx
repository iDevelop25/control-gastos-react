import Gasto from "./Gasto"

function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
    <div className="listado-gastos contenedor">
        

        { 
          filtro ? (
            <>
              <h2>{ gastosFiltrados.length > 0 ? "Gastos" : "No Hay Gastos Aún"}</h2>
              {gastosFiltrados.map( (gasto) => {
                return <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                      />
              })}
            </>
          ) : (
            <>
              <h2>{ gastos.length > 0 ? "Gastos" : "No Hay Gastos Aún"}</h2>
              {gastos.map( (gasto) => {
                return <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                      />
              })}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos