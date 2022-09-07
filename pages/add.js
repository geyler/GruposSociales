import Head from "next/head";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import { getSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function Add(props) {
  const router = useRouter();

  const [redsocial, setRedsocial] = useState('');
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [link, setLink] = useState('');
  const [condiciones, setCondiciones] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [mensaje, setMensaje] = useState('')
  const vistas = '0';

  const crearGrupo = async () => {
    const res = await axios.post('/api/grupos/agregar', {
        titulo: titulo,
        link: link,
        red: redsocial,
        categoria: categoria,
        vistas: vistas,
        creador: props.session.user.email,
      });
    const data = res;
    console.log(data)
    if(!data.error){
      router.push('/admin');
    }
    if(data?.error?.code === 11000){
      setMensaje('El Grupo que intentas agregar ya Existe en este sitio web.')
    }
  };

  const handleChange = (e) => {
    setCategoria(e.target.value);
  }

  const aceptadas = () => {
    if(condiciones){
      setCondiciones(false)
    }else{
      setCondiciones(true)
    }
  }

  const laUrl = link.slice(0,33)
  const validarFormulario = () => {
    if(titulo == ''){
      setMensaje('Escribe un titulo.');
      return;
    }
    if(link == ''){
      setMensaje('Escribe el link de tu grupo.');
      return;
    }
    if(!laUrl.includes('t.me/') 
    && !laUrl.includes('chat.whatsapp.com/')
    && !laUrl.includes('discord.com/')
    && !laUrl.includes('signal.group/')
    && !laUrl.includes('reddit.com/')
    && !laUrl.includes('invite.viber.com/')
    && !laUrl.includes('facebook.com/groups/')){
      setMensaje('Escribe un link de invitacion valido.');
      return;
    } 
    if(redsocial === ''){
      setMensaje('Escribe un link de invitacion valido.');
      return;
    }
    if(!laUrl.includes('https://') && !laUrl.includes('http://')){
      setMensaje('Tienes que agregar link con el protocolo https:// incluido.');
      return;
    } 
    if(categoria === ''){
      setMensaje('Tienes que seleccionar una Categoria para tu grupo.');
      return;
    }
    else{
      setMensaje('');
      crearGrupo()
    }
  }

  const validarSocial = () => {
    if(laUrl.includes('t.me/')){
      setRedsocial('telegram');
    }else if(laUrl.includes('chat.whatsapp.com/')){
      setRedsocial('whatsapp');
    }else if(laUrl.includes('discord.com/')){
      setRedsocial('discord');
    }else if(laUrl.includes('signal.group/')){
      setRedsocial('signal');
    }else if(laUrl.includes('reddit.com/')){
      setRedsocial('reddit');
    }else if(laUrl.includes('facebook.com/groups/')){
      setRedsocial('facebook');
    }else if(laUrl.includes('invite.viber.com/')){
      setRedsocial('viber');
    }else{
      setRedsocial('');
    }
  }
  useEffect(() => {
    validarSocial();
  },[laUrl]);

  return (
    <div className='app'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header perfil={props.session ? props.session.user : ''}/>
      <main className='main add'>
        <div className="formulario">
          <h1>Publicar un Grupo.</h1>
          <h4>Escribe el Titulo.</h4>
          <input type='text' placeholder="Titulo del Grupo. Max 50 caracteres..." maxLength='50' onChange={(e) => {setTitulo(e.target.value)}}/>
          <h4>Escribe la Url o Link.</h4>
          <input type='text' placeholder="Link del Grupo..." onChange={(e) => {setLink(e.target.value)}}/>
          <h4>Selecciona una Categoria.</h4>
          <div className="seleccionar-check">
            <label><input type="radio" onChange={handleChange} name="categoria" value="Amistad"/> Amistad</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Arte"/> Arte</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Apuestas"/> Apuestas</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Ayuda"/> Ayuda</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Ciencia"/> Ciencia</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Debates"/> Debates</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Deportes"/> Deportes</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Fans"/> Fans</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Otaku"/> Otaku</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Futbol"/> Futbol</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Gamers"/> Gamers</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Lectores"/> Lectores</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Marketing"/> Marketing</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Noticias"/> Noticias</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Peliculas"/> Peliculas</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Politica"/> Politica</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Risas"/> Risas</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Trading"/> Trading</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Musica"/> Musica</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Series"/> Series</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Viajar"/> Viajar</label>
            <label><input type="radio" onChange={handleChange} name="categoria" value="Adultos"/> Adultos</label>
          </div>
          {
            mensaje ? (<div className="mensaje">{mensaje}</div>) : ''
          }
          <div>
            <label className="label-condiciones"><input type="checkbox" onChange={aceptadas} value={condiciones}/> 
            He leído y acepto las 
            <Link href='/p/terminos-y-condiciones'><a className="condiciones-link">condiciones de uso</a></Link> y la 
            <Link href='/p/politica-de-privacidad'><a className="condiciones-link">privacidad.</a></Link></label>
          </div>
          <div className="contenedor-btn-publicar">
          {
            condiciones ? (<div className="btn-publicar activado" onClick={validarFormulario} >Publicar</div>):(
              <div className="btn-publicar desabilitado">Publicar</div>
            )
          }
          <Link href='/admin'><a className="btns-admin-eliminar">Cancelar</a></Link>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
export const getServerSideProps = async(context) => {

  const session = await getSession(context)
  
    if(!session) return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
    return{
      props: {
        session: session
      }
    }
  };