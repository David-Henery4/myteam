import { AboutHeader, DirectorsSection } from "@/components/about";

const About = () => {
  return (
    <main className="grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab lgTab:grid-cols-mainGridLgTab">
      <AboutHeader/>
      <DirectorsSection/>
    </main>
  );
};

export default About;
