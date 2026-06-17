import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Manifesto from "../components/Manifesto";
import Gallery from "../components/Gallery";
import Process from "../components/Process";
import Materials from "../components/Materials";
import Film from "../components/Film";
import Maker from "../components/Maker";
import JointCreations from "../components/JointCreations";
import Pricing from "../components/Pricing";
import Commission from "../components/Commission";
import Faq from "../components/Faq";

export default function Home() {
  return (
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
  );
}
