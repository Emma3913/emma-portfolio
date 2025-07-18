import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import { About } from "./pages/About.jsx/About";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import { Hero } from "./pages/Hero/Hero";
import { Projects } from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <main>
        <ParticlesBackground />
        <div className="grid grid-cols-[54px_1fr]">
          <Navbar />
          <main>
            <Header />
            <div className="mx-auto max-w-5xl px-5 md:px-8 space-y-32 pb-24">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </div>
          </main>
        </div>
      </main>
    </>
  );
}

export default App;
