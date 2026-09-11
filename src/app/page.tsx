import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Manifesto } from "@/components/Manifesto";
import { Records } from "@/components/Records";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Works />
        <Manifesto />
        <Records />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
