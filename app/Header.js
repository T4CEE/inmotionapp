"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./assets/Photos/inmotioncol.png";
import { TypeAnimation } from "react-type-animation";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [active, setActive] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
        setActive(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-[#ff5700]  font-bold " : "hover:text-gray-600";

  const headerClass =
    theme === "dark" ? "bg-secondary text-white" : "bg-primary text-black";

  return (
    <div
      className={`flex z-50 fixed w-full h-20 md:h-24 bg-light-primary dark:bg-dark-primary md:justify-between items-center p-0 md:p-6 px-0 xl:px-7 ${headerClass} font-[family-name:var(--font-NeueMontreal)]`}
    >
      <Link href="/">
        <Image
          rel="preload"
          fetchPriority="high"
          src={Logo}
          className="h-12 md:h-10 w-[100px] md:w-[100px] object-contain my-auto ml-3 md:ml-0"
          alt="In Motion Logo"
        />
      </Link>

      <div
        className="relative ml-auto mr-3  block md:hidden"
        id="dropdownButton"
        ref={dropdownRef}
      >
        <div onClick={toggleDropDown}>
          <GiHamburgerMenu className="text-[#ff5700] block md:hidden my-auto text-[40px]" />
        </div>
        {isDropdownVisible && (
          <div className="absolute text-[#1C1C1C] bg-primary p-5 top-[60px] right-[-11px] w-[100vw] h-[100vh]">
            <ul className="flex flex-col space-y-4 text-accent  text-[25px] font-bold hover:cursor-pointer hover:underline">
              <Link href="/" onClick={toggleDropDown}>
                Home
              </Link>
              <Link href="/project" onClick={toggleDropDown}>
                Projects
              </Link>
              <Link href="/blog" onClick={toggleDropDown}>
                Blog
              </Link>
              <Link href="/about" onClick={toggleDropDown}>
                About
              </Link>
              <Link href="/contact" onClick={toggleDropDown}>
                Contact
              </Link>
              <Link href="/team" onClick={toggleDropDown}>
                Team
              </Link>
              <input
                onClick={toggleTheme}
                type="checkbox"
                className="toggle ml-[305px] md:ml-[400px] xl:ml-9"
                checked={theme === "dark"}
              />
            </ul>
          </div>
        )}
      </div>

      <nav className=" space-x-9 xl:space-x-10 text-[20px] hidden md:block">
        <Link href="/" className={navLinkClass}>
          Home
        </Link>
        <Link href="/project" className={navLinkClass}>
          Projects
        </Link>
        <Link href="/blog" className={navLinkClass}>
          Blog
        </Link>
        <Link href="/about" className={navLinkClass}>
          About
        </Link>
        <Link href="/contact" className={navLinkClass}>
          Contact
        </Link>
        <Link href="/team" className={navLinkClass}>
          Team
        </Link>
      </nav>

      <input
        onClick={toggleTheme}
        type="checkbox"
        className="toggle xl:ml-9 hidden md:block"
        checked={theme === "dark"}
      />

      <div className="hidden xl:block w-[250px]">
        <div className="flex flex-col">
          <h1
            style={{ fontFamily: "Neue-Montreal-Italic" }}
            className=" text-[#ff5700] text-[28px] leading-[20px] font-bold hidden xl:block"
          >
            30% discount Sales
          </h1>
          <div className="w-full h-full">
            <TypeAnimation
              sequence={[
                "Ongoing... ↘",
                1000,
                "WE BUILD... ↘",
                500,
                "YOU GAIN... ↘",
                500,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontFamily: "Neue-Montreal-Bold-Italic" }}
              className=" text-[#ff5700] text-[22px] w-full h-full leading-[15px]"
            />
          </div>
          <Link href="/">
            <button className=" bg-[#1C1C1C] rounded-none text-white w-[90px] h-[10px] p-2 ml-[100px] font-bold text-[18px]">
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
