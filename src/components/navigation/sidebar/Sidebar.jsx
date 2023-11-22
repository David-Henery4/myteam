import { CloseIcon } from "../../../../public/assets";
import navData from "@/data/navData";
import Link from "next/link";
import { ContactUsBtn } from "@/components/shared";
import { AboutAndMobilePattern } from "../../../../public/assets";

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <aside
      className={`fixed z-20 top-0 right-0 h-screen w-[70%] transition-all bg-secondaryDarkVeryBlue pt-14 pl-12 pr-6 tab:hidden ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseIcon
        className="ml-auto hover:cursor-pointer transition-all hover:scale-125 hover:-rotate-90"
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      />
      <div className="flex flex-col justify-start items-start gap-6 mt-10 mb-12">
        {navData.map((navItem) => {
          return (
            <Link
              key={navItem.id}
              className="text-[15px] font-semibold leading-[25px] hover:text-primaryRed"
              href={navItem.path}
            >
              {navItem.label}
            </Link>
          );
        })}
      </div>
      <ContactUsBtn isSidebar={true} />
      <AboutAndMobilePattern className="absolute bottom-0 -right-[100px]"/>
    </aside>
  );
}

export default Sidebar