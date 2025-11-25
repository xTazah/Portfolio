import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { InterestsSection } from "./components/InterestsSection";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-background">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "contain",
            filter: "blur(3px)",
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <NavBar />
          <main className="pt-16">
            <AboutMe />
            <Work />
            <Projects />
            <InterestsSection />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
