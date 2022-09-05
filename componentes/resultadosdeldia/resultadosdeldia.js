const Resultadosdeldia = (props) => {
  return(
    <div className="contenedor-resultados-del-dia">
        <h3>Resultados de los sorteos</h3>
        
        <div className="resultados-mediodia">
          <span className="titulo-dia">Mediodia</span>
          <div className="texto-fecha-numeros">{props.datos[0]}</div>
          <div className="numeros-bolita-resultados">
            <span>{props.datos[2][0].mediodia.slice(0,1)}</span>
            <span>{props.datos[2][0].mediodia.slice(1,2)}</span>
          </div>
        </div>

        <div className="resultados-noche">
          <span className="titulo-dia">Noche</span>
          <div className="texto-fecha-numeros">{props.datos[1]}</div>
          <div className="numeros-bolita-resultados">
            <span>{props.datos[2][0].noche.slice(0,1)}</span>
            <span>{props.datos[2][0].noche.slice(1,2)}</span>
          </div>
        </div>

    </div>
  )
}
export default Resultadosdeldia;