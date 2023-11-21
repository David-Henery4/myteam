import { SecondaryHeading} from "../shared";
import { TestimonialBox } from ".";
import {
  HomePatternFive,
  HomePatternFour,
} from "../../../public/assets";
import testimonialsData from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="relative col-start-1 col-end-13 pt-36 pb-40 grid grid-cols-mainGridMob bg-secondaryGreen">
      <div className="w-full col-start-2 col-end-12">
        <HomePatternFour className="absolute top-0 -left-6" />
        <div className="text-center">
          <SecondaryHeading>
            Delivering real results for top companies. Some of our{" "}
            <span className="text-secondaryLightBlue"> success stories.</span>
          </SecondaryHeading>
        </div>
        {/* Testimonials Container */}
        <div className="w-full mt-[84px] text-center flex flex-col justify-center items-center gap-[84px]">
          {testimonialsData.map((testimonial) => {
            return (
              <TestimonialBox key={testimonial.id} {...testimonial}/>
            );
          })}
        </div>
      </div>
      <HomePatternFive className="absolute bottom-0 right-0"/>
    </section>
  );
};

export default Testimonials;
