import { ContactContent } from "@/components/contact";
import {ContactTwo, AboutPatternTwoContactOne} from "../../../public/assets"


const Contact = () => {
  return (
    <main className="relative overflow-hidden grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutPatternTwoContactOne className="hidden absolute top-[120px] -left-[100px] tab:block lgLap:-left-[150px] lgDesk:-left-[100px]"/>
      <ContactContent />
      <ContactTwo className="absolute -bottom-[100px] -right-[100px] tab:-bottom-0 lgLap:-right-[125px] lgDesk:-right-[100px]"/>
    </main>
  );
};

export default Contact;
