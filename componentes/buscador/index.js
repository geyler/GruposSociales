import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const Buscador = function (props) {
  const [buscar, setBuscar] = useState('');

  return (
    <div className="buscador">
      <div className="btn-buscador-input-div">
      <input
        type="text"
        placeholder="Busca un Grupo. Max 50 caracteres..."
        maxLength="50"
        onChange={(e) => {
          setBuscar(e.target.value);
        }}
      />
      </div>
      {buscar != "" ? (
        <div className="btn-buscador-div">
          <Link href={`/${props.admin?'admin':''}?s=${buscar}`}>
          <a className="btn-buscador"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
        </Link>
        </div>
      ) : (
        <div className="btn-buscador-div">
          <Link href="#">
          <a className="btn-buscador desactivado"><FontAwesomeIcon icon={faMagnifyingGlass}/></a>
        </Link>
        </div>
      )}
    </div>
  );
};
export default Buscador;
