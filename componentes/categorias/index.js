import Link from "next/link";
const Categorias = function (props) {
  return (
    <>
      <h3 id="todas-las-categorias">Buscar un grupo por Red Social</h3>
      <ul className="categorias-links">
        <li>
          <Link href="/?r=Telegram">
            <a>Telegram</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Whatsapp">
            <a>Whatsapp</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Facebook">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Reddit">
            <a>Reddit</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Discord">
            <a>Discord</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Signal">
            <a>Signal</a>
          </Link>
        </li>
        <li>
          <Link href="/?r=Viber">
            <a>Viber</a>
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <h3>Buscar un grupo por Categoría</h3>
      <ul className="categorias-links">
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
          <Link href="/?q=Frikis">
            <a>Frikis</a>
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
          <Link href="/?q=Musica">
            <a>Musica</a>
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
    </>
  );
};
export default Categorias;
