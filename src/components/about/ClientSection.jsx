import clientData from "@/data/clientData";
import Image from "next/image";
import { SecondaryHeading } from "../shared";
import { AboutFour } from "../../../public/assets";

const ClientSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondaryDarkVeryGreen col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutFour className="absolute -top-[100px] -left-[100px] tab:-left-0 medDesk:-top-0"/>
      <div className="w-full py-20 col-start-2 col-end-12 max-w-[1110px] mx-auto text-center lap:py-[100px] medDesk:py-[140px]">
        <SecondaryHeading>Some of our clients</SecondaryHeading>
        <div className="mt-16 mx-auto flex flex-col justify-center items-center gap-14 tab:flex-row tab:justify-between tab:gap-12 desk:gap-20">
          {clientData.map((item, i) => {
            return (
              <div key={i} className="max-w-[162px]">
                <Image src={item} alt="logo of one of our clients" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
