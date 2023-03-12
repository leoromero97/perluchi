import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

function NavItem({ id, to, label, subItems }) {
  const [showSubItems, setShowSubItems] = useState(false);

  const handleShowItems = () => setShowSubItems(!showSubItems);

  return (
    <Link
      key={id}
      to={to !== "categories" && to}
      title={label}
      className="text-lg text-black hover:font-medium"
      onClick={handleShowItems}
    >
      {label}
      {subItems && (
        <div
          className={
            showSubItems
              ? "flex flex-col items-start gap-3 bg-yellow-100  fixed translate-y-2 rounded-md"
              : "hidden"
          }
        >
          {subItems.map((subItem) => (
            <Link
              key={subItem.id}
              to={`${ROUTES.CATEGORY}/${subItem?.label}`}
              className="text-lg text-yello900 hover:font-medium hover:bg-yellow-default w-full px-2 py-1"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}

export default NavItem;
