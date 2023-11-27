"use client";
import Image from "next/image";
import { HeadingThree } from "../shared";
import { CrossIcon, TwitterIcon, LinkedInIcon } from "../../../public/assets";
import { useState } from "react";

const DirectorsBox = ({ id, img, role, name, quote }) => {
  const [isQuoteActive, setIsQuoteActive] = useState(false);
  //
  return (
    <div key={id} className="grid grid-rows-directorsBox">
      <div
        className={`pt-8 px-6 pb-14 row-start-1 row-end-3 col-start-1 col-end-2 flex flex-col justify-center items-center gap-4 ${
          isQuoteActive ? "bg-black" : "bg-secondaryDarkVeryGreen"
        }`}
      >
        {isQuoteActive ? (
          <>
            <HeadingThree>
              <span className="text-secondaryLightBlue">{name}</span>
            </HeadingThree>
            <p className="text-white text-center text-[15px] font-semibold leading-[25px] mt-2">
              {`"${quote}"`}
            </p>
            <div className="flex justify-center items-center gap-4 mt-6">
              <TwitterIcon className="fill-white hover:fill-primaryRed hover:cursor-pointer" />
              <LinkedInIcon className="fill-white hover:fill-primaryRed hover:cursor-pointer" />
            </div>
          </>
        ) : (
          <>
            <div className="h-24 w-24 rounded-full overflow-hidden">
              <Image src={img} alt="Headshot of director" />
            </div>
            <div>
              <HeadingThree>
                <span className="text-secondaryLightBlue">{name}</span>
              </HeadingThree>
              <p>{role}</p>
            </div>
          </>
        )}
      </div>

      {/* Icon */}
      <div
        className="p-5 bg-primaryRed rounded-full grid place-items-center col-start-1 col-end-2 row-start-2 row-end-4 justify-self-center hover:cursor-pointer hover:bg-secondaryLightBlue"
        onClick={() => {
          setIsQuoteActive(!isQuoteActive);
        }}
      >
        <CrossIcon
          className={`fill-secondaryDarkVeryGreen transition-all ${
            isQuoteActive ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default DirectorsBox;
