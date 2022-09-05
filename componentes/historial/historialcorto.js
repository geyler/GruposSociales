const HistorialCorto = (props) => {
  return(
    <div className="contenedor-historial-corto">
        <ul className="lista-historial">
          <li className="li-historial">
            <h3>Historial ultimos 7 dias</h3> 
          </li>
          <li className="li-historial">
            <div className="col-1">Fecha</div>
            <div className="col-2">Mediodia</div>
            <div className="col-3">Noche</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h7fecha}</div>
            <div className="col-2">{props.datos.h7dia}</div>
            <div className="col-3">{props.datos.h7noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h6fecha}</div>
            <div className="col-2">{props.datos.h6dia}</div>
            <div className="col-3">{props.datos.h6noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h5fecha}</div>
            <div className="col-2">{props.datos.h5dia}</div>
            <div className="col-3">{props.datos.h5noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h4fecha}</div>
            <div className="col-2">{props.datos.h4dia}</div>
            <div className="col-3">{props.datos.h4noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h3fecha}</div>
            <div className="col-2">{props.datos.h3dia}</div>
            <div className="col-3">{props.datos.h3noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h2fecha}</div>
            <div className="col-2">{props.datos.h2dia}</div>
            <div className="col-3">{props.datos.h2noche}</div>  
          </li>
          <li className="li-historial">
            <div className="col-1">{props.datos.h1fecha}</div>
            <div className="col-2">{props.datos.h1dia}</div>
            <div className="col-3">{props.datos.h1noche}</div>  
          </li>
        </ul>
    </div>
  )
}
export default HistorialCorto;