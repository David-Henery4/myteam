import { ContactText, ContactForm } from "./components";

const ContactContent = () => {
  return (
    <section className="col-start-2 col-end-12 text-center mt-20 mb-[88px] flex flex-col justify-center items-center gap-14 max-w-[1110px] mx-auto">
      {/* Text */}
      <ContactText/>
      {/* Form */}
      <ContactForm/>
    </section>
  );
};

export default ContactContent;
