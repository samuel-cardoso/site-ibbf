import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 space-y-10">
      <Navbar />
      <Hero />
    </div>
  );
}