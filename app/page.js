import Image from "next/image";
import Link from "next/link";

//Imgs
import Wallpaper from "./assets/Photos/wallpaper.webp";
import WallpaperMobile from "./assets/Photos/inmotionmobile.webp";

//Icons
import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <section className="relative text-center  overflow-hidden h-full w-full font-[family-name:var(--font-NeueMontreal)]">
      <div className="absolute z-20 top-[43%] md:top-[75%] left-[34%] md:left-[43%]">
        <Link href="/">
          <div className="flex ">
            <button className="btn bg-[#ff5700]  border-[0px] rounded-none w-[140px] md:w-[200px] md:h-[60px] font-bold text-white text-[17px] md:text-[21px]">
              Explore <HiMiniArrowLongRight className="ml-3 text-[23px]" />
            </button>
          </div>
        </Link>
      </div>
      <picture>
        <Image
          src={Wallpaper}
          alt="In motion"
          className="hidden md:block w-full h-full"
        />
        <Image
          src={WallpaperMobile}
          alt="In motion"
          className="block md:hidden h-[100vh] w-[100vw]"
        />
      </picture>
    </section>
  );
}
