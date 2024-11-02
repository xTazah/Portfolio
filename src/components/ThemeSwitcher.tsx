import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button, Tooltip } from "@nextui-org/react";



export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Tooltip showArrow={true}
    placement="bottom-end"
      content={
          <div className="text-small">Switch to {!darkMode ? "Dark" : "Light" } Mode</div>
      }
    >
      <Button isIconOnly 
        onClick={toggleDarkMode} color="secondary"
        aria-label="Toggle theme"
        >
        {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </Button>
    </Tooltip>    
  );
};
