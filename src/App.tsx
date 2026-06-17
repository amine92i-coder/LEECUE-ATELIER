import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Materials from "./components/Materials";
import Film from "./components/Film";
import Maker from "./components/Maker";
import JointCreations from "./components/JointCreations";
import Pricing from "./components/Pricing";
import Commission from "./components/Commission";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain-overlay relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Gallery />
        <Process />
        <Materials />
        <Film />
        <Maker />
        <JointCreations />
        <Pricing />
        <Commission />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
