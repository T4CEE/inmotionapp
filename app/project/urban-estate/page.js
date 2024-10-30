"use client";
import VideoViewer from "@/app/VideoViewer";

//img
import urbanhouseproject from "@/app/assets/Photos/GATE.jpg";
import urbanlogocol from "@/app/assets/Photos/urbanblk.png";
import urbanhouse from "@/app/assets/Photos/urbannbg.png";
import urbanhouse2 from "@/app/assets/Photos/UMSEMIDETACHED.jpeg";
import urbanhouse3 from "@/app/assets/Photos/Aerial.jpg";

//icons
import {
  GiGate,
  GiDoubleStreetLights,
  GiJumpingDog,
  GiCrossroad,
} from "react-icons/gi";
import { BiCctv } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineSecurity } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { BsSignpost2 } from "react-icons/bs";
import UrbanPricingTable from "@/app/UrbanPricingTable";
// import MapComponent from "@/app/Map";
import Image from "next/image";

// const MapComponent = lazy(() => import('./Map'));

const UrbanProject = () => {
  return (
    <div className="font-[family-name:var(--font-NeueMontreal)]">
      <div className="relative">
        <div className="absolute top-[100px] md:top-[150px] left-[130px] md:left-[400px] xl:left-[550px] z-30 dark:z-30">
          <Image
            className="h-[60px] md:h-[140px] w-[150px] md:w-[300px] "
            src={urbanlogocol}
            alt=" Urban Logo"
          />
        </div>
      </div>
      <div className="w-full pt-16 md:pt-24">
        <Image
          src={urbanhouseproject}
          alt="Profile"
          className=" w-full h-full md:h-[700px] object-contain md:object-fill opacity-60"
        />
      </div>
      <div className="bg-primary pt-[10px] md:pt-[60px] p-3 md:px-14 text-accent ">
        <div className="text-[48px] md:text-[70px] text-start  pb-2 md:pb-0 pt-10 md:pt-5   ">
          <h1 className=" text-[48px] md:text-[70px] md:text-center leading-[53px] md:leading-[60px]">
            Deep dive into{" "}
            <span className="text-[#014239] dark:text-[#12BE08]"></span>
          </h1>
          <h1 className="text-[48px] md:text-[70px] md:text-center leading-[40px] md:leading-[60px] ">
            <span className="text-[#014239] dark:text-[#12BE08]">
              Urban Mark Estate
            </span>{" "}
          </h1>
        </div>
        <h1 className="text-[17px] md:text-[23px] leading-[25px] mb-[40px] md:mx-[140px] xl:mx-[350px] md:text-center mt-1 md:mt-3">
          We believe everyone deserves a chance to build the home they have
          always envisioned. That’s why we created a community that encourages
          creativity and self-expression.
        </h1>
        <VideoViewer videoId="QmcBdtxExtI" />

        <div className=" text-start py-5 mt-0 md:pt-14 md:my-0 md:mb-9">
          <h1 className=" font-bold text-[38px] md:text-[50px] text-[#014239] dark:text-[#12BE08] w-full h-full ">
            Why Urban Mark?
          </h1>
          <h1 className=" text-[17px] md:text-[25px] leading-[25px] w-full h-full md:pr-52">
            Our estate is more than just a place to live; it’s a location that
            speaks to your desire for rest, peace, and comfort, with modern
            living systems and architectural flexibility.
          </h1>
          <h1 className=" text-[17px] md:text-[25px] leading-[25px] w-full h-full md:pr-52 mt-3">
            We’ve designed a ‘Build Your Dream’ community where you can bring
            your childhood and adult fantasies to life. Imagine waking up daily
            in a home designed and built to fit your unique personality and
            lifestyle. That’s the kind of life Urban Mark Estate offers.
          </h1>
        </div>
        <div className="flex w-full gap-x-3 md:gap-x-9">
          <div className="w-full md:w-[80%] border-[3px] border-white">
            <Image
              src={urbanhouse}
              alt="Profile"
              className="bg-secondary h-[172px] xl:h-[650px] w-full md:w-full object-contain"
            />
          </div>
          <div className="w-[40%] space-y-1 md:space-y-4 ">
            <div className="border-[3px] border-white">
              <Image
                src={urbanhouse2}
                alt="Profile"
                className=" md:my-9 h-[80px] md:h-[50%] w-full md:w-[650px] object-contain"
              />
            </div>
            <div className="border-[3px] border-white">
              <Image
                src={urbanhouse3}
                alt="Profile"
                className="md:my-9 w-full md:w-[650px] h-[80px] md:h-[50%] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 md:mt-7">
          <a
            href="/URBANMARKBROCHURE.pdf"
            aria-label="download our brochure"
            download
          >
            Download Brochure
          </a>
        </div>
        <h1 className=" font-bold text-[38px] md:text-[50px] text-center text-[#014239] dark:text-[#12BE08] mt-5 md:mt-24">
          Estate Features
        </h1>
        <div className="hidden md:block mt-3 md:mt-10 text-center">
          <div className="flex-col md:space-y-10">
            <div className="flex space-x-24 xl:space-x-36 mx-auto">
              <div>
                <GiGate className="text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Gated Community
                </h1>
              </div>
              <div>
                <BiCctv className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  24hrs CCtv
                </h1>
              </div>

              <div>
                <CgGym className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Gym
                </h1>
              </div>
              <div>
                <GiDoubleStreetLights className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Street Lights
                </h1>
              </div>

              <div className="">
                <TiShoppingCart className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Commercial Area
                </h1>
              </div>
            </div>
            <div className="flex space-x-[80px] xl:space-x-[120px] mx-auto ">
              <div>
                <BsSignpost2 className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Recreational Areas
                </h1>
              </div>
              <div>
                <GiJumpingDog className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Walk Park
                </h1>
              </div>

              <div>
                <MdOutlineSecurity className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  24hrs Security
                </h1>
              </div>
              <div>
                <IoBusiness className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Business Hub
                </h1>
              </div>

              <div className="">
                <GiCrossroad className=" text-[60px] xl:text-[90px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Internal Road Network
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-3 md:mt-20 text-center">
          <div className="flex-col md:space-y-10">
            <div className="flex space-x-24 mx-auto">
              <div className="flex-col">
                <div>
                  <GiGate className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    Gated Community
                  </h1>
                </div>
                <div>
                  <BiCctv className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    24hrs CCtv
                  </h1>
                </div>
              </div>
              <div className="flex-col">
                <div>
                  <CgGym className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold"> Gym</h1>
                </div>
                <div>
                  <GiDoubleStreetLights className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    Street Lights
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex space-x-[80px] md:space-x-[120px] mx-auto ">
              <div className="flex-col">
                <div>
                  <BsSignpost2 className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    Recreational Areas
                  </h1>
                </div>
                <div>
                  <GiJumpingDog className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    Walk Park
                  </h1>
                </div>
              </div>
              <div className="flex-col">
                <div>
                  <MdOutlineSecurity className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    24hrs Security
                  </h1>
                </div>
                <div>
                  <IoBusiness className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
                  <h1 className="text-accent text-[18px] font-bold">
                    {" "}
                    Business Hub
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex space-x-[40px]">
            <div className="">
              <GiCrossroad className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
              <h1 className="text-accent text-[18px] text-center font-bold">
                Internal Road Network
              </h1>
            </div>
            <div className="">
              <TiShoppingCart className="text-[60px] text-[#014239] dark:text-[#12BE08] my-4 mx-auto" />
              <h1 className="text-accent text-[18px] text-center font-bold">
                Commercial Area
              </h1>
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-[38px] md:text-[50px] text-center text-[#014239] dark:text-[#12BE08] mt-10 md:mt-20 mb-2 md:mb-10">
          Plot Sizes & Prices
        </h1>
        <UrbanPricingTable />

        <h1 className=" font-bold text-[30px] md:text-[50px] text-center text-[#014239] dark:text-[#12BE08] mt-5 md:mt-24 leading-[30px] md:leading-[50px]">
          Location:{" "}
          <span className="text-accent">
            Ekim Enin, Off Ring Road 3, Uyo, Akwa Ibom State, Nigeria.
          </span>
        </h1>
      </div>
      {/* <MapComponent /> */}
      {/* <Suspense fallback={<div>Loading map...</div>}> */}
      {/* </Suspense> */}
    </div>
  );
};

export default UrbanProject;
