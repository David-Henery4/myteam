import { BodyText } from "../shared";
import { AboutAndMobilePattern } from "../../../public/assets";

const AboutHeader = () => {
  return (
    <header className="relative overflow-hidden w-full pt-20 pb-[108px] col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutAndMobilePattern className="absolute -bottom-[100px] -right-[100px] tab:-bottom-0" />
      <div className="w-full col-start-2 col-end-12 max-w-[1110px] mx-auto flex flex-col justify-center items-center gap-4 text-center lgTab:gap-8 medDesk:text-left medDesk:flex-row medDesk:justify-start medDesk:items-start medDesk:gap-[177px]">
        <h1 className="font-bold text-[40px] leading-[40px] xtraSmTab:text-[64px] xtraSmTab:leading-[64px] medDesk:leading-[100px]">
          About
        </h1>
        <div>
          <div className="w-[50px] h-1 hidden bg-primaryRed medDesk:block"></div>
          <div className="max-w-[457px] mx-auto medDesk:max-w-[762px] medDesk:pr-8 medDesk:mt-10">
            <BodyText>
              <span className="lgTab:text-lg">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </span>
            </BodyText>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AboutHeader