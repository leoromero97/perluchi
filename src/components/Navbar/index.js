import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "../../constants/navItems";
import { ROUTES } from "../../constants/routes";
import logotipo from "../../assets/logotipo-perluchi-black.svg";
import icBars from "../../assets/ic-bars.svg";
import icMultiply from "../../assets/ic-multiply.svg";
import useCart from "../../hooks/cart/useCart";

function Navbar({ onClick, opened }) {
  const { total } = useCart();
  return (
    <div className="flex items-center justify-center w-full py-2 px-4 bg-yellow-100">
      <div className="flex items-center justify-between w-full max-w-screen-xl">
        <Link to={ROUTES.HOME} className="flex items-center">
          <img src={logotipo} alt="logotipo" className="w-20" />
          <span className="text-3xl font-semibold">Perluchi</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-4">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.id}>
                  <NavItem
                    label={item.label}
                    to={item.to}
                    subItems={item?.subItems}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <CartWidget countCartItems={total.productQuantity} />
        <button onClick={onClick} className="flex h-6 w-6 md:hidden">
          <img
            src={opened ? icMultiply : icBars}
            alt={opened ? "Cerrar menú" : "Abrir menu"}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
