import Header from "@/components/Header";
import Banner from "@/components/BannerVideo";
import Contato from "@/components/Contato";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 space-y-10">
      <Header />
      <Banner />
      <Sobre/>
      <Contato/>
    </div>
  );
}
