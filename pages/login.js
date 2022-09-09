import Footer from "componentes/footer";
import Header from "componentes/header";
import { signIn, getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

const Login = () => {
  return (
    <div className="loginPage">
      <Head>
      <meta name="viewport" content="width=device-width"/>
      <link rel="icon" href="/favicon.ico" />
      <title>Inicir Sesion en GruposParaUnirse.net</title>
      <meta property="og:title" content="Inicir Sesion en GruposParaUnirse.net" />
      <meta name="twitter:title" content="Inicir Sesion en GruposParaUnirse.net" />
      <meta name="description" content="¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles." />
      <meta property="og:description" content="¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles." />
      <meta name="twitter:description" content="¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles."/>
      <meta name="keywords" content="¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles." />
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
      <meta property="url" content={`https://gruposparaunirse.net/login`} />
      <meta property="og:url" content={`https://gruposparaunirse.net/login`} />
      <link rel="canonical" href={`https://gruposparaunirse.net/login`} />
      <meta name="msapplication-TileColor" content="#242424"/>
      <meta name="msapplication-TileImage" content={`https://gruposparaunirse.net/favicon.png`}/>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2965450045901943"
     crossOrigin="anonymous"></script>

      </Head>

      <ArticleJsonLd
      url={`https://gruposparaunirse.net/login`}
      title="Inicir Sesion en GruposParaUnirse.net"
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
      description="¿Buscas Grupos de Redes Sociales para Unirte? En nuestra web GruposParaUnirse encontrarás una gran variedad de Grupos disponibles."    
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

      <div className="login-page app">
        <Header />
        <main className="main">
          <div className="card-login">
            <h2 className="h2-login">Inicia Sesión con tu Cuenta de Google.</h2>
            <button
              className="btn-login-google"
              onClick={() => signIn("google")}
            >
              Iniciar sesion con <div className="espacio-ante-google"></div>
              <Image src='/google.png' className="img-logo-google" width={72} height={25} alt='Google'/>
            </button>
            <h2 className="h2-login">¿Porque iniciar Sesión?</h2>
            <p className="p-login">
              Al iniciar sesión puedes publicar tus Grupos de Redes Sociales en
              este sitio web siempre que quieras, sin limitaciones, también
              puedes editar o eliminar los Grupos que publiques, cuando quieras.
            </p>
            <h2 className="h2-login">¿Es necesario Iniciar Sesión?</h2>
            <p className="p-login">
              Si tu intención no es publicar tus Grupos y solo quieres acceder a
              los grupos para participar en ellos, no es necesario que Inicies
              Sesión, todos los enlaces de los grupos publicados aquí están
              disponibles de manera pública para que te unas cuando quieras.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session)
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  return {
    props: {},
  };
};
