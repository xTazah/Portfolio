import { BrowserRouter } from "react-router-dom";
import {
  Button,
} from "@nextui-org/react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import { NavBar } from "./components/NavBar";
import { AboutMe } from "./components/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-gray-900">
        <NavBar/>
        <AboutMe/>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white drop-shadow-lg" startContent={<ArrowDownTrayIcon className="w-5 h-6"/>}>
          Download CV
        </Button>
        <ArrowDownTrayIcon/>
      </div>
    </BrowserRouter>
  );
};

export default App;
