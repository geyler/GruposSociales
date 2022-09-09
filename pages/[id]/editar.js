import Head from "next/head";
import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import { getSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Add(props) {
  const router = useRouter();

  const [redsocial, setRedsocial] = useState(props.posts.redsocial);
  const [categoria, setCategoria] = useState(props.posts.categoria);
  const [titulo, setTitulo] = useState(props.posts.titulo);
  const [link, setLink] = useState(props.posts.link);
  const [condiciones, setCondiciones] = useState(false);
  const [formulario, setFormulario] = useState(false);
  const [mensaje, setMensaje] = useState('')
  const vistas = '0';

  console.log(props)
  const crearGrupo = async () => {
    const res = await axios.put('/api/grupos/actualizar', {
        titulo: titulo,
        link: link,
        red: redsocial,
        categoria: categoria,
        _id: props.posts._id
      });
    const data = res;
    if(!data.error){
      router.push(`/${props.posts._id}`);
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
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>Editar un Grupo en GruposParaUnirse.net</title>
      <meta property="og:title" content="Editar un Grupo en GruposParaUnirse.net" />
      <meta name="twitter:title" content="Editar un Grupo en GruposParaUnirse.net" />
      <meta name="description" content="Editar un Grupo en GruposParaUnirse.net" />
      <meta property="og:description" content="Editar un Grupo en GruposParaUnirse.net" />
      <meta name="twitter:description" content="Editar un Grupo en GruposParaUnirse.net"/>
      <meta name="keywords" content="Editar un Grupo en GruposParaUnirse.net" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="image" content={`${process.env.PAGE_URL}/grupos.jpg`} />
      <meta property="og:image" content={`${process.env.PAGE_URL}/grupos.jpg`} />
      <meta name="twitter:image" content={`${process.env.PAGE_URL}/grupos.jpg`} />
      <link href={`${process.env.PAGE_URL}/grupos.jpg`} rel="image_src"/>
      <meta property="image:width" content="1280" />
      <meta property="image:height" content="720" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="robots" content="index,follow"/>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="WebPage" />
      <meta property="og:site_name" content="Grupos Para Unirse" />
      <meta property="url" content={`${process.env.PAGE_URL}/admin`} />
      <meta property="og:url" content={`${process.env.PAGE_URL}/admin`} />
      <link rel="canonical" href={`${process.env.PAGE_URL}/admin`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`${process.env.PAGE_URL}/favicon.png`}/>
      </Head>
      <ArticleJsonLd
      url={`${process.env.PAGE_URL}/login`}
      title="Editar un Grupo en GruposParaUnirse.net"
      images={[
        `${process.env.PAGE_URL}/grupos.jpg`,
        `${process.env.PAGE_URL}/favicon.png`,
      ]}
      authorName={[
        {
          name: "Grupos Para Unirse",
          url:`${process.env.PAGE_URL}/`
        }
      ]}
      publisherName="Grupos Para Unirse"
      publisherLogo={`${process.env.PAGE_URL}/favicon.ico`}
      description="Editar un Grupo en GruposParaUnirse.net"    
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Telegram',
          item: `${process.env.PAGE_URL}/?r=Telegram`,
        },
        {
          position: 2,
          name: 'Whatsapp',
          item: `${process.env.PAGE_URL}/?r=Whatsapp`,
        },
        {
          position: 3,
          name: 'Facebook',
          item: `${process.env.PAGE_URL}/?r=Facebook`,
        },
        {
          position: 4,
          name: 'Reddit',
          item: `${process.env.PAGE_URL}/?r=Reddit`,
        },
        {
          position: 5,
          name: 'Discord',
          item: `${process.env.PAGE_URL}/?r=Discord`,
        },
        {
          position: 6,
          name: 'Signal',
          item: `${process.env.PAGE_URL}/?r=Signal`,
        },
        {
          position: 7,
          name: 'Viber',
          item: `${process.env.PAGE_URL}/?r=Viber`,
        },
      ]}
    />

      <Header perfil={props.session ? props.session.user : ''}/>
      <main className='main add'>
        <div className="formulario">
          <h1>Editar el Grupo.</h1>
          <h4>Escribe el Titulo.</h4>
          <input type='text' value={titulo} placeholder="Titulo del Grupo. Max 50 caracteres..." maxLength='50' onChange={(e) => {setTitulo(e.target.value)}}/>
          <h4>Escribe la Url o Link.</h4>
          <input type='text' value={link} placeholder="Link del Grupo..." onChange={(e) => {setLink(e.target.value)}}/>
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
            condiciones ? (<div className="btn-publicar activado" onClick={validarFormulario} >Editar y Publicar</div>):(
              <div className="btn-publicar desabilitado">Editar y Publicar</div>
            )
          }
          <Link href={`/${props.posts._id}`}><a className="btns-admin-eliminar">Cancelar</a></Link>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

  export const getServerSideProps = async (context) => {
    try {
      const {data} = await axios.get(`${process.env.PAGE_URL}/api/grupos/${context.query.id}`);
      const session = await getSession(context)
      if(!session || session.user.email !== data.creador && session.user.email !== 'geylerps@gmail.com'){
        return {
        redirect: {
          destination: `/${context.query.id}`,
          permanent: false
        }
      }
      }
      
      var esCreador = false;
      if(session.user.email === data.creador){
        var esCreador = true;
      }
      if(session.user.email === 'geylerps@gmail.com'){
        var esCreador = true;
      }
      if(session.user.email === 'smelterxd@gmail.com'){
        var esCreador = true;
      }
      
      return {
        props: {
          posts: data,
          session,
          esCreador
        },
      };
    } catch (error) {
      console.log(error)
      return {
        notFound: true,
      };
    }
  };