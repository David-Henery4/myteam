"use client"
import Link from "next/link";

const ContactUsBtn = ({
  isCta = false,
  isSidebar = false,
  setIsSidebarOpen,
}) => {
  return (
    <Link
      href="/contact"
      className={`text-lg font-semibold leading-7 rounded-3xl border-2 py-3 text-center ${
        isSidebar ? "w-full max-w-[160px] mr-auto inline-block" : "px-7"
      } ${
        isCta
          ? "border-secondaryDarkVeryGreen hover:bg-secondaryDarkVeryGreen hover:text-white active:text-secondaryDarkVeryGreen active:bg-opacity-0 tab:flex-1"
          : "text-white border-white hover:bg-white hover:text-black active:bg-opacity-0 active:text-white"
      }`}
      onClick={() => {
        if (setIsSidebarOpen){
          setIsSidebarOpen(false);
        }
      }}
    >
      Contact Us
    </Link>
  );
};

export default ContactUsBtn;
