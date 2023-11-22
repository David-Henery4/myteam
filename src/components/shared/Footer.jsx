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
    <footer className="w-full px-6 xtraSmTab:px-10 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab bg-black">
      <div className="w-full py-16 col-start-1 col-end-13 flex flex-col justify-center items-center gap-10 text-center medTab:gap-[34px]">
        {/**/}

        <div className="w-full flex flex-col justify-center items-center gap-6 medTab:flex-row medTab:justify-between medTab:items-start">
          <div>
            <div className="w-24 h-6 mb-6 mx-auto medTab:mb-14">
              <LogoIcon className="h-full w-full" />
            </div>
            {navData.map((navItem) => {
              return (
                <Link
                  key={navItem.id}
                  className="last:ml-4 text-[15px] font-semibold leading-[25px]"
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

        <div className="w-full medTab:flex medTab:justify-between medTab:items-center">
          <div className="flex justify-center items-center gap-4">
            <FacebookIcon />
            <PinterestIcon />
            <TwitterIcon />
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
