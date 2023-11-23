import { BodyText, HeadingThree } from "../shared";
import Image from "next/image";
import {
  QuoteMark,
} from "../../../public/assets";

const TestimonialBox = ({id, testimonial, name, job, img}) => {
  return (
    <div key={id} className="lap:flex lap:flex-col lap:justify-between lap:items-center">
      <div className="relative">
        <div className="relative z-10">
          <BodyText>“{testimonial}”</BodyText>
        </div>
        <QuoteMark className="absolute -top-9 left-1/2 -translate-x-1/2" />
      </div>
      <div className="mt-4">
        <div>
          <HeadingThree>
            <span className="text-secondaryLightBlue">{name}</span>
          </HeadingThree>
          <p className="font-medium italic text-[13px] leading-[18px]">
            {job}
          </p>
        </div>
        <div className="rounded-full overflow-hidden w-[62px] mx-auto mt-4 border-2 border-aqua">
          <Image
            width={62}
            height={62}
            src={img}
            alt="Avatar of the person that has left their review"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox