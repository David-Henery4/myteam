import { Header, Services } from "@/components/home-page";


export default function Home() {
  return (
    <main className="grid grid-cols-mainGridMob mt-12">
      <Header />
      <Services/>
    </main>
  );
}
