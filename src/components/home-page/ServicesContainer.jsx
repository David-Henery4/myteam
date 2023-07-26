// 'use client'
import dynamic from "next/dynamic";
import servicesData from "../../data/servicesData";

// MIGHT REFACTOR THE ICONS FROM THE ARRAY

const ServicesContainer = () => {
  return (
    <div className="w-full text-center grid gap-12">
      {servicesData.map(service => {
        const DynamicSvg = dynamic(() => import(`../../../public/assets/${service.image}`))
        return (
          <div key={service?.id} className="w-full flex flex-col justify-center items-center gap-4">
            <div className="">
              <DynamicSvg/>
              {/* <service.image/> */}
            </div>
            <div className="w-full">
              <h3 className="text-primaryRed font-bold text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-base font-semibold leading-6">
                {service.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesContainer