import { SecondaryHeading } from "../shared";
import {ServicesContainer} from "@/components/home-page";
import { HomePatternThree, PersonIcon } from "../../../public/assets";

const Services = () => {
  return (
    <section className="relative overflow-x-hidden grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab col-start-1 col-end-13 bg-secondaryDarkVeryGreen">
      {/* Wrapper (1070px - 1160px - 1285px) (max-width: 285px - 377px - 445px) */}
      <div className="col-start-2 col-end-12 py-16 flex flex-col justify-center items-center gap-14 max-w-xl mx-auto medTab:py-[100px] medTab:gap-16 lap:py-[140px] lgLap:max-w-[1110px] lgLap:flex-row lgLap:items-start lgLap:justify-between lgLap:w-full">
        <div className="max-w-[240px] mr-auto xtraSmTab:max-w-[272px] medTab:max-w-md lgLap:relative lgLap:bottom-8">
          <div className="w-14 h-1 bg-primaryRed mb-8"></div>
          <SecondaryHeading>
            Build & manage distributed teams like no one else.
          </SecondaryHeading>
        </div>

        <HomePatternThree className="absolute top-0 -right-[140px] mob:-right-[100px] medDesk:top-auto medDesk:bottom-0" />

        <ServicesContainer />
      </div>
      {/**/}
    </section>
  );
};

export default Services;
