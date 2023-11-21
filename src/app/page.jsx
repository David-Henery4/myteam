import { Header, Services, Testimonials } from "@/components/home-page";
import { Cta } from "@/components/shared";


export default function Home() {
  return (
    <main className="grid grid-cols-mainGridMob mt-12">
      <Header />
      <Services/>
      <Testimonials/>
      <Cta/>
    </main>
  );
}
