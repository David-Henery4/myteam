import { Navbar, MainTitleHeading } from "../shared";
import {
  HomePatternOne,
  HomePatternFive,
  HomePatternFour,
  HomePatternSix,
  HomePatternThree,
  HomePatternTwo,
} from "../../../public/assets";

const Header = () => {
  return (
    <>
      <header className="col-start-2 col-end-12 text-center relative">
        <Navbar />
        <div className="mt-20 flex flex-col justify-center items-center gap-5">
          <MainTitleHeading>
            <span className="block">Find the</span> Best{" "}
            <span className="text-primaryRed">Talent</span>
          </MainTitleHeading>
          <p className="text-base font-semibold leading-7">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </header>
      <div className="col-start-1 col-end-13 px-2 mx-auto w-full max-w-[358px] overflow-hidden">
        <HomePatternTwo className="w-full relative top-36" />
      </div>
    </>
  );
};

export default Header;
