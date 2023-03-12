import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Breadcrumb({ className, items = [] }) {
  const itemsLength = items.length;
  const separator = ">";

  return (
    <ul className={clsx("flex items-center gap-2", className)}>
      {items.map((item, index) => (
        <li key={item.slug} className="flex items-center gap-2">
          <Link
            to={item.slug}
            title={item.label}
            className="font-bold text-xs text-yellow-900"
          >
            <p>{item.label}</p>
          </Link>
          <span>{index !== itemsLength - 1 && separator}</span>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
