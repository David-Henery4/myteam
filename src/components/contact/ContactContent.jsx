import { ContactText, ContactForm } from "./components";

const ContactContent = () => {
  // max-w-[1110px]
  return (
    <section className="w-full col-start-2 col-end-12 text-center mt-20 mb-[88px] flex flex-col justify-center items-center gap-14 max-w-[542px] mx-auto medTab:my-28 lgLap:max-w-[1110px] lgLap:flex-row lgLap:text-left lgLap:items-start lgLap:gap-28 lgLap:justify-between">
      {/* Text */}
      <ContactText />
      {/* Form */}
      <ContactForm />
    </section>
  );
};

export default ContactContent;
