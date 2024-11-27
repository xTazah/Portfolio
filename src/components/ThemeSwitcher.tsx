import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button, Tooltip } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference
      ? JSON.parse(storedPreference)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) =>
      setDarkMode(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Tooltip
      showArrow={true}
      placement="bottom-end"
      content={
        <div className="text-small">
          Switch to {!darkMode ? "Dark" : "Light"} Mode
        </div>
      }
    >
      <Button
        isIconOnly
        onClick={toggleDarkMode}
        color="secondary"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </Button>
    </Tooltip>
  );
};
