"use client";
// import React, { lazy, Suspense } from 'react'
import VideoViewer from "@/app/VideoViewer";
import axios from "axios";

//imgs
import wanablk from "@/app/assets/Photos/wanacol.png";
import WanaCourtBrochureimg from "@/app/assets/Photos/WanaCourtBrochure33.jpg";
import WanaCourtHead from "@/app/assets/Photos/WanaCourtBrochure33.jpg";
import WanaCourtBrochureimg2 from "@/app/assets/Photos/WanaCourtBrochure4.jpg";

//icons
import { MdCo2, MdEmojiTransportation } from "react-icons/md";
import { PiCurrencyNgnFill } from "react-icons/pi";
import { FaHeartPulse } from "react-icons/fa6";
import { SiOverleaf } from "react-icons/si";
import { FaRecycle } from "react-icons/fa";
import { GiCrossroad } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineSecurity } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { BsSignpost2 } from "react-icons/bs";
import WanaPricingTable from "@/app/WanaPricingTable";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/app/Map"), {
  ssr: false,
});

const WanaProject = () => {
  const [downloadStatus, setDownloadStatus] = useState("");

  //   const center = [51.505, -0.09]; // London coordinates
  //   const markers = [
  //     { position: [51.505, -0.09], popup: "London" },
  //     { position: [48.8566, 2.3522], popup: "Paris" },
  //     { position: [40.7128, -74.006], popup: "New York" },
  //   ];

  const downloadFile = async (filePath) => {
    try {
      const response = await axios.get(`/api/download?filePath=${filePath}`, {
        responseType: "blob", // Important for binary data
      });

      // Extract filename from content-disposition header
      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

      // Create a temporary anchor element to trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      // Setting filename received in response
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus("Downloaded");
    } catch (error) {
      console.error("Error downloading file:", error);
      setDownloadStatus("Error downloading");
    }
  };

  return (
    <div className="font-[family-name:var(--font-NeueMontreal)]">
      <div className="relative">
        <div className="absolute top-[100px] md:top-[150px] left-[130px] md:left-[380px] xl:left-[630px] z-30 dark:z-30">
          <Image
            className="h-[60px] md:h-[140px] w-[150px] md:w-[300px] "
            src={wanablk}
            alt=" Urban Logo"
          />
        </div>
      </div>
      <div className="w-full pt-16 md:pt-24">
        <Image
          src={WanaCourtHead}
          alt="Profile"
          className=" w-full h-full md:h-[700px] object-contain md:object-fill opacity-60 dark:opacity-40"
        />
      </div>

      <div className="bg-primary pt-[10px] md:pt-[60px] p-3 md:px-14 text-accent ">
        <div className="text-[48px] md:text-[70px] text-start  pb-2 md:pb-0 pt-10 md:pt-5">
          <h1 className=" text-[48px] md:text-[70px] md:text-center leading-[53px] md:leading-[60px]">
            Deep dive into{" "}
            <span className="text-[#6b428e] dark:text-[#681195]"></span>
          </h1>
          <h1 className="text-[48px] md:text-[70px] md:text-center leading-[40px] md:leading-[60px] ">
            <span className="text-[#6b428e] dark:text-[#681195] ">
              Wana Court Estate
            </span>{" "}
          </h1>
        </div>
        <h1 className="text-[17px] md:text-[23px] leading-[25px] mb-[40px] xl:mx-[350px] md:text-center mt-1 md:mt-3">
          Be at peace always in nature's tranquil embrace
        </h1>
        <VideoViewer videoId="B04KGnkOm00" />

        <div className=" text-start py-5 mt-0 md:pt-14 md:my-0 md:mb-9">
          <h1 className=" font-bold text-[38px] md:text-[50px] text-[#6b428e] dark:text-[#681195]">
            Why Wana Court?
          </h1>
          <h1 className=" text-[17px] md:text-[25px] leading-[25px] md:pr-52">
            The architectural design of Wana Court harmonizes with the natural
            environment, ensuring that the community not only preserves but also
            enhances its surroundings.{" "}
          </h1>
          <h1 className=" text-[17px] md:text-[25px] leading-[25px] md:pr-52 mt-3">
            By incorporating eco-friendly elements and smart systems, Wana Court
            offers a lifestyle that prioritizes wellness, security, and comfort.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full md:gap-x-9">
          <div className="md:w-[50%]">
            <Image
              src={WanaCourtBrochureimg}
              alt="Profile"
              className=" h-[450px] md:h-[630px] w-full md:w-full object-cover mb-4"
            />
          </div>
          <div className="md:w-[50%]">
            <Image
              src={WanaCourtBrochureimg2}
              alt="Profile"
              className=" w-full md:w-[650px] h-[450px] md:h-[630px] object-fit md:object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-2 md:mt-7">
          <button
            onClick={() => downloadFile("WanaCourtBrochure.pdf")}
            className="btn bg-[#1C1C1C] mt-5 md:mt-10 md:h-[70px] w-[200px] md:w-[300px] text-[17px] md:text-[20px] text-white rounded-none"
          >
            Download Brochure
          </button>
        </div>
        <h1 className=" font-bold text-[38px] md:text-[50px] text-center text-[#6b428e] dark:text-[#681195] mt-5 md:mt-24">
          Estate Features
        </h1>
        <div className="hidden md:block mt-3 md:mt-10 text-center">
          <div className="flex-col md:space-y-10">
            <div className="flex space-x-24 xl:space-x-36 mx-auto">
              <div>
                <MdCo2 className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Zero Carbon Emissions
                </h1>
              </div>
              <div>
                <PiCurrencyNgnFill className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Cost Efficiency
                </h1>
              </div>

              <div>
                <FaHeartPulse className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Healthy Living
                </h1>
              </div>
              <div>
                <SiOverleaf className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Natural Resource Conservation
                </h1>
              </div>

              <div className="">
                <FaRecycle className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Recycling
                </h1>
              </div>
            </div>
            <div className="flex space-x-[80px] xl:space-x-[120px] mx-auto ">
              <div>
                <BsSignpost2 className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Recreational Areas
                </h1>
              </div>
              <div>
                <MdEmojiTransportation className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Eco-Friendly Transportation
                </h1>
              </div>

              <div>
                <MdOutlineSecurity className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  24hrs Security
                </h1>
              </div>
              <div>
                <IoBusiness className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  {" "}
                  Business Hub
                </h1>
              </div>

              <div className="">
                <GiCrossroad className="text-[60px] xl:text-[90px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                <h1 className="text-accent text-[18px] md:text-[25px] font-bold">
                  Internal Road Network
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-3 md:mt-20 text-center">
          <div className="flex-col">
            <div className="flex mx-auto space-x-28">
              <div className="flex-col">
                <div>
                  <MdCo2 className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Zero Carbon
                    <br /> Emissions
                  </h1>
                </div>
                <div>
                  <PiCurrencyNgnFill className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Cost Efficiency
                  </h1>
                </div>
              </div>
              <div className="flex-col">
                <div>
                  <FaHeartPulse className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Healthy Living
                  </h1>
                </div>
                <div>
                  <SiOverleaf className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Natural Resource <br /> Conservation
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex mx-auto space-x-28">
              <div className="flex-col ">
                <div>
                  <BsSignpost2 className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    Recreational Areas
                  </h1>
                </div>
                <div>
                  <MdEmojiTransportation className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Eco-Friendly <br /> Transportation
                  </h1>
                </div>
              </div>
              <div className="flex-col mx-auto">
                <div>
                  <MdOutlineSecurity className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    24hrs Security
                  </h1>
                </div>
                <div>
                  <IoBusiness className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
                  <h1 className="text-accent text-[16px] font-bold">
                    {" "}
                    Business Hub
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex mx-auto space-x-28">
            <div className="flex-col mx-auto">
              <GiCrossroad className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
              <h1 className="text-accent text-center text-[18px] md:text-[25px] font-bold">
                Internal Road <br /> Network
              </h1>
            </div>
            <div className="flex-col mx-auto">
              <TiShoppingCart className="text-[60px] text-[#6b428e] dark:text-[#681195] my-4 mx-auto" />
              <h1 className="text-accent text-center text-[18px] md:text-[25px] font-bold">
                Commercial Area
              </h1>
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-[38px] md:text-[50px] text-center text-[#6b428e] dark:text-[#681195] mt-10 md:mt-20 mb-2 md:mb-10">
          Plot Sizes & Prices
        </h1>
        <WanaPricingTable />

        <h1 className=" font-bold text-[30px] md:text-[50px] text-center text-[#6b428e] dark:text-[#681195] mt-5 md:mt-24 leading-[30px] md:leading-[50px]">
          Location:{" "}
          <span className="text-accent">
            Ekim Enin, Off Ring Road 3, Uyo, Akwa Ibom State, Nigeria.
          </span>
        </h1>
      </div>
      {/* <MapWithNoSSR center={center} zoom={4} markers={markers} /> */}
      {/* <MapComponent /> */}
      {/* <Suspense fallback={<div>Loading map...</div>}> */}
      {/* </Suspense> */}
    </div>
  );
};

export default WanaProject;
