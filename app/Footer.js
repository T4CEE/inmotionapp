"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import axios from "axios";
import "./globals.css";

//icons
import { GrInstagram } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({ email: "" });

  const resetForm = () => {
    setFormData({ email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/subscribe",
    //     formData
    //   );
    //   setMessage({ text: `${response.data.message}`, type: "success" });
    //   resetForm();
    // } catch (error) {
    //   console.error("Subscription error:", error);
    //   setMessage({ text: `${error.message} Email error`, type: "error" });
    // }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-full h-full font-[family-name:var(--font-NeueMontreal)]">
      {message && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <div className="flex flex-col bg-[#1C1C1C] px-3 md:px-10 pt-14 pb-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row md:w-full xl:w-[50%] md:border-r border-yellow-50">
            <h1 className="text-start text-[40px] lg:text-[50px] xl:text-[65px] w-[390px] h-[115px] md:hidden lg:block lg:w-[400px] xl:w-[700px] md:h-[100px] leading-[40px] md:leading-[80px] text-white">
              Ready to work <br />
              <span className="text-[#ff5700]">with us?</span>
            </h1>
            <Link className="mt-auto" href="/contact">
              <button class=" bg-[#1C1C1C] h-[50px] md:h-[70px] w-[150px] md:w-[200px]  mb-9 ml-[190px] md:ml-0 text-[20px] text-[#ff5700] border-[#ff5700] rounded-none">
                <span>Sync In</span>
              </button>
            </Link>
          </div>
          <div className="md:w-[50%]">
            <button className=" bg-[#1C1C1C] border-white h-[50px] md:h-[70px] w-[150px] md:w-[200px] text-[20px] text-white rounded-none">
              Not Yet?
            </button>
            <h1 className="md:text-center md:ml-[50px] leading-[40px] md:leading-[45px] mt-2 w-[390px] h-[115px] md:w-[450px] xl:w-[700px] md:h-[100px] text-[40px] text-white">
              Subscribe to <span className="text-[#ff5700]">newsletter</span>{" "}
              for latest updates
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex justify-between mt-2 md:ml-[190px] mx-auto w-[280px] md:w-[300px] xl:w-[350px] bg-white py-1 px-[3px] rounded-[8px]"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-[35px] w-[170px] md:w-full rounded-md text-[#222222] pl-4 placeholder:text-black placeholder:text-[12px] inset-0 border-white bg-white focus:bg-white focus:outline-none focus:border-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2 text-white text-[9px] md:text-[12px] w-[100px] md:w-[140px] rounded-[8px] bg-gradient-to-r from-[#ff5700] to-[#1C1C1C]"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-10 bg-[#1C1C1C] border-dashed border-t">
        <div className="flex w-full md:w-[50%]">
          <div className="ml-3 md:ml-14 h-full w-[30%] md:w-[20%]">
            <ul className="text-white md:leading-[50px] text-[23px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/project">Projects</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="h-full w-[30%] md:w-[50%]">
            <ul className="text-white ml-[55px] md:ml-[190px] md:leading-[50px] text-[23px]">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
            </ul>
            <div className="block md:hidden ml-[145px]">
              <div className="flex text-[#ff5700] space-x-2 mt-10 justify-end">
                <a
                  target="blank"
                  href="https://www.instagram.com/inmotionng/?igsh=MXAxaTRqZTd2amVwdQ%3D%3D"
                  aria-label="visit our instagram page"
                >
                  <GrInstagram />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/in-motionng/"
                  aria-label="visit our LinkedIn page"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="blank"
                  href="https://web.facebook.com/inmotionbusiness?_rdc=1&_rdr"
                  aria-label="visit our facebook page"
                >
                  <AiFillFacebook />
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/@in-motion_ng"
                  aria-label="visit our youtube page"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex ml-3 md:ml-0 mt-9 md:mt-0">
          <div className="text-white w-[50%]">
            <h1 className="text-[#ff5700] text-[25px]">Let's Build!</h1>
            <h1>
              <a href="mailto:Info@in-motion.ng">Info@in-motion.ng</a>
            </h1>
            <div className="hidden md:block">
              <div className="flex text-[#ff5700] space-x-2 mt-20">
                <a
                  target="blank"
                  href="https://www.instagram.com/inmotionng/?igsh=MXAxaTRqZTd2amVwdQ%3D%3D"
                  aria-label="visit our instagram page"
                >
                  <GrInstagram className="text-[30px]" />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/in-motionng/"
                  aria-label="visit our LinkedIn page"
                >
                  <FaLinkedin className="text-[30px]" />
                </a>
                <a
                  target="blank"
                  href="https://web.facebook.com/inmotionbusiness?_rdc=1&_rdr"
                  aria-label="visit our Facebook page"
                >
                  <AiFillFacebook className="text-[30px]" />
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/@in-motion_ng"
                  aria-label="visit our Youtube page"
                >
                  <FaYoutube className="text-[30px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="ml-[40px] md:ml-[220px] text-white">
            <h1 className="text-[#ff5700] text-[25px]">Head Office</h1>
            <h1>Uyo, Akwa Ibom</h1>
            <h1>5 Clement Isong Avenue Ring Road 3, 520102</h1>
            <h1>Nigeria</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
