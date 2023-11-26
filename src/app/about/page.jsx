import { AboutHeader, DirectorsSection, ClientSection } from "@/components/about";
import { Cta } from "@/components/shared";

const About = () => {
  return (
    <main className="grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutHeader/>
      <DirectorsSection/>
      <ClientSection/>
      <Cta/>
    </main>
  );
};

export default About;
