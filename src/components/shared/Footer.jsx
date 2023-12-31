import {
  LogoIcon,
  PinterestIcon,
  TwitterIcon,
  FacebookIcon,
} from "../../../public/assets";
import navData from "@/data/navData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-6 xtraSmTab:px-10 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab bg-black lgTab:px-20">
      <div className="w-full max-w-[1110px] mx-auto py-16 col-start-1 col-end-13 flex flex-col justify-center items-center gap-10 text-center medTab:gap-[34px] medTab:py-14 lap:flex-row lap:justify-between lap:gap-0">
        {/**/}

        <div className="w-full flex flex-col justify-center items-center gap-6 medTab:flex-row medTab:justify-between medTab:items-start lap:gap-[125px] lap:w-auto">
          <div>
            <div className="w-24 h-6 mb-6 mx-auto medTab:mb-14">
              <Link href="/">
                <LogoIcon className="h-full w-full" />
              </Link>
            </div>
            {navData.map((navItem) => {
              return (
                <Link
                  key={navItem.id}
                  className="last:ml-4 text-[15px] font-semibold leading-[25px] hover:text-primaryRed"
                  href={navItem.path}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </div>
          <div className="text-[15px] font-semibold leading-[25px] text-white/60 medTab:text-right">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>

        <div className="w-full medTab:flex medTab:justify-between medTab:items-center lap:flex-col lap:items-end lap:gap-[51px] lap:w-auto">
          <div className="flex justify-center items-center gap-4">
            <FacebookIcon className="fill-white hover:cursor-pointer hover:fill-primaryRed" />
            <PinterestIcon className="fill-white hover:cursor-pointer hover:fill-primaryRed" />
            <TwitterIcon className="fill-white hover:cursor-pointer hover:fill-primaryRed" />
          </div>
          <p className="mt-4 text-[15px] font-semibold leading-[25px] text-white/60 medTab:m-0">
            Copyright 2020. All Rights Reserved
          </p>
        </div>

        {/**/}
      </div>
    </footer>
  );
};

export default Footer;
