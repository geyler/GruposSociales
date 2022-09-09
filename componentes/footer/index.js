import Link from "next/link";

const Footer = function () {
  return (
    <footer>
      <div className="texto-footer">
        <ul className="texto-footer-ul">
          <li className="texto-footer-li">
            +18 PROHIBIDO PARA MENORES DE EDAD.
          </li>
          <li className="texto-footer-li">
          Este proyecto fue creado para unir a más personas en todo el mundo.
          </li>
          <li className="texto-footer-li">
          gruposparaunirse.net es una guia de anuncios de grupos de diferentes redes sociales y
            no tiene ninguna relación con las empresas a las que pertenecen esas redes sociales.
          </li>
          <li className="texto-footer-li">
          gruposparaunirse.net no se responsabiliza de las conversaciones,
            contactos y veracidad de los grupos anunciados en
            gruposparaunirse.net, ya que las conversaciones tienen lugar fuera de
            la web.
          </li>
        </ul>
      </div>
      <ul className="links-en-el-footer">
        <li>
          <Link href="/p/politica-de-privacidad">
            <a>Politica de Privacidad</a>
          </Link>
        </li>
        <li>
          <Link href="/p/terminos-y-condiciones">
            <a>Terminos y Condiciones</a>
          </Link>
        </li>
        <li>
          <Link href="/sitemap">
            <a>Sitemap</a>
          </Link>
        </li>
      </ul>
      <div className="copyright">
        © 2022{" "}
        <Link href="/">
          <a>gruposparaunirse.net</a>
        </Link>
        , Todos los derechos reservados.
      </div>
    </footer>
  );
};
export default Footer;
