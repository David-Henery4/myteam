import dynamic from "next/dynamic";
import servicesData from "../../data/servicesData";
import { BodyText, HeadingThree } from "../shared";

// MIGHT REFACTOR THE ICONS FROM THE ARRAY

const ServicesContainer = () => {
  return (
    <div className="w-full text-center grid gap-12 smTab:text-left medTab:gap-8 desk:w-auto">
      {servicesData.map((service) => {
        const DynamicSvg = dynamic(() =>
          import(`../../../public/assets/${service.image}`)
        );
        return (
          <div
            key={service?.id}
            className="w-full flex flex-col justify-center items-center gap-4 smTab:flex-row smTab:justify-center smTab:items-start smTab:gap-6"
          >
            <div className="">
              <DynamicSvg />
              {/* <service.image/> */}
            </div>
            <div className="w-full grid gap-2">
              <HeadingThree>
                <span className="text-primaryRed">{service.title}</span>
              </HeadingThree>
              <div className="lgLap:max-w-[285px] smDesk:max-w-[377px] desk:max-w-[445px]">
                <BodyText>
                  <span className="text-white/80">{service.desc}</span>
                </BodyText>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesContainer;
