import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const Paginado = function (p) {
  const prevUrl = `${p.admin ? "/admin" : ""}?${p.s ? "s" : ""}${p.s ? "=" : ""}${p.s ? p.s : ""}${(p.s && p.q) || (p.s && p.r) ? "&" : ""}${p.q ? "q" : ""}${p.q ? "=" : ""}${p.q ? p.cat : ""}${p.q && p.r ? "&" : ""}${p.r ? "r" : ""}${p.r ? "=" : ""}${p.r ? p.cat : ""}${(p.s && p.prevPage) || (p.q && p.prevPage) || (p.r && p.prevPage) ? "&" : ""}${p.prevPage ? "pag" : ""}${p.prevPage ? "=" : ""}${p.prevPage ? p.prevPage : ''}`;
  const nextUrl = `${p.admin ? "/admin" : ""}?${p.s ? "s" : ""}${p.s ? "=" : ""}${p.s ? p.s : ""}${(p.s && p.q) || (p.s && p.r) ? "&" : ""}${p.q ? "q" : ""}${p.q ? "=" : ""}${p.q ? p.cat : ""}${p.q && p.r ? "&" : ""}${p.r ? "r" : ""}${p.r ? "=" : ""}${p.r ? p.cat : ""}${(p.s && p.nextPage) || (p.q && p.nextPage) || (p.r && p.nextPage) ? "&" : ""}${p.nextPage ? "pag" : ""}${p.nextPage ? "=" : ""}${p.nextPage ? p.nextPage : ''}`;

  return (
    <div className="paginado">
      {p.prevPage || p.nextPage ? (<ul>
        {p.prevPage ? (
          <li>
            <Link href={prevUrl}>
              <a className="paginaAnterior"><FontAwesomeIcon icon={faAngleLeft} /></a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href={`#`}>
              <a className="paginaAnterior desactivado"><FontAwesomeIcon icon={faAngleLeft} /></a>
            </Link>
          </li>
        )}
        <li>
          <div className="espaciado-btn-paginado"></div>
        </li>
        {p.nextPage ? (
          <li>
            <Link href={nextUrl}>
              <a className="paginaAnterior"><FontAwesomeIcon icon={faAngleRight} /></a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href={`#`}>
              <a className="paginaAnterior desactivado"><FontAwesomeIcon icon={faAngleRight} /></a>
            </Link>
          </li>
        )}
      </ul>) : ''
      }
    </div>
  );
};
export default Paginado;
