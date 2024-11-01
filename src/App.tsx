import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import { ThemeSwitcher } from "./components/ThemeSwitcher";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar isBordered >
          <NavbarBrand>
            {/* ToDo: Logo einfügen */}
            <p className="font-bold text-inherit">FK</p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-12" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#AboutMe">
                About me
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
            {/* ToDo Change color depending on is active */}
              <Link color="secondary" href="#Work"> 
                Work
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#Projects">
                Projects
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white drop-shadow-lg" startContent={<ArrowDownTrayIcon className="w-5 h-6"/>}>
      Download CV
    </Button>
    <ArrowDownTrayIcon/>
      </>
    </BrowserRouter>
  );
};

export default App;
