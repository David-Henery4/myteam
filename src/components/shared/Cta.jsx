import { SecondaryHeading, ContactUsBtn } from ".";
import { HomePatternSix} from "../../../public/assets"

const Cta = () => {
  return (
    <section className="relative overflow-hidden col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab bg-primaryRed text-center text-secondaryDarkVeryGreen">
      <div className="w-full py-[90px] col-start-2 col-end-12 max-w-xl mx-auto tab:flex tab:justify-between tab:items-center tab:gap-[84px]">
        <SecondaryHeading>Ready to get started?</SecondaryHeading>
        <div className="mt-6 tab:m-0">
          <ContactUsBtn isCta={true} />
        </div>
      </div>
      <HomePatternSix className="absolute -bottom-5 left-0" />
    </section>
  );
};

export default Cta;
