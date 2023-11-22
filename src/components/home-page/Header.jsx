import { MainTitleHeading, BodyText } from "../shared";
import { HomePatternTwo } from "../../../public/assets";

const Header = () => {
  return (
    <>
      <header className="col-start-2 col-end-12 text-center relative">
        <div className="mt-20 flex flex-col justify-center items-center gap-5">
          <MainTitleHeading>
            <span className="block">Find the</span> Best{" "}
            <span className="text-primaryRed">Talent</span>
          </MainTitleHeading>
          <div className="max-w-[457px] mx-auto">
            <BodyText>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </BodyText>
          </div>
        </div>
      </header>
      <div className="col-start-1 col-end-13 px-2 mx-auto w-full max-w-[358px] overflow-hidden">
        <HomePatternTwo className="w-full relative top-32" />
      </div>
    </>
  );
};

export default Header;
