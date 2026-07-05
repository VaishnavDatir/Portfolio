import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechMarquee from "@/components/sections/TechMarquee";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
