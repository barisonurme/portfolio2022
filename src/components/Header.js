import React, { useState } from "react";
import MainBanner from "./MainBanner";
import Navigation from "./Navigation";

const Header = () => {
  const [isNavBgActive, setIsNavBgActive] = useState(false);
  window.onscroll = function () {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top <= 50 && isNavBgActive) setIsNavBgActive(false);
    if (top > 51 && !isNavBgActive) setIsNavBgActive(true);
  };

  return (
    <div
      className={`
    bg-gray-900 bg-[url('/public/images/2474215.jpg')] bg-blend-screen bg-cover duration-500 justify-end items-end flex
    `}
    >
      <div
        className={`flex h-24 justify-center items-center duration-500 z-20 ${
          isNavBgActive
            ? "top-0 fixed w-32 md:w-full md:flex md:backdrop-blur-xl  bg-zinc-800/40 dark:bg-transparent"
            : "top-0 fixed md:w-full md:flex  bg-zinc-800/0"
        }
        `}
      >
        <div className="flex w-full max-w-4xl ">
          <Navigation isNavBgActive={isNavBgActive} />
        </div>
      </div>
      <MainBanner />
    </div>
  );
};

export default Header;
