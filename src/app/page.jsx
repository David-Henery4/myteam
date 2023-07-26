import { Header, Services, Testimonials } from "@/components/home-page";


export default function Home() {
  return (
    <main className="grid grid-cols-mainGridMob mt-12">
      <Header />
      <Services/>
      <Testimonials/>
    </main>
  );
}
