function NavItem({href, label}) {
  return (
    <a href={href} title={label} className="text-lg text-black hover:font-medium">{label}</a>
  );
}

export default NavItem;