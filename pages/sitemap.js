import Footer from "../componentes/footer";
import Header from "../componentes/header";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Sitemap(props) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>Sitemap</title>
      <meta property="og:title" content="Sitemap" />
      <meta name="twitter:title" content="Sitemap" />
      <meta name="description" content="Sitemap" />
      <meta property="og:description" content="Sitemap" />
      <meta name="twitter:description" content="Sitemap"/>
      <meta name="keywords" content="Sitemap" />
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
      <meta property="url" content={`https://gruposparaunirse.net/sitemap`} />
      <meta property="og:url" content={`https://gruposparaunirse.net/sitemap`} />
      <link rel="canonical" href={`https://gruposparaunirse.net/sitemap`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`https://gruposparaunirse.net/favicon.png`}/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossOrigin="anonymous"></script>
      </Head>
      <ArticleJsonLd
      url={`https://gruposparaunirse.net/sitemap`}
      title="Sitemap"
      images={[
        `https://gruposparaunirse.net/grupos.jpg`,
        `https://gruposparaunirse.net/favicon.ico`,
      ]}
      authorName={[
        {
          name: "Grupos Para Unirse",
          url:`https://gruposparaunirse.net`
        }
      ]}
      publisherName="Grupos Para Unirse"
      publisherLogo={`https://gruposparaunirse.net/favicon.ico`}
      description="Sitemap"    
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
          <div className="text-informacion-footer">
            <h1>Sitemap</h1>
            <br />
            <h2>Terminos y Politicas</h2>
            <ul>
              <li>
                <Link href="/p/terminos-y-condiciones">
                  <a>Terminos y Condiciones</a>
                </Link>
              </li>
              <li>
                <Link href="/p/politica-de-privacidad">
                  <a>Politica de Privacidad</a>
                </Link>
              </li>
            </ul>
            <br />
            <h2>Grupos por Red Social</h2>
            <ul>
              <li>
                <Link href="/?r=telegram">
                  <a>Telegram</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=whatsapp">
                  <a>Whatsapp</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=facebook">
                  <a>Facebook</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=reddit">
                  <a>Reddit</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=discord">
                  <a>Discord</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=signal">
                  <a>Signal</a>
                </Link>
              </li>
              <li>
                <Link href="/?r=viber">
                  <a>Viber</a>
                </Link>
              </li>
            </ul>
            <br />
            <h2>Grupos por Categorias</h2>
            <ul>
              <li>
                <Link href="/?q=Amistad">
                  <a>Amistad</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Arte">
                  <a>Arte</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Apuestas">
                  <a>Apuestas</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Ayuda">
                  <a>Ayuda</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Ciencia">
                  <a>Ciencia</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Debates">
                  <a>Debates</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Deportes">
                  <a>Deportes</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Fans">
                  <a>Fans</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Otaku">
                  <a>Otaku</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Futbol">
                  <a>Futbol</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Gamers">
                  <a>Gamers</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Lectores">
                  <a>Lectores</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Marketing">
                  <a>Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Noticias">
                  <a>Noticias</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Peliculas">
                  <a>Peliculas</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Politica">
                  <a>Politica</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Risas">
                  <a>Risas</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Trading">
                  <a>Trading</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Musica">
                  <a>Musica</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Series">
                  <a>Series</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Viajar">
                  <a>Viajar</a>
                </Link>
              </li>
              <li>
                <Link href="/?q=Adultos">
                  <a>Adultos</a>
                </Link>
              </li>
            </ul>
            <br />
            <br />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  try {
    const session = await getSession(context);
    return {
      props: {
        session,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
