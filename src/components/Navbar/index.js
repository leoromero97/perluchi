import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "../../constants/navItems";
import { ROUTES } from "../../constants/routes";
import logotipo from "../../assets/logotipo-perluchi.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full py-2 px-4 bg-white mb-6 max-w-screen-xl">
      <Link to={ROUTES.HOME} className="flex items-center">
        <img src={logotipo} alt="logotipo" className="w-20" />
        <span className="text-3xl font-semibold">Perluchi</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-4">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.id}>
                <NavItem label={item.label} href={item.href} />
              </li>
            );
          })}
        </ul>
        <CartWidget countCartItems={1} />
      </div>
    </div>
  );
}

export default Navbar;
