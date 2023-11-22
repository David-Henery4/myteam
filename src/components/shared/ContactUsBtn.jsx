import Link from "next/link";

const ContactUsBtn = ({ isCta }) => {
  return (
    <Link
      href="/contact"
      className={`text-lg font-semibold leading-7 rounded-3xl border-2 px-7 py-3 ${
        isCta
          ? "border-secondaryDarkVeryGreen hover:bg-secondaryDarkVeryGreen hover:text-white active:text-secondaryDarkVeryGreen active:bg-opacity-0 tab:flex-1"
          : "text-white border-white hover:bg-white hover:text-black active:bg-opacity-0 active:text-white"
      }`}
    >
      Contact Us
    </Link>
  );
};

export default ContactUsBtn;
