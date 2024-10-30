"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import Link from "next/link";
import { blogPosts } from "@/app/Data/BlogData";

import axios from "axios";

export default function BlogPost({ params }) {
  const router = useRouter();
  const postId = parseInt(params.id);
  const post = blogPosts.find((post) => post.id === postId);
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({ email: "" });

  const prevPost = blogPosts.find((p) => p.id === postId - 1);
  const nextPost = blogPosts.find((p) => p.id === postId + 1);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!post) {
    return <div>Post not found</div>;
  }

  const resetForm = () => {
    setFormData({ email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://in-motion-website.vercel.app/api/subscribe",
        formData
      );
      setMessage({ text: `${response.data.message}`, type: "success" });
      resetForm();
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage({ text: "Email already subscribed", type: "error" });
    }
  };

  return (
    <div className="container mx-auto p-4 pt-32 md:pt-44 font-[family-name:var(--font-NeueMontreal)]">
      {message && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <h1 className="text-[20px] text-gray-500">
        Published {post.date} -{" "}
        <span className="text-blue-600">{post.read}</span>
      </h1>
      <h1 className="text-[40px] md:text-[80px] md:pr-[400px] leading-[40px] md:leading-[80px] font-bold mb-4  mt-4 ">
        {post.title}
      </h1>
      <h1 className="my-6 md:my-14 text-[16px] md:text-[20px] md:pr-[400px]">
        {post.text1}
      </h1>
      <div className="flex w-full justify-center">
        <Image
          className="w-full object-center rounded-[25px] md:rounded-[40px] md:h-[700px]"
          src={post.imageUrl}
          alt={post.title}
        />
      </div>
      <div className=" border-b pb-10 md:pb-20">
        <h1 className="my-10 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.headings}
        </h1>
        <h1 className="md:mt-14 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight}
        </h1>
        <h1 className="mt-5 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text2}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight2}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text3}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text4}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight3}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text5}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight4}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text5}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text6}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text7}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight5}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text8}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlight6}
        </h1>
        <h1 className="my-10 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.heading1}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlighted1}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text9}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text10}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {post.highlighted2}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text11}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text12}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {" "}
          {post.highlighted3}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text13}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text14}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text15}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {" "}
          {post.highlighted4}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text16}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {" "}
          {post.highlighted5}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text17}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text18}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {" "}
          {post.highlighted6}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text19}
        </h1>
        <h1 className="my-5 text-[16px] md:text-[20px] md:pr-[100px] font-bold ">
          {" "}
          {post.highlighted7}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text18}
        </h1>
        <h1 className="my-2 text-[16px] md:text-[20px] md:pr-[100px]">
          {post.text19}
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-start pb-9">
        <div className="md:w-[45%]">
          <h1 className=" font-bold text-[38px] md:text-[30px] text-[#ff5700] mt-10 md:mt-10 mb-2 md:mb-3 leading-[35px]">
            Subscribe for latest updates
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between w-[280px] md:w-[300px] xl:w-[350px] bg-white py-1 px-[3px] rounded-[8px]"
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
              Sign Up
            </button>
          </form>
          <h1 className="text-[16px] md:text-[20px] mt-3">
            We respect your privacy,{" "}
            <span className="text-[#ff5700] text-[24px]"> Thank you!</span>
          </h1>
        </div>
        <div className="flex md:w-[60%] mx-auto md:mx-0 mt-9 md:my-auto space-x-5">
          <button
            onClick={() => prevPost && router.push(`/blog/${prevPost.id}`)}
            disabled={!prevPost}
            className={`btn dark:bg-light-secondary  bg-[#1C1C1C] p-3 rounded-lg text-white dark:text-black ${
              !prevPost ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous Post
          </button>
          <button
            onClick={() => nextPost && router.push(`/blog/${nextPost.id}`)}
            disabled={!nextPost}
            className={`btn dark:bg-light-secondary  bg-[#1C1C1C] p-3 rounded-lg text-white dark:text-black ${
              !nextPost ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next Post
          </button>
        </div>
      </div>
    </div>
  );
}
