import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutAI from "@/components/AboutAI";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AboutAI />
      <Services />
      <UseCases />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
