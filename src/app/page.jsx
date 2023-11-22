import { Header, Services, Testimonials } from "@/components/home-page";
import { Cta} from "@/components/shared";


export default function Home() {
  return (
    <main className="grid grid-cols-mainGridMob xtraSmTab:grid-cols-mainGridTab">
      <Header />
      <Services />
      <Testimonials />
      <Cta />
    </main>
  );
}
