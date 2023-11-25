import Image from "next/image";
import { HeadingThree } from "../shared";
import { CrossIcon } from "../../../public/assets";

const DirectorsBox = ({id, img, role, name}) => {
  return (
    <div key={id} className="grid grid-rows-directorsBox">

      <div className="bg-secondaryDarkVeryGreen pt-8 px-6 pb-14 row-start-1 row-end-3 col-start-1 col-end-2 flex flex-col justify-center items-center gap-4">
        <div className="h-24 w-24 rounded-full overflow-hidden">
          <Image src={img} alt="Headshot of director" />
        </div>
        <div>
          <HeadingThree>
            <span className="text-secondaryLightBlue">{name}</span>
          </HeadingThree>
          <p>{role}</p>
        </div>
      </div>

      {/* Icon */}
      <div className="p-5 bg-primaryRed rounded-full grid place-items-center col-start-1 col-end-2 row-start-2 row-end-4 justify-self-center hover:cursor-pointer">
        <CrossIcon />
      </div>

    </div>
  );
}

export default DirectorsBox