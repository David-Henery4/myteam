import { LogoIcon } from "../../../public/assets";
import navData from "@/data/navData";
import Link from "next/link";
import { ContactUsBtn } from ".";
import BurgerAndSidebar from "../navigation/BurgerAndSidebar";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center mt-12 px-6 xtraSmTab:px-10">
      <div className="tab:flex tab:justify-start tab:items-center tab:gap-12">
        <div className="w-32 h-8">
          <LogoIcon className="h-full w-full" />
        </div>
        <div className="hidden tab:block">
          {navData.map((navItem) => {
            return (
              <Link
                className="first:mr-10 hover:text-primaryRed"
                key={navItem.id}
                href={navItem.path}
              >
                {navItem.label}
              </Link>
            );
          })}
        </div>
      </div>
      <BurgerAndSidebar/>
      <div className="hidden tab:block">
        <ContactUsBtn />
      </div>
    </nav>
  );
};

export default Navbar;
