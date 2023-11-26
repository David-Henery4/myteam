import { AboutHeader, DirectorsSection, ClientSection } from "@/components/about";

const About = () => {
  return (
    <main className="grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutHeader/>
      <DirectorsSection/>
      <ClientSection/>
    </main>
  );
};

export default About;
