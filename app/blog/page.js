import React from "react";
import Link from "next/link";
import { blogPosts } from "@/app/Data/BlogData";
// import FourPoint from "../assets/Photos/fourpoint.jpg";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="bg-primary text-accent min-h-screen pt-[70px] md:pt-[170px] px-3 md:px-6 xl:px-14 font-[family-name:var(--font-NeueMontreal)]">
      <h1 className="text-[48px] md:text-[70px] text-start pb-4">
        Get Updates on our latest blogs
      </h1>

      <section className="container md:py-10 w-full ">
        <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:gap-6 xl:gap-14">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-info w-full md:w-[650px] h-full md:h-[690px] shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h2
                  className={`text-2xl font-semibold text-accent hover:text-blue-600 transition-colors duration-200`}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{post.date}</p>
                <p className="text-accent mt-4 whitespace-normal md:truncate xl:whitespace-normal">
                  {post.description}
                </p>
                <Link href={`/blog/${post.id}`}>
                  <button className="btn mt-8 dark:bg-light-secondary  bg-[#1C1C1C] p-3 rounded-lg text-white dark:text-black">
                    <span className="font-bold">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
