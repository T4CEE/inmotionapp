import React from "react";
import Link from "next/link";

//icons
import { SlEnergy } from "react-icons/sl";
import { FaHandshake, FaUserShield } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

//imgs
import wana from "../assets/Photos/wanawht.png";
import urbanlogo from "../assets/Photos/urbanwht.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="font-[family-name:var(--font-NeueMontreal)]">
      <div className="bg-primary text-accent min-h-screen pt-[70px] md:pt-[170px] px-3 md:px-14">
        <div className="text-[48px] md:text-[70px] text-start  pb-4 md:pb-0 pt-6 md:pt-5   ">
          <h1 className="text-[48px] md:text-[70px] text-start text-[#ff5700] md:leading-[60px]">
            Who We Are
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:mt-9">
          <div className="md:w-[70%]">
            <h1 className=" text-[20px] md:text-[25px] leading-[30px] md:pr-10 xl:pr-36">
              We are people-smart, passionate, and enthusiastic about creating
              innovative solutions and platforms to solve Africa's challenges.
              Our mission is to harness the power of technology, creativity, and
              collaboration to address the unique needs of communities across
              the continent. From empowering local businesses to fostering
              education and bridging the digital divide, we are committed to
              driving positive change that uplifts lives and transforms futures.
              We believe in Africa's potential and are dedicated to building
              sustainable solutions that not only solve present challenges but
              also pave the way for future generations to thrive. Together, we
              are shaping a brighter, more innovative future for Africa
            </h1>
          </div>
          <div className="flex flex-col md:w-[40%] mt-9 md:mt-0 text-[40px] md:text-[55px] tracking-[1px] leading-[40px]  md:leading-[60px]">
            <h1 className="">
              We're building <br />{" "}
              <span className="md:text-[80px] text-[#ff5700] font-bold">
                100,000
              </span>{" "}
              <br /> Sustainable <br /> Housing Units <br /> by Year 2030
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row mb-14">
          <div className="flex flex-col md:w-[70%]">
            <div className="text-[48px] md:text-[70px] text-start  pb-4 md:pb-0 pt-6 md:pt-5">
              <h1 className="text-[48px] md:text-[70px] text-start text-[#ff5700] md:leading-[60px]">
                Our Vision
              </h1>
              <h1 className=" text-[20px] md:text-[25px] leading-[30px] md:mt-9 pr-10 xl:pr-36">
                To become a global leader in building sustainable,
                technology-enhanced, profitable, and accessible real estate
                across the world. We aim to redefine the real estate industry by
                integrating cutting-edge technologies, prioritizing
                environmental responsibility, and ensuring affordability for
                all. By focusing on innovation and sustainability, we strive to
                create spaces that not only meet the needs of today but are
                adaptable for the future, empowering communities and driving
                economic growth on a global scale.
              </h1>
            </div>
            <div className="text-[48px] md:text-[70px] text-start  pb-4 md:pb-0 md:pt-20   ">
              <h1 className="text-[48px] md:text-[70px] text-start text-[#ff5700] md:leading-[60px]">
                Our Mission
              </h1>
              <h1 className=" text-[20px] md:text-[25px] leading-[30px] md:mt-9 md:pr-10 xl:pr-36">
                To deliver quality, innovative, sustainable, and profitable
                housing that meets the diverse needs of communities around the
                world. We are committed to creating homes that enhance the
                quality of life, while utilizing cutting-edge technology and
                eco-friendly practices to ensure long-term value and
                environmental stewardship. Our focus is on providing solutions
                that balance affordability, sustainability, and profitability,
                making housing accessible for all
              </h1>
            </div>
          </div>
          <div className="md:w-[40%] mt-9 md:mt-20">
            <div className="flex-col space-y-2 ">
              <div className="flex space-x-4 md:space-x-0">
                <div>
                  <SlEnergy className="text-[90px] text-[#ff5700] my-4" />
                  <h1 className="text-accent text-[25px] font-bold"> Energy</h1>
                  <h1>
                    Our workforce is made up of young vibrant and talented
                    personnel, ever ready to serve
                  </h1>
                </div>
                <div>
                  <FaHandshake className="text-[90px] text-[#ff5700] my-4" />
                  <h1 className="text-accent text-[25px] font-bold">
                    Professionalism
                  </h1>
                  <h1>
                    Our members of staff are well trained and skilled in their
                    various fields, guaranteeing excellence in all we do
                  </h1>
                </div>
              </div>
              <div className="flex space-x-4 md:space-x-0">
                <div>
                  <HiLightBulb className="text-[90px] text-[#ff5700] my-4" />
                  <h1 className="text-accent text-[25px] font-bold">
                    Innovation
                  </h1>
                  <h1>
                    We prioritize technology in all our decision making either
                    in properties we develop or broker with the future in mind
                  </h1>
                </div>
                <div>
                  <FaUserShield className="text-[90px] text-[#ff5700] my-4" />
                  <h1 className="text-accent text-[25px] font-bold">
                    Integrity
                  </h1>
                  <h1>
                    On the quest to serve you, our firmness on measurable value,
                    quality and class can never be sacrificed
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C1C1C] py-4 text-center mb-3">
        <h1 className="text-white text-[30px] md:text-[40px] font-bold ml-3 md:ml-0">
          Our Projects
        </h1>
        <div className="flex bg-[#1C1C1C] space-x-[25px] md:space-x-0  md:px-20 justify-center py-3 md:py-0 md:h-[200px]">
          <Link href="/project/wana-court-estate">
            <div className="mt-8 md:mt-12 border-r md:pr-12 md:mr-12">
              <Image
                src={wana}
                alt="Profile"
                className=" w-[100px] md:w-[200px] object-contain mr-5 md:mr-0"
              />
            </div>
          </Link>
          <Link href="/project/urban-estate">
            <Image
              src={urbanlogo}
              alt="Profile"
              className=" w-[100px] md:w-[200px]  object-contain mt-7"
            />
          </Link>
        </div>
        <Link href="/project">
          <h1 className="text-white text-[15px] md:text-[25px] font-bold  mx-auto ">
            Click here to see more projects
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
