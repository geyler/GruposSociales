import Link from "next/link";
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState, useEffect , useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faBars,
  faXmark,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

const Header = function (props) {
  const user = props.perfil

  const refMenuPerfil = useRef(null)
  const refMenuPerfilMovil = useRef(null)

  const [menuPerfil, setMenuPerfil ] = useState(false)
  const [menuPerfilMovil, setMenuPerfilMovil ] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState()
  const [headerVisible, setHeaderVisible] = useState('')

  /* PREGUNTAR POR WINDOWS */
  if(typeof window !== "undefined"){
    window.addEventListener("scroll", function(){
      var st = window.pageYOffset || document.documentElement.scrollTop; 
      if (st > lastScrollTop){
        setHeaderVisible('cerrado-header')
      } else if(st < lastScrollTop){
        setHeaderVisible('abierto-header')
      }
      setLastScrollTop(st);
   }, false);
  }

  const cerrarMenus = () => {
    setMenuPerfil(false)
    setMenuPerfilMovil(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(refMenuPerfil.current && !refMenuPerfil.current.contains(e.target)){
        setMenuPerfil(false)
      }
    }
    if(menuPerfil){
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {document.removeEventListener("mousedown", handleClickOutside);}
  },[menuPerfil])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(refMenuPerfilMovil.current && !refMenuPerfilMovil.current.contains(e.target)){
        setMenuPerfilMovil(false)
      }
    }
    if(menuPerfilMovil){
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {document.removeEventListener("mousedown", handleClickOutside);}
  },[menuPerfilMovil])

  return (
    <>
    <header className={headerVisible}>
      <div className="header-dentro">

        {/*boton abrir cerrar menu movil*/}
        <div className={`btn-menu-movil barras ${menuPerfilMovil}`}  onClick={() => {
              menuPerfilMovil ? setMenuPerfilMovil(false) : setMenuPerfilMovil(true)
          }}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`btn-menu-movil equis ${menuPerfilMovil}`}  onClick={() => {
              menuPerfilMovil ? setMenuPerfilMovil(false) : setMenuPerfilMovil(true)
          }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div ref={refMenuPerfilMovil} className={menuPerfilMovil ? `menu-movil abierto ${headerVisible}` : `menu-movil cerrado ${headerVisible}`}>
          <ul>
            {props.perfil ? (<li className="foto-perfil-menu">
                <Image src={user?.image} alt={user?.name} width={40} height={40}/>
                <span>{user?.name}</span>
            </li> ) : (<li className="iniciar-session-movil">
              <Link href="/login">
                <a><FontAwesomeIcon icon={faRightFromBracket}  onClick={cerrarMenus}/> Acceder</a>
              </Link>
            </li>)}
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/"><a>Inicio</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=telegram"><a>Telegram</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=whatsapp"><a>Whatsapp</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=facebook"><a>Facebook</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=reddit"><a>Reddit</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=discord"><a>Discord</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=signal"><a>Signal</a></Link></li>
            <li className="nav-li-menu-movil" onClick={cerrarMenus}><Link href="/?r=viber"><a>Viber</a></Link></li>  
          </ul> 
        </div>

        <div className="logotipo">
          <Link href='/'><a><img src="/logoweb.png"/></a></Link>
        </div>
        <nav>
          <ul>
            <li className="nav-li-menu-pc" onClick={cerrarMenus}><Link href="/"><a>Inicio</a></Link></li>
            <li className="nav-li-menu-pc" onClick={cerrarMenus}><Link href="/?r=telegram"><a>Telegram</a></Link></li>
            <li className="nav-li-menu-pc" onClick={cerrarMenus}><Link href="/?r=whatsapp"><a>Whatsapp</a></Link></li>
            <li className="nav-li-menu-pc" onClick={cerrarMenus}><Link href="/?r=facebook"><a>Facebook</a></Link></li>
            {props.perfil ? (<><li className={`foto-perfil barras ${menuPerfil}`} onClick={() => {
              menuPerfil ? setMenuPerfil(false) : setMenuPerfil(true)
            }}>
            <Image src={user?.image} alt={user?.name} width={40} height={40}/>
            </li>
            <li className={`foto-perfil equis ${menuPerfil}`} onClick={() => {
              menuPerfil ? setMenuPerfil(false) : setMenuPerfil(true)
            }}>
            <FontAwesomeIcon icon={faXmark} />
            </li></>) : (<li className="iniciar-session-movil">
              <Link href="/login">
              <a><FontAwesomeIcon icon={faRightFromBracket}  onClick={cerrarMenus}/> Acceder</a>
              </Link>
            </li>)}   
          </ul>
          {props.perfil ? (<div ref={refMenuPerfil} className={menuPerfil ? `contenedor-menu-perfil abierto ${headerVisible}` : `contenedor-menu-perfil cerrado ${headerVisible}`}>
            <ul>
              <li className="foto-perfil-menu" >
                <Image src={user?.image} alt={user?.name} width={40} height={40}/>
                <span>{user?.name}</span>
              </li>
              <li><Link href="/add"><a><FontAwesomeIcon icon={faUpload}  onClick={cerrarMenus}/>  Añadir Grupo</a></Link></li>
              <li><Link href="/admin"><a><FontAwesomeIcon icon={faUser}  onClick={cerrarMenus}/>  Administración</a></Link></li>
              <li><a onClick={() => signOut()}><FontAwesomeIcon icon={faRightFromBracket}  onClick={cerrarMenus}/>  Cerrar Sesión</a></li>
            </ul> 
          </div>) : ''}
        </nav>
      </div>
    </header>
    <div className="bajo-header"></div>
    </>
  );
};
export default Header;