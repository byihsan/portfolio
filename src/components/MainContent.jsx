import Hero from "./components2/Hero";
import Portfolio from "./components2/Portfolio";
import WhyChooseMe from "./components2/WhyChooseMe";
import Pricing from "./components2/Pricing";
import Contact from "./components2/Contact";
import Footer from "./components2/Footer";

export default function MainContent() {
  return (
    <main id="main-div">
      <Hero />
      <Portfolio />
      <WhyChooseMe />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
