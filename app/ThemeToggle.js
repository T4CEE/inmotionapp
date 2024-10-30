// ThemeToggle.js
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className={`bg-${theme}.background text-${theme}.text min-h-screen flex items-center justify-center`}
    >
      <div>
        <h1 className={`text-2xl text-${theme}.primary`}>
          Custom Theme Toggle
        </h1>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onClick={toggleTheme}
          className={`mt-4 bg-${theme}.primary text-white px-4 py-2 rounded`}
        >
          Toggle Theme
        </input>
      </div>
    </div>
  );
};

export default ThemeToggle;
