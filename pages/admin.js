import Head from "next/head";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Paginado from "componentes/paginado";
import Buscador from "componentes/buscador";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Homex(props) {
  const router = useRouter();
  if (props.context.r) {
    var cat = props.context.r;
  }
  if (props.context.q) {
    var cat = props.context.q;
  }

  return (
    <div className="contenedor">
      <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>Panel de Administracion - GruposParaUnirse.net</title>
      <meta property="og:title" content="Panel de Administracion - GruposParaUnirse.net" />
      <meta name="twitter:title" content="Panel de Administracion - GruposParaUnirse.net" />
      <meta name="description" content="Panel de Administracion - GruposParaUnirse.net" />
      <meta property="og:description" content="Panel de Administracion - GruposParaUnirse.net" />
      <meta name="twitter:description" content="Panel de Administracion - GruposParaUnirse.net"/>
      <meta name="keywords" content="Panel de Administracion - GruposParaUnirse.net" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="image" content={`https://gruposparaunirse.net/grupos.jpg`} />
      <meta property="og:image" content={`https://gruposparaunirse.net/grupos.jpg`} />
      <meta name="twitter:image" content={`https://gruposparaunirse.net/grupos.jpg`} />
      <link href={`https://gruposparaunirse.net/grupos.jpg`} rel="image_src"/>
      <meta property="image:width" content="1280" />
      <meta property="image:height" content="720" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="robots" content="index,follow"/>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="WebPage" />
      <meta property="og:site_name" content="Grupos Para Unirse" />
      <meta property="url" content={`https://gruposparaunirse.net/admin`} />
      <meta property="og:url" content={`https://gruposparaunirse.net/admin`} />
      <link rel="canonical" href={`https://gruposparaunirse.net/admin`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`https://gruposparaunirse.net/favicon.png`}/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossOrigin="anonymous"></script>
      </Head>
      <ArticleJsonLd
      url={`https://gruposparaunirse.net/admin`}
      title="Panel de Administracion - GruposParaUnirse.net"
      images={[
        `https://gruposparaunirse.net/grupos.jpg`,
        `https://gruposparaunirse.net/favicon.png`,
      ]}
      authorName={[
        {
          name: "Grupos Para Unirse",
          url:`https://gruposparaunirse.net/`
        }
      ]}
      publisherName="Grupos Para Unirse"
      publisherLogo={`/favicon.ico`}
      description="Panel de Administracion - GruposParaUnirse.net"    
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Telegram',
          item: `https://gruposparaunirse.net/?r=Telegram`,
        },
        {
          position: 2,
          name: 'Whatsapp',
          item: `https://gruposparaunirse.net/?r=Whatsapp`,
        },
        {
          position: 3,
          name: 'Facebook',
          item: `https://gruposparaunirse.net/?r=Facebook`,
        },
        {
          position: 4,
          name: 'Reddit',
          item: `https://gruposparaunirse.net/?r=Reddit`,
        },
        {
          position: 5,
          name: 'Discord',
          item: `https://gruposparaunirse.net/?r=Discord`,
        },
        {
          position: 6,
          name: 'Signal',
          item: `https://gruposparaunirse.net/?r=Signal`,
        },
        {
          position: 7,
          name: 'Viber',
          item: `https://gruposparaunirse.net/?r=Viber`,
        },
      ]}
    />
      <div className="app">
        <Header perfil={props.session ? props.session.user : ""} />
        <main className="main">
          <ul className="listado-inicio">
            <li className="li-buscador">
              <Buscador s={props.context.s} admin={true} />
            </li>
            <li className="titulo-home">
              <h1>Administra tus Grupos.</h1>
            </li>
            <li>
              {props.posts.docs == "" ? (
                <div className="contenedror-sin-contenido-admin">
                  <h3>
                    Todavía no tienes ningún Grupo para administrar, puedes
                    agregar tus Grupos desde el siguiente botón.
                  </h3>
                </div>
              ) : (
                ""
              )}
            </li>
            <li className="btn-add">
              <div className="contenedor-btn-publicar">
                <Link href="/add">
                  <a className="btn-publicar activado">
                    <FontAwesomeIcon icon={faUpload} /> Añadir Grupo
                  </a>
                </Link>
              </div>
            </li>
            {props.posts.docs != ""
              ? props.posts.docs.map((post) => (
                  <li className="inicio-li" key={post._id}>
                    <Link href={`/${post._id}`}>
                      <a>
                        <div className="contenedor-texto">
                          <div className="titulo-del-grupo">{post.titulo}</div>{" "}
                          <div className="categoria-red">
                            {post.categoria} - {post.red}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>

          <Paginado
            page={props.posts.page}
            prevPage={props.posts.prevPage}
            nextPage={props.posts.nextPage}
            cat={cat}
            q={props.context.q}
            r={props.context.r}
            s={props.context.s}
            admin={true}
          />

          <div className="text-informacion-footer">
            <h2>Administra tus Grupos Publicados</h2>
            <p>
              ¡Esta es la sección de administración, si llegaste hasta aquí fue
              porque te creaste una cuenta en esta web, Felicidades! Por confiar
              en nuestro buscador de grupos. Desde esta sección puedes
              administrar tus Grupos.
            </p>
            <h2>¿Como Publicar mi Grupo?</h2>
            <p>
              Para publicar un grupo, primero tienes que ir al formulario de
              publicación mediante el botón (Publicar) que verás en la parte
              superior de esta página, luego rellenas los datos del formulario y
              listo, ya tu grupo estará público al instante.
            </p>
            <h2>¿Como Editar mi Grupo?</h2>
            <p>
              Para editar un Grupo tienes que entrar en el grupo, y en la parte
              de abajo de la información de grupo te saldrá un botón que dirá
              (Editar), das clic en él y te llevara al formulario de editar,
              haces tus ajustes, das en el botón de guardar y tu grupo se
              editara y publicara al instante.
            </p>
            <h2>¿Como Eliminar mi Grupo?</h2>
            <p>
              Para eliminar algún Grupo, al igual que para editar, primero
              tienes que entrar al Grupo que deseas y dar clic en el botón
              (Eliminar), y no hay vuelta atrás, tu grupo se eliminara al
              instante.
            </p>
            <br/><br/><br/><br/>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const session = await getSession(context);
    if (!session)
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    const { data } = await axios.get(
      `${process.env.PAGE_URL}/api/grupos/listado`,
      {
        params: {
          creador: session.user.email,
          s: context.query.s,
          q: context.query.q,
          r: context.query.r,
          pag: context.query.pag,
        },
      }
    );
    return {
      props: {
        posts: data,
        session,
        context: context.query,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
