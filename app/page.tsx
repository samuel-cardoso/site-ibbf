import Header from "@/Components/Header";
import Banner from "@/Components/BannerVideo";
import Contato from "@/Components/Contato";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <Contato/>
    </div>
  );
}
