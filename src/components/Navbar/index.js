import NavItem from "./NavItem";
import { NAV_ITEMS } from '../../constants/navItems';
import logotipo from '../../assets/logotipo-perluchi.svg';

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full py-2 px-4 bg-white border-b-2 border-b-amber-100 mb-6">
      <img src={logotipo} alt="logotipo" className="w-20" />
      <ul className="flex gap-4">
        {NAV_ITEMS.map(item => {
          return (
            <li>
              <NavItem key={item.id} label={item.label} href={item.href}/>
            </li>
          )})}
      </ul>
    </div>
  );
}

export default Navbar;
