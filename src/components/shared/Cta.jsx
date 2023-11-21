import { SecondaryHeading } from ".";
import { HomePatternSix} from "../../../public/assets"

const Cta = () => {
  return (
    <section className="relative overflow-hidden col-start-1 col-end-13 grid grid-cols-mainGridMob bg-primaryRed text-center text-secondaryDarkVeryGreen">
      <div className="w-full py-[90px] col-start-2 col-end-12">
        <SecondaryHeading>Ready to get started?</SecondaryHeading>
        <button className="text-lg font-semibold leading-7 px-8 py-3 mt-6 rounded-3xl border-2 border-secondaryDarkVeryGreen hover:bg-secondaryDarkVeryGreen hover:text-white active:text-secondaryDarkVeryGreen active:bg-opacity-0">
          Contact Us
        </button>
      </div>
      <HomePatternSix className="absolute -bottom-5 left-0" />
    </section>
  );
};

export default Cta;
