import { Benefits } from "@/components/landing/Benefits";
import { BentoIntro } from "@/components/landing/BentoIntro";
import { Contact } from "@/components/landing/Contact";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { StatementBand } from "@/components/landing/StatementBand";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Work } from "@/components/landing/Work";

function App() {
  return (
    <div className="dark min-h-svh bg-[#0a0a0a] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BentoIntro />
        <Services />
        <StatementBand />
        <Process />
        <Work />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
