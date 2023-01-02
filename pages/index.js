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
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";
import { useRouter } from 'next/router';
import TextosHome from "componentes/parts/textohome";
import CardsCategorias from "componentes/parts/CardsCategorias";

export default function Homex(props) {

  const router = useRouter();

  var pag = props.context.pag

  // ver si es categoria, red social o busqueda
  if (props.context.r) {
    var cat = props.context.r;
    var rSocial = props.context.r
  }
  if (props.context.q) {
    var cat = props.context.q;
    var categ = props.context.q;
  }
  if (props.context.s) {
    var cat = props.context.s;
  }

  //ver que red social es, sino poner grupos
  if (props.context.r) {
    var rsocial = props.context.r.toLowerCase();
  }else{
    var rsocial = 'grupos'
  }


  return (
    <div className="contenedor">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>
          Grupos para Unirse de {cat ? cat : "Whatsapp"} | Grupos de{" "}
          {cat ? cat : "Whatsapp"}
        </title>
        <meta name="propeller" content="7820ac37fe98bef7acd6d37121ee352f"/>
        <meta
          property="og:title"
          content={`Grupos para Unirse de ${
            cat ? cat : "Whatsapp"
          } | Grupos de ${cat ? cat : "Whatsapp"}`}
        />
        <meta
          name="twitter:title"
          content={`Grupos para Unirse de ${
            cat ? cat : "Whatsapp"
          } | Grupos de ${cat ? cat : "Whatsapp"}`}
        />
        <meta
          name="description"
          content={`¿Buscas Grupos de ${
            cat ? cat : "Whatsapp"
          } para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos de ${
            cat ? cat : "Whatsapp"
          } disponibles.`}
        />
        <meta
          property="og:description"
          content={`¿Buscas Grupos de ${
            cat ? cat : "Whatsapp"
          } para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos de ${
            cat ? cat : "Whatsapp"
          } disponibles.`}
        />
        <meta
          name="twitter:description"
          content={`¿Buscas Grupos de ${
            cat ? cat : "Whatsapp"
          } para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos de ${
            cat ? cat : "Whatsapp"
          } disponibles.`}
        />
        <meta
          name="keywords"
          content={` ${cat ? cat : "Whatsapp"},Grupos de ${
            cat ? cat : "Whatsapp"
          },Unirme a Grupos de  ${cat ? cat : "Whatsapp"}, Link de Grupos de  ${
            cat ? cat : "Whatsapp"
          }`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="max-image-preview:large" />
        <meta
          property="image"
          content={`https://gruposparaunirse.net/${rsocial}.jpg`}
        />
        <meta
          property="og:image"
          content={`https://gruposparaunirse.net/${rsocial}.jpg`}
        />
        <meta
          name="twitter:image"
          content={`https://gruposparaunirse.net/${rsocial}.jpg`}
        />
        <link
          href={`https://gruposparaunirse.net/${rsocial}.jpg`}
          rel="image_src"
        />
        <meta property="image:width" content="1280" />
        <meta property="image:height" content="720" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="robots" content="index,follow" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="WebPage" />
        <meta property="og:site_name" content="Grupos Para Unirse" />
        <meta
          property="url"
          content={`https://gruposparaunirse.net${props.url}`}
        />
        <meta
          property="og:url"
          content={`https://gruposparaunirse.net${props.url}`}
        />
        <link
          rel="canonical"
          href={`https://gruposparaunirse.net${props.url}`}
        />
        <meta name="msapplication-TileColor" content="#242424" />
        <meta
          name="msapplication-TileImage"
          content={`https://gruposparaunirse.net/favicon.png`}
        />
      </Head>
      <ArticleJsonLd
        url={`https://gruposparaunirse.net${props.url}`}
        title={`Grupos para Unirse de ${cat ? cat : "Whatsapp"} | Grupos de ${
          cat ? cat : "Whatsapp"
        }`}
        images={[
          `https://gruposparaunirse.net/${rsocial}.jpg`,
          `https://gruposparaunirse.net/favicon.png`,
        ]}
        authorName={[
          {
            name: "Grupos Para Unirse",
            url: `https://gruposparaunirse.net/`,
          },
        ]}
        publisherName="Grupos Para Unirse"
        publisherLogo={`https://gruposparaunirse.net/favicon.ico`}
        description={`¿Buscas Grupos de ${
          cat ? cat : "Whatsapp"
        } para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos de ${
          cat ? cat : "Whatsapp"
        } disponibles.`}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "Grupos",
            item: `https://gruposparaunirse.net/`,
          },
          {
            position: 2,
            name: `${cat ? cat : "Whatsapp"}`,
            item: `https://gruposparaunirse.net/?r=${cat?cat:"Whatsapp"}`,
          },
        ]}
      />

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
              {cat ? (
                <h1>
                  Grupos para unirte de {rSocial ? rSocial : ""}
                  {rSocial && categ ? " / " : ""}
                  {categ ? categ : ""}
                </h1>
              ) : (
                <h1>Grupos para unirte de Redes Sociales.</h1>
              )}
            </li>

            <li>
              {
                // !cat && !pag ? <CardsCategorias/> : ''
              }
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
            <br />
            
            <br />
            <Categorias red={rSocial} />
            <br />
            <br />
            <TextosHome cat={cat} />

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
        url: context.resolvedUrl
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
