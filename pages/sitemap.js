import Footer from "../componentes/footer";
import Header from "../componentes/header";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Sitemap(props) {
  return (
    <>
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
                <Link href="?q=Amistad">
                  <a>Amistad</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Arte">
                  <a>Arte</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Apuestas">
                  <a>Apuestas</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Ayuda">
                  <a>Ayuda</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Ciencia">
                  <a>Ciencia</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Debates">
                  <a>Debates</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Deportes">
                  <a>Deportes</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Fans">
                  <a>Fans</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Otaku">
                  <a>Otaku</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Futbol">
                  <a>Futbol</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Gamers">
                  <a>Gamers</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Lectores">
                  <a>Lectores</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Marketing">
                  <a>Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Noticias">
                  <a>Noticias</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Peliculas">
                  <a>Peliculas</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Politica">
                  <a>Politica</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Risas">
                  <a>Risas</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Trading">
                  <a>Trading</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Musica">
                  <a>Musica</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Series">
                  <a>Series</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Viajar">
                  <a>Viajar</a>
                </Link>
              </li>
              <li>
                <Link href="?q=Adultos">
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
