import Head from "next/head";
import Footer from "../componentes/footer";
import Header from "../componentes/header";
import Link from "next/link";
import Categorias from "componentes/categorias";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

export default function Homex(props) {
  return (
    <div className="contenedor">
      <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>Error 404 - Lo que estas buscando no se encuentra.</title>
      <meta property="og:title" content="Error 404 - Lo que estas buscando no se encuentra." />
      <meta name="twitter:title" content="Error 404 - Lo que estas buscando no se encuentra." />
      <meta name="description" content="Error 404 - Lo que estas buscando no se encuentra." />
      <meta property="og:description" content="Error 404 - Lo que estas buscando no se encuentra." />
      <meta name="twitter:description" content="Error 404 - Lo que estas buscando no se encuentra."/>
      <meta name="keywords" content="Error 404 - Lo que estas buscando no se encuentra." />
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
      <meta property="url" content={`https://gruposparaunirse.net/404`} />
      <meta property="og:url" content={`https://gruposparaunirse.net/404`} />
      <link rel="canonical" href={`https://gruposparaunirse.net/404`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`https://gruposparaunirse.net/favicon.png`}/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossOrigin="anonymous"></script>
      </Head>
      <ArticleJsonLd
      url={`https://gruposparaunirse.net/404`}
      title="Error 404 - Lo que estas buscando no se encuentra."
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
      publisherLogo={`https://gruposparaunirse.net/favicon.ico`}
      description="Error 404 - Lo que estas buscando no se encuentra."    
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
        <main className="error-404">
          <h1 className="e404-titulo">404</h1>
          <p>
            Parece que la página no existe. Prueba buscar otro Grupo o
            selecciona una categoría a continuación.
          </p>
          <Categorias />
        </main>
        <Footer />
      </div>
    </div>
  );
}
