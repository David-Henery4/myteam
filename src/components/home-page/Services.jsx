import { SecondaryHeading } from "../shared";
import {ServicesContainer} from "@/components/home-page";
import { HomePatternThree, PersonIcon } from "../../../public/assets";

const Services = () => {
  return (
    <section className="grid grid-cols-mainGridMob col-start-1 col-end-13 bg-secondaryDarkVeryGreen">
      {/* Wrapper */}
      <div className="col-start-2 col-end-12 pt-16 relative flex flex-col justify-center items-center gap-14">
        <div className="max-w-[240px] mr-auto">
          <div className="w-14 h-1 bg-primaryRed mb-8"></div>
          <SecondaryHeading>
            Build & manage distributed teams like no one else.
          </SecondaryHeading>
        </div>

        <HomePatternThree className="absolute top-0 -right-[140px]" />

        <ServicesContainer/>

      </div>
      {/**/}
    </section>
  );
};

export default Services;
