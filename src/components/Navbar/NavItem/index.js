import { Link } from "react-router-dom";

function NavItem({href, label}) {
  return (
    <Link to={href} title={label} className="text-lg text-black hover:font-medium">{label}</Link>
  );
}

export default NavItem;