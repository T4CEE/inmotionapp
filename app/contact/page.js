"use client";
import React, { useEffect, useState } from "react";
import Discount from "../assets/Photos/gain.png";
import "./styles.css";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      location,
      message,
    };

    try {
      const response = await fetch("http://in-motion-web/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage({
          text: "Email sent successfully!",
          type: "success",
        });
      } else {
        setResponseMessage({ text: "Failed to send email.", type: "error" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("An error occurred.");
    }
  };

  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [responseMessage]);

  return (
    <div className="bg-primary pt-[70px] md:pt-[170px] p-3 md:pb-9 md:px-14 text-accent font-[family-name:var(--font-NeueMontreal)]">
      {responseMessage && (
        <div className={`message ${responseMessage.type}`}>
          {responseMessage.text}
        </div>
      )}

      <div className="text-[48px] md:text-[70px] text-start  pb-4 md:pb-0 pt-10 md:pt-5   ">
        <div className="flex flex-col md:flex-row justify-between">
          <h1 className="text-[48px] md:text-[70px] text-start md:leading-[60px]">
            <span className="text-[#ff5700]">Contact Us</span>{" "}
          </h1>
          <h1 className=" underline text-[30px]" title="number">
            <a
              href="mailto:Info@in-motion.ng"
              aria-label="get in-touch with us on email"
            >
              Info@in-motion.ng
            </a>
          </h1>
        </div>
        <h1 className=" text-[20px] md:text-[25px] leading-[30px] w-full h-full md:pr-32 xl:pr-64 mt-9">
          We're here for you whenever you need us! Our dedicated team is ready
          to assist with any questions, inquiries, or support you may need.
          Whether it's resolving an issue or providing guidance, our call lines
          are always open and available, ensuring that help is just a phone call
          away. Don’t hesitate to reach out—your satisfaction is our priority,
          and we’re committed to providing prompt, reliable service whenever you
          need it. We're just one call away from helping you!
        </h1>
      </div>
      <div className="flex flex-col md:flex-row bg-info shadow-lg rounded-lg overflow-hidden w-full mt-9">
        <div className="md:w-1/2">
          <Image
            src={Discount}
            alt="Contact"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4 md:p-8 md:w-1/2 flex flex-col justify-center ">
          <h2 className="text-[25px] md:text-3xl font-bold text-accent mb-4">
            Join Ongoing <span className="text-[#ff5700]">30%</span> Discount
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-accent">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border-[1px] border-gray-200 text-accent bg-warning rounded-md shadow-sm sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-accent">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border-[1px] border-gray-200 text-accent bg-warning rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-accent">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
                className="mt-1 block w-full px-4 py-2 border border-gray-200 text-accent bg-warning rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-accent">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-200 text-accent bg-warning rounded-md shadow-sm sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-[#1C1C1C] rounded-md shadow-md "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
