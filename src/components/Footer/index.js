import logotipo from "../../assets/logotipo-perluchi.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function Footer() {
  return (
    <div className="bg-yellow-black text-yellow-light w-full flex items-center justify-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center py-8">
        <Link to={ROUTES.HOME} className="flex items-center">
          <img src={logotipo} alt="logotipo" className="w-20" />
          <span className="text-3xl font-semibold">Perluchi</span>
        </Link>
        <a
          href="https://leogromero-website.netlify.app/"
          title="Leonardo Gerbacio"
        >
          Creado por Leonardo E. Gerbacio Romero
        </a>
      </div>
    </div>
  );
}

export default Footer;
