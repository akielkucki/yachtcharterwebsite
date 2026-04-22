import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SignatureIntro from "./components/SignatureIntro";
import Fleet from "./components/Fleet";
import Destinations from "./components/Destinations";
import Experiences from "./components/Experiences";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Journal from "./components/Journal";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import {LanguageProvider} from "@/app/hooks/language";

export default function Home() {
  return (
    <>
        <LanguageProvider>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SignatureIntro />
        <Fleet />
        <Destinations />
        <Experiences />
        <WhyChooseUs />
        <Testimonials />
        <Journal />
        <FinalCTA />
      </main>
      <Footer />
        </LanguageProvider>
    </>
  );
}
