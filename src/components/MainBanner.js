import React from "react";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-scroll";

const MainBanner = () => {
  return (
    <div className="flex flex-col h-72 md:h-[750px] text-center justify-center items-center w-full">
      <div className="w-full p-2 md:p-0">
        <div className="flex flex-col justify-center items-center text-white">
          <p className="text-sm xl:text-[25px] leading-tight tracking-wide flex flex-wrap duration-500 font-Kanit font-light">
            Hello, I'm Barış.
            <br /> Developer {"&"} Designer based on Antalya.
            <br className="md:hidden" /> I love{" "}
          </p>
          <TypeAnimation
            className="mt-0 md:mt-12 text-4xl lg:text-[60px] xl:text-[120px] font-Kanit font-bold text-skin-base whitespace-nowrap text-left"
            sequence={[
              "",
              2000,
              " Web Pages.",
              2000,
              "",
              2000,
              " Graphic Design.",
              2000,
              "",
              2000,
              " Mobile Apps.",
              2000,
              "",
              2000,
              " Game Development.",
              2000,
              () => {},
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>
      <Link
        to="works"
        smooth={true}
        offset={-115}  
        className="h-12 w-12 flex justify-center rounded-full translate-y-40 group duration-500 select-none cursor-pointer hover:bg-skin-base hover:border-none hover:text-zinc-900 text-skin-base scale-75 hover:scale-100"
      >
        <RiArrowDropDownLine
          className="animate-bounce mt-2"
          size={40}
        />
      </Link>
    </div>
  );
};

export default MainBanner;
