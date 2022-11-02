import ReactDOM from "react-dom";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setModalActive } from "../store/uiControllerSlice";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Settings from "./Settings";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);
  const { isNavBgActive } = props;

  let scroll = Scroll.animateScroll;

  return (
    <>
      <div
        className={`flex align-middle items-center justify-end md:justify-around tracking-wider flex-none md:flex-1 text-zinc-100 w-full font-Kanit`}
      >
        <div
          onClick={() =>
            dispatch(
              setModalActive({
                modalActive: true,
                modalType: "about",
              })
            )
          }
          className="m-1 hover:scale-105 hover:text-skin-base text-sm sm:text-md cursor-pointer duration-500 hidden md:flex"
        >
          ABOUT
        </div>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={-90}
          className="m-2 hover:scale-105 hover:text-skin-base text-sm sm:text-md cursor-pointer duration-500 hidden md:flex"
        >
          WORKS
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-90}
          className="m-2 hover:scale-105 hover:text-skin-base text-sm sm:text-md cursor-pointer duration-500 hidden md:flex"
        >
          SKILLS
        </Link>
        <div
          onClick={() => scroll.scrollToBottom()}
          className="m-2 hover:scale-105 hover:text-skin-base text-sm sm:text-md cursor-pointer duration-500 hidden md:flex"
        >
          CONTACT
        </div>
        <div className="m-2 hover:scale-105 hover:text-skin-base text-sm sm:text-md select-none group cursor-pointer duration-500  hidden md:flex md:flex-row-reverse">
          SETTINGS
          <div className="absolute translate-y-6 -translate-x-1  group-hover:h-72 h-0 w-0 group-hover:w-36 flex justify-end overflow-hidden duration-500  bg-white dark:bg-zinc-800 dark:text-zinc-100 group-hover:rounded-xl rounded-0 shadow-2xl group-hover:border dark:border-zinc-900 ">
            <Settings />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => setHamburgerMenuActive(!hamburgerMenuActive)}
          className={`flex flex-col-reverse md:hidden justify-end items-end group cursor-pointer p-4 z-50 ${
            hamburgerMenuActive ? "rotate-180" : "rotate-0"
          } duration-500`}
        >
          <div
            className={`${
              hamburgerMenuActive ? "rotate-45  -translate-y-2.5" : ""
            } w-7 h-0.5 bg-white m-1 group-hover:bg-skin-base duration-500`}
          ></div>
          <div
            className={`${
              hamburgerMenuActive ? "opacity-0" : "opacity-100"
            } w-4 h-0.5 bg-white m-1 group-hover:bg-skin-base duration-500`}
          ></div>
          <div
            className={`${
              hamburgerMenuActive ? "-rotate-45 translate-y-2.5" : ""
            } w-7 h-0.5 bg-white m-1 group-hover:bg-skin-base duration-500`}
          ></div>
        </div>
        <div
          className={`fixed top-0 w-full backdrop-blur-xl h-screen  md:hidden flex flex-col justify-center items-center duration-300 ${
            !hamburgerMenuActive ? "translate-x-full" : "translate-x-0"
          } font-mono text-xl`}
        >
          <Link
            to="#"
            className="mt-20 p-10 cursor-pointer"
            onClick={() => {
              setHamburgerMenuActive(false);
              dispatch(
                setModalActive({
                  modalActive: true,
                  modalType: "about",
                })
              );
            }}
          >
            ABOUT
          </Link>
          <Link
            onClick={() => {
              setHamburgerMenuActive(false);
            }}
            to="works"
            smooth={true}
            className="p-10 cursor-pointer"
          >
            WORKS
          </Link>
          <Link
            onClick={() => {
              setHamburgerMenuActive(false);
            }}
            to="skills"
            className="p-10 cursor-pointer"
            smooth={true}
          >
            SKILLS
          </Link>
          <div
            onClick={() => {
              setHamburgerMenuActive(false);
              scroll.scrollToBottom();
            }}
            className="p-10 cursor-pointer"
          >
            CONTACT
          </div>
        </div>

        {/* Bottom Left to Top Button */}
        {ReactDOM.createPortal(
          <div
            onClick={() => scroll.scrollToTop()}
            className={`bottom-2 right-2 md:bottom-10 md:right-10 rounded-full z-20 fixed flex ${
              isNavBgActive && !hamburgerMenuActive ? "fixed" : "hidden"
            } justify-center items-center group select-none cursor-pointer over:opacity-100 duration-500 p-6 text-skin-base`}
          >
            <MdOutlineKeyboardArrowUp
              size={25}
              className="group-hover:-translate-y-5 duration-500"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 text-xs duration-500 group-hover:translate-y-1 -rotate-90 font-bold -">
              TOP
            </div>
          </div>,
          document.getElementById("totop")
        )}
      </div>
    </>
  );
};

export default Navigation;
