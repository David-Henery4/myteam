import { SecondaryHeading } from "../shared";
import {HomePatternFive, HomePatternFour, avatarKady} from "../../../public/assets";

// bottom pattern
{/* <HomePatternFive />; */}


const Testimonials = () => {
  return (
    <section className="relative col-start-2 col-end-12 pt-36 pb-40">
      <HomePatternFour className="absolute top-0 -left-6" />
      <div className="text-center">
        <SecondaryHeading>
          Delivering real results for top companies. Some of our success
          stories.
        </SecondaryHeading>
      </div>
      {/* Testimonials Container */}
      <div className="w-full text-center">
        <div className="">
          <h3>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </h3>
          <div>
            <div>
              <p>Kady Baker</p>
              <p>Product Manager at Bookmark</p>
            </div>
            <div>
              {/* <img src={avatarKady} alt="Avatar of the person that has left their review" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
