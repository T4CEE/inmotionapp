import React from "react";
import { blogs } from "../Data/TeamData";
import { blogs2 } from "../Data/TeamData2";
import { blogs3 } from "../Data/TeamData3";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-primary pt-[70px] md:pt-[170px] p-3 md:pb-9 md:px-6 xl:px-14  text-accent font-[family-name:var(--font-NeueMontreal)]">
      <div className="text-[48px] md:text-[70px] text-start  pb-4 md:pb-0 pt-10 md:pt-5">
        <h1 className="text-[48px] md:text-[70px] text-start md:leading-[60px]">
          <span className="text-[#ff5700]">Our Team</span>{" "}
        </h1>
        <h1 className=" text-[20px] md:text-[25px] leading-[30px] md:pr-52 mt-9">
          At the heart of every great achievement lies a team that’s more than
          just a group of individuals—they are a unified force, driven by a
          shared vision for success. Our team is built on a foundation of
          collaboration, innovation, and unwavering commitment to excellence.
          Each member brings unique skills and perspectives, but together, we
          move forward with a singular focus: to push boundaries, overcome
          challenges, and deliver results that make a lasting impact. Our
          passion fuels us, our purpose guides us, and our dedication to success
          sets us apart.
        </h1>
      </div>
      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-wrap gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full md:h-[570px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{blog.author}</p>
                <p className="text-gray-600 mt-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="flex flex-col md:flex-row lg:flex-wrap gap-8">
          {blogs2.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full md:h-[570px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{blog.author}</p>
                <p className="text-gray-600 mt-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="flex flex-col md:flex-row lg:flex-wrap gap-8">
          {blogs3.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full md:h-[570px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2">{blog.author}</p>
                <p className="text-gray-600 mt-4">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
