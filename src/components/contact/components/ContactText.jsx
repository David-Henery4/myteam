import dynamic from "next/dynamic";
import { SubPagesMainHeader, HeadingThree } from "@/components/shared";
import servicesData from "@/data/servicesData";

const ContactText = () => {
  return (
    <div className="w-full">
      <div>
        <SubPagesMainHeader>Contact</SubPagesMainHeader>
        <h2 className="mt-4 font-bold text-[32px] leading-[48px] text-primaryRed">
          Ask About Us
        </h2>
      </div>
      <div className="flex flex-col gap-6 mt-10 lgLap:mt-8 lgLap:gap-2">
        {servicesData.map((item) => {
          const DynamicSvg = dynamic(() =>
            import(`../../../../public/assets/${item.image}`)
          );
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center gap-6 mob:flex-row mob:justify-start"
            >
              <DynamicSvg />
              <div className="flex-1 mob:text-left">
                <HeadingThree>{item.contactDesc}</HeadingThree>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactText