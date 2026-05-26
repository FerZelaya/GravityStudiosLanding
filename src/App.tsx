import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Clients } from "@/components/landing/Clients";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";

function App() {
  return (
    <div className="bg-background text-foreground min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
