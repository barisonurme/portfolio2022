import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiUnity,
  SiBlender,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const Skills = () => {
  return (
    <div
      name="skills"
      className={`bg-[url('/public/images/2474215.jpg')] bg-cover bg-blend-screen bg-gray-900  font-Kanit  p-14`}
    >
      <div className="font-Kanit flex lg:flex-row flex-col justify-center max-w-5xl m-auto">
        <span className="flex justify-center items-center text-center text-2xl sm:text-5xl font-bold whitespace-nowrap text-white">
          Theese are some of &nbsp;
        </span>
        <span className="flex justify-center items-center text-center text-2xl sm:text-5xl font-bold text-skin-base whitespace-nowrap duration-500">
          Technologies I'm Using
        </span>
      </div>
      <div className="flex justify-center text-xl p-2 sm:text-2xl tracking-wide font-light text-center text-white  font-OpenSans opacity-60">
        for a making great product.
      </div>
      <div className="max-w-7xl m-auto flex flex-wrap justify-center w-full">
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <FaReact size={55} color={"white"} />
          React
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiRedux size={55} color={"white"} />
          Redux
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <FaReact size={55} color={"white"} />
          ReactNative
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <DiJavascript1 size={55} color={"white"} />
          JavaScript
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiTailwindcss size={55} color={"white"} />
          TailwindCSS
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiBootstrap size={55} color={"white"} />
          BootStrap
        </div>
      </div>
      <div className="max-w-7xl m-auto flex flex-wrap justify-center w-full">
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiAdobephotoshop size={55} color={"white"} />
          Photoshop
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiAdobeillustrator size={55} color={"white"} />
          Illustrator
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiAdobeindesign size={55} color={"white"} />
          inDesign
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiAdobeaftereffects size={55} color={"white"} />
          AfterEffects
        </div>
      </div>
      <div className="max-w-7xl m-auto flex flex-wrap justify-center w-full">
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiUnity size={55} color={"white"} />
          Unity3d
        </div>
        <div className="w-24 h-24 rounded-full p-4 flex flex-col text-white text-xs font-light tracking-wider justify-center items-center hover:bg-skin-base m-1 duration-500  select-none">
          <SiBlender size={55} color={"white"} />
          Blender
        </div>
      </div>
      <div className="max-w-7xl m-auto flex justify-evenly w-full p-4"></div>
    </div>
  );
};

export default Skills;
