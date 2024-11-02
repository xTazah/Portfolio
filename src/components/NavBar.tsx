import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
  } from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";



export const NavBar = () => {
    return (
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
        </Navbar>)
}