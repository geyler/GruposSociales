import Head from "next/head";
import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Buscador from "componentes/buscador";
import Categorias from "componentes/categorias";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Homex(props) {
  const router = useRouter();
  const post = props.posts;
  const cat = post?.red;

  console.log(props);

  const [condiciones, setCondiciones] = useState(false);
  const [eliminarGrupo, seteliminarGrupo] = useState(false);

  useEffect(() => {
    setCondiciones(false);
    seteliminarGrupo(false);
  }, []);

  const aceptadas = () => {
    if (condiciones) {
      setCondiciones(false);
    } else {
      setCondiciones(true);
    }
  };

  const eliminar = async () => {
    try {
      const res = await axios.put(`/api/grupos/eliminar`, {
        _id: props.posts._id,
      });
      console.log(res.data.deletedCount);
      if (!res.data.deletedCount) {
        router.push("/admin");
      }
      return res;
    } catch (error) {
      console.log(error);
      return {
        notFound: true,
      };
    }
  };

  return (
    <div className="contenedor">
     <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>{`${post?.titulo} | Grupos Para Unirse.`}</title>
      <meta property="og:title" content={`${post?.titulo} | Grupos Para Unirse.`} />
      <meta name="twitter:title" content={`${post?.titulo} | Grupos Para Unirse.`} />
      <meta name="description" content={`Grupo Para Unirse de ${post?.red} | ${post?.titulo} | Grupo de ${post?.categoria} en ${post?.red}`} />
      <meta property="og:description" content={`Grupo Para Unirse de ${post?.red} | ${post?.titulo} | Grupo de ${post?.categoria} en ${post?.red}`} />
      <meta name="twitter:description" content={`Grupo Para Unirse de ${post?.red} | ${post?.titulo} | Grupo de ${post?.categoria} en ${post?.red}`}/>
      <meta name="keywords" content={` ${cat?cat:'Whatsapp'},Grupos de ${cat?cat:'Whatsapp'},Unirme a Grupos de  ${cat?cat:'Whatsapp'}, Link de Grupos de  ${cat?cat:'Whatsapp'}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="max-image-preview:large" />
      <meta property="image" content={`/${cat.toLowerCase()}.jpg`} />
      <meta property="og:image" content={`/${cat.toLowerCase()}.jpg`} />
      <meta name="twitter:image" content={`/${cat.toLowerCase()}.jpg`} />
      <link href={`/${cat.toLowerCase()}.jpg`} rel="image_src"/>
      <meta property="image:width" content="1280" />
      <meta property="image:height" content="720" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="robots" content="index,follow"/>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="WebPage" />
      <meta property="og:site_name" content="Grupos Para Unirse" />
      <meta property="url" content={`/${props.url}`} />
      <meta property="og:url" content={`/${props.url}`} />
      <link rel="canonical" href={`/${props.url}`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`/favicon.png`}/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossorigin="anonymous"></script>
      </Head>
      <ArticleJsonLd
          url= {`/${post?._id}`}
          title= {`${post?.titulo} | Grupos Para Unirse.`}
          images={[
            `/${cat.toLowerCase()}.jpg`,
            `/favicon.ico`,
          ]}
          datePublished={post?.createdAt}
          dateModified={post?.updatedAt}
          authorName={[
            {
              name: post.autor,
              url: `/${post?._id}`
            },
            {
              name: "Grupos Para Unirse",
              url:`${process.env.PAGE_URL}`
            }
          ]}
          publisherName="Grupos Para Unirse"
          publisherLogo={`/favicon.ico`}
          description={`Grupo Para Unirse de ${post?.red} | ${post?.titulo} | Grupo de ${post?.categoria} en ${post?.red}`}
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


      <div className="app">
        <Header perfil={props.session ? props.session.user : ""} />

        <main className="main gruposimple">
          <div className="text-informacion-footer">
            <Buscador />
          </div>
          <div className="contendor posts">
            <div className="contenedor-tipo-de-grupo">
              <span>
                <Link href={`/?r=${post?.red}`}>
                  <a className="">Grupo de {post?.red}</a>
                </Link>
              </span>
            </div>
            <h1 className="titulo-del-grupo">{post?.titulo}</h1>

            <div className="ads-espacio"></div>

            <div className="categoria-vistas-contenedor">
              <div className="categoria">
                <span>
                  Categoria:{" "}
                  <Link href={`/?q=${post?.categoria}`}>
                    <a className="link-categoria">{post?.categoria}</a>
                  </Link>
                </span>
              </div>
              <div className="vistas">
                <span>
                  Vistas: <div className="contador-vistas">{post?.vistas}</div>
                </span>
              </div>
            </div>

            <div className="ads-espacio"></div>

            <div className="id-unico-grupo">
              <span>ID del Grupo: {post?._id}</span>
            </div>

            <div className="contenedor-link">
              <div className="contenedor-alerta-terminos">
                <label className="label-condiciones">
                  <input
                    type="checkbox"
                    onChange={aceptadas}
                    value={condiciones}
                  />
                  He leído y acepto las
                  <Link href="/p/terminos-y-condiciones">
                    <a className="condiciones-link"> condiciones de uso</a>
                  </Link>{" "}
                  y la
                  <Link href="/p/politica-de-privacidad">
                    <a className="privacidad-link"> privacidad.</a>
                  </Link>
                </label>
              </div>
              <div className="contenedor-btn-publicar">
                {condiciones ? (
                  <Link href={post?.link}>
                    <a className="link-al-grupo" target="_blank">
                      Unirse al Grupo
                    </a>
                  </Link>
                ) : (
                  <Link href="#">
                    <a className="link-al-grupo desabilitado">
                      Unirse al Grupo
                    </a>
                  </Link>
                )}
              </div>
              <br />
              <small>
                <b>Importante</b>
                <br />
                - No compartas información personal en el grupo
                <br />
                - El grupo está administrado por un particular que no conocemos
                y tu tampoco. <br />
                - Sé prudente.
                <br />- Al unirte al grupo saldrás de esta web.
              </small>
            </div>
            {props.esCreador ? (
              <>
                <div className="btns-admin">
                  <Link href={`/${post?._id}/editar`}>
                    <a className="btns-admin-editar">Editar el Grupo</a>
                  </Link>
                  <div
                    className="btns-admin-eliminar"
                    onClick={() => seteliminarGrupo(true)}
                  >
                    Eliminar
                  </div>
                </div>
                <div className={`modal ${eliminarGrupo ? "" : "none"}`}>
                  <div className="dentro-modal">
                    <div className="x-cerrar">
                      <div
                        className="x-cerrar-dentro"
                        onClick={() => seteliminarGrupo(false)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div className="centrar-contenido-modal">
                      <h2>¿Está seguro que quiere Eliminar este Grupo?</h2>
                      <div className="btns-admin eliminar">
                        <div
                          className="btns-admin-eliminar eliminar"
                          onClick={eliminar}
                        >
                          Eliminar
                        </div>
                        <Link href="#">
                          <a
                            className="btns-admin-editar eliminar"
                            onClick={() => seteliminarGrupo(false)}
                          >
                            Cancelar
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          
          <div className="text-informacion-footer">
          <br />
          <br />
          <Categorias />
          <br />
          <br />
            <h2>
              Este es un Grupo de {cat} y toca el tema {post?.categoria}.
            </h2>
            <h2>Grupos de {cat}</h2>
            <p>
              Los grupos de {cat} son salas de chat en la aplicación {cat}.
              Sirven para mantener conversaciones entre todos los miembros del
              grupo bajo la moderación del Administrador del grupo. Los Grupos
              de {cat} para unirte con enlace público, además, permiten unirse a
              todo el mundo que lo desee y tenga acceso al enlace de invitación
              al grupo. Puedes encontrar Grupos de {cat} para hacer amigos, para
              compartir aficiones o para ligar y encontrar el amor de tu vida.
              También puedes localizar Grupos de {cat} en tu ciudad y así
              conocer gente cercana a tí. Aquí encontrarás miles de grupos de{" "}
              {cat} para unirte. También puedes promocionar tu grupo de {cat}{" "}
              publicando tu enlace de invitación. Gana cientos de miembros en tu
              grupo y gratis.
            </p>
            <h2>¿Como Publicar mi Grupo?</h2>
            <p>
              Para publicar un grupo, primero tienes que ir al formulario de
              publicación mediante el botón (Publicar) que verás al hacer clic
              en tu foto de perfil, si tienes que crearte una cuenta para
              publicar grupos, o en la parte superior de la página de inicio,
              luego rellenas los datos del formulario y listo, ya tu grupo
              estará público al instante.
            </p>
            <h2>
              ¿Que diferencia hay entre un grupo público de {cat} y uno canal
              privado de {cat}?
            </h2>
            <p>
              En cuanto al funcionamiento no hay diferencia, pero los canales
              públicos se pueden encontrar a través del propio buscador de la
              app {cat}. En cambio, los canales privados sólo se localizan a
              través de buscadores de grupos de {cat} como Grupostelegram.net y
              puedes unirte a través de los enlaces de invitación.
            </p>
            
            <br />
            <br />
            <br />
            <br />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { data } = await axios.get(
      `${process.env.PAGE_URL}/api/grupos/${context.query.id}`
    );
    const session = await getSession(context);
    var esCreador = false;
    if (session?.user?.email === data.creador) {
      var esCreador = true;
    }
    if (session?.user?.email === "geylerps@gmail.com") {
      var esCreador = true;
    }
    if (session?.user?.email === "smelterxd@gmail.com") {
      var esCreador = true;
    }

    return {
      props: {
        posts: data,
        session,
        esCreador,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
