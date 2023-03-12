import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { INFO_CONTACT } from "../../constants/infoContact";
import logotipo from "../../assets/logotipo-perluchi.svg";

function Footer() {
  return (
    <div className="bg-yellow-900 text-yellow-100 w-full flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-start md:mb-20">
        <div className="flex flex-col w-full md:px-4">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img src={logotipo} alt="logotipo" className="w-20" />
            <span className="text-3xl font-semibold text-yellow-default">
              Perluchi
            </span>
          </Link>
          <p className="text-lg text-yellow-default">Comé como en casa</p>
        </div>
        <div className="flex flex-col w-full gap-2 py-10 md:px-4">
          <h3 className="text-yellow-300 text-2xl font-semibold">Horarios</h3>
          <p className="text-sm">
            Nuestros días y horarios de atención son de
            <strong> lunes a viernes, de 11 a 16 horas.</strong>
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 py-10 md:px-4">
          <p className="text-yellow-300 text-2xl font-semibold">
            Teléfono y redes
          </p>
          <ul className="flex flex-col gap-4">
            {INFO_CONTACT.map((item) => (
              <Link
                key={item.id}
                to={item.slug}
                target="_blank"
                className="flex gap-2"
              >
                <img
                  src={item.iconLight}
                  alt={item.iconAlt}
                  className="h-6 w-6"
                />
                <p className="text-sm">{item.label}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Link
        to="https://leogromero-website.netlify.app/"
        target="_blank"
        title="Leonardo Gerbacio"
        className="text-yellow-default text-sm"
      >
        Desarrollado por Leonardo E. Gerbacio Romero
      </Link>
    </div>
  );
}

export default Footer;
