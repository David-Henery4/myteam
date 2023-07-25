// import { PersonIcon } from "../../../public/assets";
import servicesData from "../../data/servicesData";

const ServicesContainer = () => {
  return (
    <div className="w-full text-center">
      {servicesData.map(service => {
        const Svg = service.image
        return (
          <div key={service?.id} className="w-full flex flex-col justify-center items-center gap-4">
            <div className="">
              {/* <Svg/> */}
              {/* {service.image} */}
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