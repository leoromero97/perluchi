function NavItem({href, label}) {
  return (
    <a href={href} title={label} className="text-lg text-black">{label}</a>
  );
}

export default NavItem;