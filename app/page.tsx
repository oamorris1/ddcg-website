import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <RevealProvider>
        <main>
          <Hero />
          <StatsBar />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </RevealProvider>
    </>
  );
}
