import Head from "next/head";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import { getSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";
import Paginado from "componentes/paginado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import Buscador from "componentes/buscador";
import Categorias from "componentes/categorias";
import { NextSeo, ArticleJsonLd } from "next-seo";

export default function Homex(props) {
  console.log(props.context);
  if (props.context.r) {
    var cat = props.context.r;
  }
  if (props.context.q) {
    var cat = props.context.q;
  }

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
            title: `Grupos Para Unirse`,
            description: `¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles.`,
            url: `${process.env.PAGE_URL}`,
            type: "website",
            images: [
              {
                url: `${process.env.PAGE_URL}/grupos.jpg`,
                width: 1280,
                height: 720,
                alt: `Grupos Para Unirse`,
              },
            ],
          }}
        />
      </Head>

      <div className="app">
        <Header perfil={props.session ? props.session.user : ""} />
        <main className="main">
          <ul className="listado-inicio">
            <li className="li-buscador">
              <Buscador s={props.context.s} />
            </li>
            <li className="content-btn-publicar-home">
            <div className="contenedor-btn-publicar">
                <Link href="/add">
                  <a className="btn-publicar activado">
                    <FontAwesomeIcon icon={faUpload} /> Añadir Grupo
                  </a>
                </Link>
              </div>
            </li>
            <li className="titulo-home">
              {props.context.r ? (
                <h1>Grupos para unirte de {props.context.r}</h1>
              ) : (
                ""
              )}
              {props.context.q ? (
                <h1>Grupos para unirte de {props.context.q}</h1>
              ) : (
                ""
              )}
              {props.context.s ? (
                <h1>Grupos para unirte de {props.context.s}</h1>
              ) : (
                ""
              )}
              {!props.context.q && !props.context.r && !props.context.s ? (
                <h1>Grupos para unirte de Redes Sociales.</h1>
              ) : (
                ""
              )}
            </li>

            {props.posts.docs != "" ? (
              props.posts.docs.map((post) => (
                <li className="inicio-li" key={post._id}>
                  <Link href={`/${post._id}`}>
                    <a>
                      <div className="contenedor-texto">
                        <div className="titulo-del-grupo">{post.titulo}</div>
                        <div className="categoria-red">
                          {post.categoria} - {post.red}
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <div className="no-hay-resultados">
                <h2>Upssss.</h2>
                <p>
                  Parece que lo que estás intentando buscar no se encuentra o no
                  lo está buscando correctamente, Intenta buscar otra cosa o
                  haga clic en alguna de las categorías a continuación.
                </p>
                <Categorias/>
              </div>
            )}
          </ul>

          <Paginado
            page={props.posts.page}
            prevPage={props.posts.prevPage}
            nextPage={props.posts.nextPage}
            cat={cat}
            q={props.context.q}
            r={props.context.r}
            s={props.context.s}
          />

          <div className="text-informacion-footer">
            {cat ? (
              <>
                <h2>Grupos de {cat} para unirse</h2>
                <p>
                  Aquí encontrarás muchos enlaces de canales o grupos de {cat}{" "}
                  activos para apuntarte. Este sitio también te ayuda a añadir
                  tus grupos de {cat} gratuitamente. Puedes unirte a un número
                  ilimitado de grupos de {cat} a través de este sitio web. Y si
                  no encuentras tu grupo preferido... ¡Créalo!. De esa manera,
                  muchas personas encontrarán tu Grupo de {cat}.
                </p>
                <h2>¿Qué es un grupo de {cat}?</h2>
                <p>
                  Un Grupo de {cat} es una sala de chat creada y gestionada
                  dentro de la app {cat}. Basta con tener instalada la
                  aplicación para poder acceder a cualquier grupo público de{" "}
                  {cat}.
                </p>
                <h2>
                  ¿Que diferencia hay entre un grupo público de {cat} y uno
                  canal privado de {cat}?
                </h2>
                <p>
                  En cuanto al funcionamiento no hay diferencia, pero los
                  canales públicos se pueden encontrar a través del propio
                  buscador de la app {cat}. En cambio, los canales privados sólo
                  se localizan a través de buscadores de grupos de {cat}
                  como Grupostelegram.net y puedes unirte a través de los
                  enlaces de invitación.
                </p>
                <h2>Grupos de {cat} para ligar</h2>
                <p>
                  De sobras es sabido que los grupos de {cat} tienen diversas
                  utilidades, desde mantener en contacto a la familia, compartir
                  bromas y quedadas con los amigos, conocer nuevos amigos y
                  nuevas amigas o simplemente compartir aficiones. Pero sin
                  duda, los grupos de {cat} se han convertido en el lugar
                  perfecto para ligar y conocer nuevas parejas. Ligar en un
                  Grupo de {cat}
                  es tan sencillo como buscar el grupo que más afín puede
                  resultar, o bien por ciudad o bien por aficiones, y unirse
                  mediante los enlaces de invitación. Una vez dentro, no olvides
                  presentarte y respetar las normas que ha publicado el
                  administrador.
                </p>
                <h2>Grupos de {cat}</h2>
                <p>
                  Los grupos de {cat} son salas de chat en la aplicación{" "} 
                  {" "}{cat}. Sirven para mantener conversaciones entre todos los
                  miembros del grupo bajo la moderación del Administrador del
                  grupo. Los Grupos de {cat} para unirte con enlace público,
                  además, permiten unirse a todo el mundo que lo desee y tenga
                  acceso al enlace de invitación al grupo. Puedes encontrar
                  Grupos de {cat} para hacer amigos, para compartir aficiones
                  o para ligar y encontrar el amor de tu vida. También puedes
                  localizar Grupos de {cat} en tu ciudad y así conocer gente
                  cercana a tí. Aquí encontrarás miles de grupos de {cat}{" "}
                  para unirte. También puedes promocionar tu grupo de {cat}{" "}
                  publicando tu enlace de invitación. Gana cientos de miembros
                  en tu grupo y gratis.
                </p>
              </>
            ) : (
              <>
              <p>
                Aquí encontrarás muchos enlaces de canales o grupos de{" "}
                diferentes redes sociales activos para apuntarte. Este sitio
                también te ayuda a añadir tus grupos de tu red social favorita
                gratuitamente. Puedes unirte a un número ilimitado de grupos de
                la red social que quieras a través de este sitio web. Y si no
                encuentras tu grupo preferido... ¡Créalo!. De esa manera, muchas
                personas encontrarán tu Grupo y se unirán.
              </p>
              <h2>Grupos de Telegram para unirse</h2>
              <p>
                Aquí encontrarás muchos enlaces de canales o grupos de Telegram{" "}
                activos para apuntarte. Este sitio también te ayuda a añadir
                tus grupos de Telegram gratuitamente. Puedes unirte a un número
                ilimitado de grupos de Telegram a través de este sitio web. Y si
                no encuentras tu grupo preferido... ¡Créalo!. De esa manera,
                muchas personas encontrarán tu Grupo de Telegram.
              </p>
              <h2>¿Qué es un grupo de Telegram?</h2>
              <p>
                Un Grupo de Telegram es una sala de chat creada y gestionada
                dentro de la app Telegram. Basta con tener instalada la
                aplicación para poder acceder a cualquier grupo público de{" "}
                Telegram.
              </p>
              <h2>
                ¿Que diferencia hay entre un grupo público de Telegram y uno
                canal privado de Telegram?
              </h2>
              <p>
                En cuanto al funcionamiento no hay diferencia, pero los
                canales públicos se pueden encontrar a través del propio
                buscador de la app Telegram. En cambio, los canales privados sólo
                se localizan a través de buscadores de grupos de Telegram
                como Grupostelegram.net y puedes unirte a través de los
                enlaces de invitación.
              </p>
              <h2>Grupos de Telegram para ligar</h2>
              <p>
                De sobras es sabido que los grupos de Telegram tienen diversas
                utilidades, desde mantener en contacto a la familia, compartir
                bromas y quedadas con los amigos, conocer nuevos amigos y
                nuevas amigas o simplemente compartir aficiones. Pero sin
                duda, los grupos de Telegram se han convertido en el lugar
                perfecto para ligar y conocer nuevas parejas. Ligar en un
                Grupo de Telegram
                es tan sencillo como buscar el grupo que más afín puede
                resultar, o bien por ciudad o bien por aficiones, y unirse
                mediante los enlaces de invitación. Una vez dentro, no olvides
                presentarte y respetar las normas que ha publicado el
                administrador.
              </p>
              <h2>Grupos de Telegram</h2>
              <p>
                Los grupos de Telegram son salas de chat en la aplicación
                Telegram. Sirven para mantener conversaciones entre todos los
                miembros del grupo bajo la moderación del Administrador del
                grupo. Los Grupos de Telegram para unirte con enlace público,
                además, permiten unirse a todo el mundo que lo desee y tenga
                acceso al enlace de invitación al grupo. Puedes encontrar
                Grupos de Telegram para hacer amigos, para compartir aficiones
                o para ligar y encontrar el amor de tu vida. También puedes
                localizar Grupos de Telegram en tu ciudad y así conocer gente
                cercana a tí. Aquí encontrarás miles de grupos de Telegram
                para unirte. También puedes promocionar tu grupo de Telegram
                publicando tu enlace de invitación. Gana cientos de miembros
                en tu grupo y gratis.
              </p>



              <h2>Grupos de Whatsapp para unirse</h2>
              <p>
                Aquí encontrarás muchos enlaces de canales o grupos de Whatsapp{" "}
                activos para apuntarte. Este sitio también te ayuda a añadir
                tus grupos de Whatsapp gratuitamente. Puedes unirte a un número
                ilimitado de grupos de Whatsapp a través de este sitio web. Y si
                no encuentras tu grupo preferido... ¡Créalo!. De esa manera,
                muchas personas encontrarán tu Grupo de Whatsapp.
              </p>
              <h2>¿Qué es un grupo de Whatsapp?</h2>
              <p>
                Un Grupo de Whatsapp es una sala de chat creada y gestionada
                dentro de la app Whatsapp. Basta con tener instalada la
                aplicación para poder acceder a cualquier grupo público de{" "}
                Whatsapp.
              </p>
              <h2>
                ¿Que diferencia hay entre un grupo público de Whatsapp y uno
                canal privado de Whatsapp?
              </h2>
              <p>
                En cuanto al funcionamiento no hay diferencia, pero los
                canales públicos se pueden encontrar a través del propio
                buscador de la app Whatsapp. En cambio, los canales privados sólo
                se localizan a través de buscadores de grupos de Whatsapp
                como Grupostelegram.net y puedes unirte a través de los
                enlaces de invitación.
              </p>
              <h2>Grupos de Whatsapp para ligar</h2>
              <p>
                De sobras es sabido que los grupos de Whatsapp tienen diversas
                utilidades, desde mantener en contacto a la familia, compartir
                bromas y quedadas con los amigos, conocer nuevos amigos y
                nuevas amigas o simplemente compartir aficiones. Pero sin
                duda, los grupos de Whatsapp se han convertido en el lugar
                perfecto para ligar y conocer nuevas parejas. Ligar en un
                Grupo de Whatsapp
                es tan sencillo como buscar el grupo que más afín puede
                resultar, o bien por ciudad o bien por aficiones, y unirse
                mediante los enlaces de invitación. Una vez dentro, no olvides
                presentarte y respetar las normas que ha publicado el
                administrador.
              </p>
              <h2>Grupos de Whatsapp</h2>
              <p>
                Los grupos de Whatsapp son salas de chat en la aplicación
                Whatsapp. Sirven para mantener conversaciones entre todos los
                miembros del grupo bajo la moderación del Administrador del
                grupo. Los Grupos de Whatsapp para unirte con enlace público,
                además, permiten unirse a todo el mundo que lo desee y tenga
                acceso al enlace de invitación al grupo. Puedes encontrar
                Grupos de Whatsapp para hacer amigos, para compartir aficiones
                o para ligar y encontrar el amor de tu vida. También puedes
                localizar Grupos de Whatsapp en tu ciudad y así conocer gente
                cercana a tí. Aquí encontrarás miles de grupos de Whatsapp
                para unirte. También puedes promocionar tu grupo de Whatsapp
                publicando tu enlace de invitación. Gana cientos de miembros
                en tu grupo y gratis.
              </p>
            </>
            )}
            <br/><br/>
            <Categorias/>
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
    const { data } = await axios.get(
      `${process.env.PAGE_URL}/api/grupos/listado`,
      {
        params: {
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
