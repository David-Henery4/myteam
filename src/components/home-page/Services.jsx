import { SecondaryHeading } from "../shared";
import {ServicesContainer} from "@/components/home-page";
import { HomePatternThree, PersonIcon } from "../../../public/assets";

const Services = () => {
  return (
    <section className="relative grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab col-start-1 col-end-13 bg-secondaryDarkVeryGreen">
      {/* Wrapper */}
      <div className="col-start-2 col-end-12 py-16 flex flex-col justify-center items-center gap-14 max-w-xl mx-auto">
        <div className="max-w-[240px] mr-auto xtraSmTab:max-w-[272px]">
          <div className="w-14 h-1 bg-primaryRed mb-8"></div>
          <SecondaryHeading>
            Build & manage distributed teams like no one else.
          </SecondaryHeading>
        </div>

        <HomePatternThree className="absolute top-0 -right-[140px] mob:-right-[100px]" />

        <ServicesContainer />
      </div>
      {/**/}
    </section>
  );
};

export default Services;
