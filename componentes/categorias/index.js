import Link from "next/link";
const Categorias = function (props) {
  const red = props?.red;
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
          <Link href={`${red ? "/?r="+red+"&q=Amistad" : "/?q=Amistad"}`}>
            <a>Amistad</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Arte" : "/?q=Arte"}`}>
            <a>Arte</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Apuestas" : "/?q=Apuestas"}`}>
            <a>Apuestas</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Ayuda" : "/?q=Ayuda"}`}>
            <a>Ayuda</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Ciencia" : "/?q=Ciencia"}`}>
            <a>Ciencia</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Debates" : "/?q=Debates"}`}>
            <a>Debates</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Deportes" : "/?q=Deportes"}`}>
            <a>Deportes</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Fans" : "/?q=Fans"}`}>
            <a>Fans</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Otaku" : "/?q=Otaku"}`}>
            <a>Otaku</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Futbol" : "/?q=Futbol"}`}>
            <a>Futbol</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Gamers" : "/?q=Gamers"}`}>
            <a>Gamers</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Lectores" : "/?q=Lectores"}`}>
            <a>Lectores</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Marketing" : "/?q=Marketing"}`}>
            <a>Marketing</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Noticias" : "/?q=Noticias"}`}>
            <a>Noticias</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Peliculas" : "/?q=Peliculas"}`}>
            <a>Peliculas</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Politica" : "/?q=Politica"}`}>
            <a>Politica</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Risas" : "/?q=Risas"}`}>
            <a>Risas</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Trading" : "/?q=Trading"}`}>
            <a>Trading</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Musica" : "/?q=Musica"}`}>
            <a>Musica</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Series" : "/?q=Series"}`}>
            <a>Series</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Viajar" : "/?q=Viajar"}`}>
            <a>Viajar</a>
          </Link>
        </li>
        <li>
          <Link href={`${red ? "/?r="+red+"&q=Adultos" : "/?q=Adultos"}`}>
            <a>Adultos</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Categorias;
