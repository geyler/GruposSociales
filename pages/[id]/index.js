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
import { NextSeo, ArticleJsonLd } from "next-seo";

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
        <NextSeo
          robotsProps={{
            nosnippet: false,
            notranslate: false,
            noimageindex: false,
            noarchive: false,
            maxSnippet: 150,
            maxImagePreview: "large",
            maxVideoPreview: 10,
          }}
          additionalMetaTags={[
            {
              property: "dc:creator",
              content: "Geyler Pedroso",
            },
            {
              name: "application-name",
              content: "Grupos Para Unirse",
            },
            {
              httpEquiv: "x-ua-compatible",
              content: "IE=edge; chrome=1",
            },
          ]}
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/favicon.png",
              type: "image/png"
            },
            {
              rel: "apple-touch-icon",
              href: "/favicon.png",
              sizes: "76x76",
            },
          ]}
          openGraph={{
            title: `${post?.titulo} | Grupos Para Unirse.`,
            description: `Grupo Para Unirse de ${post?.red} | ${post?.titulo} | ${post?.categoria} - ${post?.red}`,
            url: `${process.env.PAGE_URL}/${post?._id}`,
            type: "article",
            article: {
              publishedTime: post?.createdAt,
              modifiedTime: post?.updatedAt,
              tags: [post?.red, post?.categoria],
            },
            images: [
              {
                url: `${process.env.PAGE_URL}/${post?.red.toLowerCase()}.jpg`,
                width: 1280,
                height: 720,
                alt: `Grupos Para Unirse de ${post?.red}`,
              },
            ],
          }}
        />
      </Head>

      <div className="app">
        <Header perfil={props.session ? props.session.user : ""} />

        <ArticleJsonLd
          url= {`${process.env.PAGE_URL}/${post?._id}`}
          title= {`${post?.titulo} | Grupos Para Unirse.`}
          images={[
            `${process.env.PAGE_URL}/${post?.red.toLowerCase()}.jpg`
          ]}
          datePublished={post?.createdAt}
          dateModified={post?.updatedAt}
          authorName={[
            {
              name: post.autor,
              url: `${process.env.PAGE_URL}/${post?._id}`
            },
            {
              name: "Grupos Para Unirse",
              url:`${process.env.PAGE_URL}`
            }
          ]}
          publisherName="Grupos Para Unirse"
          publisherLogo="/favicon.png"
          description={`Grupo Para Unirse de ${post?.red} | ${post?.titulo} | Grupo de ${post?.categoria} en ${post?.red}`}
        />

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
