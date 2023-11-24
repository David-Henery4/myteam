import { SecondaryHeading, ContactUsBtn } from ".";
import { HomePatternSix} from "../../../public/assets"

const Cta = () => {
  return (
    <section className="relative overflow-hidden col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab bg-primaryRed text-secondaryDarkVeryGreen">
      <div className="w-full text-center py-[90px] col-start-2 col-end-12 max-w-xl mx-auto gap-6 flex flex-col justify-between items-center tab:flex-row tab:gap-[84px] lgTab:max-w-[917px] lgTab:text-left">
        <div className="flex-1">
          <SecondaryHeading>Ready to get started?</SecondaryHeading>
        </div>
        <div className="tab:m-0">
          <ContactUsBtn isCta={true} />
        </div>
      </div>
      <HomePatternSix className="absolute -bottom-5 left-0" />
    </section>
  );
};

export default Cta;
