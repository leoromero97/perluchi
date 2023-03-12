import React from "react";
import clsx from "clsx";
import { NAV_ITEMS } from "../../constants/navItems";
import NavItem from "../Navbar/NavItem";

function Sidebar({ className }) {
  return (
    <div
      className={clsx(
        "flex flex-col h-screen right-0 shadow-xl gap-10 py-12 px-4 bg-yellow-100 translate-y-24 translate-x-20 duration-500 delay-300",
        className
      )}
    >
      <ul className="flex flex-col gap-10">
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
  );
}

export default Sidebar;
