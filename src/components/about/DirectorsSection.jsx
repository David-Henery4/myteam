import directorsData from "@/data/directorsData";
import { SecondaryHeading} from "../shared";
import { DirectorsBox } from ".";
import { AboutPatternTwoContactOne, HomePatternFour} from "../../../public/assets";

const DirectorsSection = () => {
  return (
    <section className="relative overflow-hidden py-[88px] col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab tab:py-[100px] lgTab:grid-cols-mainGridLgTab bg-secondaryGreen">
      <AboutPatternTwoContactOne className="absolute -top-[100px] -left-[100px] tab:-top-0" />
      <div className="col-start-2 col-end-12 w-full text-center max-w-[1110px] mx-auto">
        <SecondaryHeading>Meet the directors</SecondaryHeading>

        <div className="mt-12 max-w-[573px] mx-auto grid mob:grid-cols-directorsContainer gap-y-6 gap-x-[11px] medTab:gap-y-12 lgTab:mt-16 desk:gap-x-[30px] medDesk:max-w-none">
          {directorsData.map((item) => {
            return <DirectorsBox key={item.id} {...item} />;
          })}
        </div>
      </div>
      <HomePatternFour className="absolute bottom-0 -right-[50px] mob:-right-0" />
    </section>
  );
};

export default DirectorsSection;
