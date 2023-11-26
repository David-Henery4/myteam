import { ContactContent } from "@/components/contact";

const Contact = () => {
  return (
    <main className="relative grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <ContactContent />
    </main>
  );
};

export default Contact;
