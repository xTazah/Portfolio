import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button, Tooltip } from "@nextui-org/react";

// TODO: Set to true when light mode is ready
const LIGHT_MODE_ENABLED = false;

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (!LIGHT_MODE_ENABLED) return true; // Force dark mode when disabled
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference
      ? JSON.parse(storedPreference)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (!LIGHT_MODE_ENABLED) return; // Skip listener when disabled
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

  const toggleDarkMode = () => {
    if (LIGHT_MODE_ENABLED) {
      setDarkMode(!darkMode);
    }
  };

  return (
    <Tooltip
      showArrow={true}
      placement="bottom-end"
      content={
        <div className="text-small">
          {LIGHT_MODE_ENABLED
            ? `Switch to ${!darkMode ? "Dark" : "Light"} Mode`
            : "Light mode is not supported right now"}
        </div>
      }
    >
      <Button
        isIconOnly
        onClick={toggleDarkMode}
        color="secondary"
        aria-label="Toggle theme"
        className={!LIGHT_MODE_ENABLED ? "cursor-not-allowed opacity-70" : ""}
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
