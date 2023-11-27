import { MainTitleHeading, BodyText } from "../shared";
import { HomePatternTwo, HomePatternOne } from "../../../public/assets";

const Header = () => {
  return (
    <div className="relative col-start-1 col-end-13 grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <HomePatternOne className="absolute top-[119px] -left-[100px] hidden xtraLgDesk:block" />
      <div className="w-full col-start-2 col-end-12 max-w-[1110px] mx-auto">
        <header className="w-full text-center relative">
          <div className="mt-20 flex flex-col justify-center items-center gap-5 tab:mt-28 tab:gap-6 lgTab:gap-8 medDesk:flex-row medDesk:items-stretch medDesk:text-left medDesk:justify-between medDesk:mt-[130px] medDesk:mb-11">
            <MainTitleHeading>
              <span className="block">Find the</span> Best{" "}
              <span className="text-primaryRed">Talent</span>
            </MainTitleHeading>
            <div className="max-w-[457px] mx-auto medDesk:m-0 medDesk:max-w-[445px] medDesk:flex medDesk:flex-col medDesk:justify-between medDesk:items-start">
              <div className="w-[50px] h-1 hidden bg-secondaryLightBlue medDesk:block"></div>
              <BodyText>
                <span className="lgTab:text-lg">
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren’t tapping into the abundance
                  of global talent. We’re about to change that.
                </span>
              </BodyText>
            </div>
          </div>
        </header>
        <div className="col-start-1 col-end-13 px-2 mx-auto w-full max-w-[358px] overflow-hidden medDesk:col-start-8 medDesk:ml-auto medDesk:mr-0">
          <HomePatternTwo className="w-full relative top-32" />
        </div>
      </div>
    </div>
  );
};

export default Header;
