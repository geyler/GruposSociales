import Link from "next/link";

const CardsCategorias = (props) => {
  return (
    <>
      <ul className="categorias-links cards-categorias">
        <li className="li-cardas-categorias">
          <Link href="/?r=Telegram">
            <a className="cards-categorias-a telegram">Telegram</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Whatsapp">
            <a className="cards-categorias-a whatsapp">Whatsapp</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Facebook">
            <a className="cards-categorias-a facebook">Facebook</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Reddit">
            <a className="cards-categorias-a reddit">Reddit</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Discord">
            <a className="cards-categorias-a discord">Discord</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Signal">
            <a className="cards-categorias-a signal">Signal</a>
          </Link>
        </li>
        <li className="li-cardas-categorias">
          <Link href="/?r=Viber">
            <a className="cards-categorias-a viber">Viber</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
export default CardsCategorias;
