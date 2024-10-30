"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

//img
import urban from "../assets/Photos/urbancol.png";
import urbanlemon from "../assets/Photos/urbarnlemon.png";
import wanablk from "../assets/Photos/wanacol.png";
import wanathickcol from "../assets/Photos/Wanathickcol.png";
import urbanhouse from "../assets/Photos/GATE.jpg";
import urbanhouse2 from "../assets/Photos/UMSEMIDETACHED.jpeg";
import WanaCourtBrochureimg from "../assets/Photos/WanaCourtBrochure.jpg";
import WanaCourtBrochureimg2 from "../assets/Photos/wanaimg.png";
import Image from "next/image";

const Projects = () => {
  const [downloadStatus, setDownloadStatus] = useState("");

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
    <>
      <div className="bg-primary pt-[100px] md:pt-[170px] p-3 md:pb-9 md:px-14  text-accent font-[family-name:var(--font-NeueMontreal)]">
        <Image
          src={urban}
          alt="Profile"
          className=" w-[100px] md:w-[170px] h-full object-contain dark:hidden"
        />
        <Image
          src={urbanlemon}
          alt="Profile"
          className=" w-[100px] md:w-[170px] h-full object-contain hidden dark:block"
        />
        <div className="text-[48px] md:text-[70px] text-start  md:pb-0 pt-10 md:pt-5 w-full h-full  ">
          <h1 className="text-[48px] md:text-[70px] text-start md:leading-[60px]">
            <span className="text-[#014239] dark:text-[#12BE08] ">
              Urban Mark{" "}
            </span>{" "}
          </h1>
          <h1 className="hidden text-[48px] md:text-[70px] text-start pl-3  leading-[23px] md:leading-[60px]">
            for your Comfort{" "}
          </h1>
          <h1 className="hidden md:block text-[48px] md:text-[70px] text-start leading-[23px] md:leading-[60px] mb-14">
            Leading development <span className="text-[#ff5700]"></span>
          </h1>
          <h1 className=" block md:hidden text-[48px] md:text-[70px] text-start md:pl-14 leading-[38px] md:leading-[60px]">
            Estate
          </h1>
        </div>
        <div className="block md:hidden text-start py-5 mt-0 md:pt-14 md:my-0 md:mb-9 w-full h-full">
          <h1 className="hidden md:block font-bold text-[22px] md:text-[35px] w-full h-full">
            Luxury Living Redefined: Experience Comfort, Class, and Modern
            Elegance
          </h1>
          <h1 className=" text-[20px] md:text-[25px] leading-[30px] md:pr-52 w-full h-full">
            This elegant luxury estate development of excellent qualities will
            offer you a lifestyle of exceptional comfort and class due to its
            urban setting, stunning and accessible location, best quality
            standards, contemporary architectural designs, modern and exquisite
            finishing and functional facilities with superb layout
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-9 w-full h-full">
          <div>
            <Image
              src={urbanhouse}
              alt="Profile"
              className=" w-full h-full md:w-[650px] md:h-[360px] object-contain"
            />
          </div>
          <div>
            <Image
              src={urbanhouse2}
              alt="Profile"
              className=" w-full h-full md:w-[650px] md:h-[360px] object-contain hidden dark:block"
            />
          </div>
        </div>
        <h1 className="hidden md:block font-bold text-[22px] md:text-[35px] md:leading-[40px] mt-12">
          Luxury Living Redefined: Experience Comfort, Class, and Modern
          Elegance
        </h1>
        <h1 className="hidden md:block text-[20px] md:text-[25px] leading-[30px] md:pr-52">
          This elegant luxury estate development of excellent qualities will
          offer you a lifestyle of exceptional comfort and class due to its
          urban setting, stunning and accessible location, best quality
          standards, contemporary architectural designs, modern and exquisite
          finishing and functional facilities with superb layout
        </h1>
        <div className=" text-start py-5 mt-0 md:pt-0 md:my-0 md:mb-9 w-full h-full">
          <Link href="/project/urban-estate">
            <button className="btn bg-[#014239] dark:bg-[#12BE08] mt-5 md:mt-10 md:h-[70px] w-[160px] md:w-[200px] text-[17px] md:text-[20px] text-white rounded-none">
              Learn More
            </button>
          </Link>
          <button
            onClick={() => downloadFile("URBANMARKBROCHURE.pdf")}
            className="btn bg-[#014239] dark:bg-[#12BE08] ml-7 md:ml-8 mt-5 md:mt-10 md:h-[70px] w-[160px] md:w-[200px] text-[17px] md:text-[20px] text-white rounded-none"
          >
            Brochure
          </button>
        </div>

        <Image
          src={wanablk}
          alt="Profile"
          className=" w-[140px] md:w-[190px] h-full object-contain mt-14 md:mt-24 block dark:hidden"
        />
        <Image
          src={wanathickcol}
          alt="Profile"
          className=" w-[140px] md:w-[190px] h-full object-contain mt-14 md:mt-24 hidden dark:block"
        />
        <div className="text-[48px] md:text-[70px] text-start  md:pb-0 pt-4 md:pt-5   ">
          <h1 className="text-[48px] md:text-[70px] text-start md:leading-[60px]">
            <span className="text-[#6b428e] dark:text-[#681195]">
              Wana Court{" "}
            </span>{" "}
          </h1>
          <h1 className="hidden text-[48px] md:text-[70px] text-start pl-3  leading-[23px] md:leading-[60px]">
            for your Comfort{" "}
          </h1>
          <h1 className="hidden md:block text-[48px] md:text-[70px] text-start leading-[23px] md:leading-[60px] mb-14">
            Leading development <span className="text-[#ff5700]"></span>
          </h1>
          <h1 className="block md:hidden text-[48px] md:text-[70px] text-start md:pl-14 leading-[38px] md:leading-[60px] mb-14">
            Estate
          </h1>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-y-3 md:gap-y-0 md:gap-x-9">
          <div>
            <Image
              src={WanaCourtBrochureimg}
              alt="Profile"
              className=" w-full md:w-[650px] h-[420px] md:h-[450px] object-cover"
            />
          </div>
          <div>
            <Image
              src={WanaCourtBrochureimg2}
              alt="Profile"
              className=" w-full md:w-[650px] h-[420px]  md:h-[450px] object-fit"
            />
          </div>
        </div>
        <div className=" text-start py-5 mt-0 md:pt-14 md:my-0 md:mb-9">
          <h1 className="hidden md:block font-bold text-[22px] md:text-[35px]">
            Leading the Way in Sustainable, Zero-Carbon Living
          </h1>
          <h1 className=" text-[20px] md:text-[25px] leading-[30px] xl:pr-52">
            Wana Court is a pioneering development aimed at creating a
            sustainable community where residents can seamlessly live, work, and
            play
          </h1>
          <h1 className=" text-[20px] md:text-[25px] leading-[30px] xl:pr-52">
            The estate's vision, encapsulated by its tagline "The New Culture,"
            revolves around integrating green and smart technologies to address
            global environmental changes and their impact on human life.{" "}
          </h1>
          <Link href="/project/wana-court-estate">
            <button className="btn bg-[#6b428e] dark:bg-[#681195] mt-5 md:mt-10 md:h-[70px] w-[160px] md:w-[200px] text-[17px] md:text-[20px] text-white rounded-none">
              Learn More
            </button>
          </Link>
          <button
            onClick={() => downloadFile("WanaCourtBrochure.pdf")}
            className="btn bg-[#6b428e] dark:bg-[#681195] ml-8 mt-5 md:mt-10 md:h-[70px] w-[160px] md:w-[200px] text-[17px] md:text-[20px] text-white rounded-none"
          >
            Brochure
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
