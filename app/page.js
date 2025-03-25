import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
export default function Home() {
  return (
      <div className="text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900 w-full ">
          <div className="custom-container mx-auto ">
              <Navbar/>
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Project />
              <Contact />
          </div>

      </div>
  );
}
