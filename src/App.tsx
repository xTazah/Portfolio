import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { InterestsSection } from "./components/InterestsSection";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative inset-0 bg-gray-100 dark:bg-[#14122a]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('/background.png')`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "contain",
            opacity: 0.2,
            filter: "blur(5px)",
          }}
        ></div>
        {/* <MapOverlay /> */}
        <NavBar />
        <AboutMe />
        <Work />
        <InterestsSection />
      </div>
    </BrowserRouter>
  );
};

export default App;
