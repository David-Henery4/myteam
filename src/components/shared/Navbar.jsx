import {BurgerIcon, LogoIcon} from "../../../public/assets"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <LogoIcon />
      <BurgerIcon className="hover:cursor-pointer" />
    </nav>
  );
}

export default Navbar