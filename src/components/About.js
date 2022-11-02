import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import { setModalActive } from "../store/uiControllerSlice";
// import { useDispatch } from 'react-redux';
// import {
//   setModalActive,
//   uiControllerActions,
// } from '../store/uiControllerSlice';
import ContactMe from "./ContactMe";

const About = () => {
  const [contactMe, setContactMe] = useState(false);
  const [contactMeClicked, setContactMeClicked] = useState(false);
  const currentTheme = useSelector((store) => store.uiController.currentTheme);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`absolute left-0 right-0 w-full p-4 sm:p-6 bg-white dark:bg-zinc-300 rounded-xl duration-500 overscroll-contain drop-shadow-2xl  ${currentTheme}`}
      >
        <div className="w-full flex justify-center items-center">
          <svg
            viewBox="0 0 25 25"
            className={`${
              contactMeClicked ? "w-8" : "w-24 lg:w-48"
            } p-1  fill-skin-base duration-500`}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              class="st0"
              d="M22.4,14L22.4,14c-0.5-0.7-1.2-1.2-2.1-1.6c0.6-0.5,1.1-1.1,1.5-1.9c0.4-0.8,0.6-1.7,0.6-2.8   c0-2-0.6-3.6-1.9-4.7c-1.3-1.1-3-1.6-5.3-1.6H6.6c-0.2,0-0.4,0-0.6,0H1.9v5.1h0.9c0.6,0,0.9,0.3,0.9,0.9v2.5c0,0.6,0.1,1.1,0.3,1.6   c0.2,0.4,0.4,0.7,0.7,1c0,0,0.1,0.1,0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1c-0.3,0.3-0.5,0.6-0.7,1c-0.2,0.4-0.3,0.9-0.3,1.6v2.5   c0,0.6-0.3,0.9-0.9,0.9H1.9v5.1H6c0.2,0,0.4,0,0.7,0h8.7c2.5,0,4.4-0.6,5.8-1.8s2.1-2.9,2.1-5C23.1,15.6,22.9,14.6,22.4,14z    M16.1,13.9c-0.4,0.1-0.6,0.2-0.8,0.4c-0.2,0.2-0.3,0.6-0.3,1.1v2.1c0,1-0.3,1.9-0.8,2.4c-0.5,0.6-1.3,0.9-2.3,0.9h-3V17h0.7   c0.4,0,0.6-0.2,0.6-0.7v-1.8c0-0.5,0.1-0.9,0.2-1.2c0.2-0.3,0.4-0.6,0.6-0.8c-0.2-0.2-0.5-0.5-0.6-0.8c-0.2-0.3-0.2-0.7-0.2-1.2   V8.7C10.2,8.2,10,8,9.6,8H8.9V4.2h3c1,0,1.8,0.3,2.3,0.9C14.7,5.7,15,6.5,15,7.5v2.1c0,0.5,0.1,0.8,0.3,1.1   c0.2,0.2,0.4,0.4,0.8,0.4V13.9z"
            />
          </svg>
        </div>
        <div
          className={`${
            contactMeClicked && "hidden"
          } text-center font-bold tracking-wider text-xl font-Kanit text-gray-600  dark:text-gray-900`}
        >
          BARISONURME
        </div>
        <CSSTransition
          in={!contactMeClicked}
          unmountOnExit
          timeout={1200}
          classNames="fade"
          onExited={() => {
            setContactMe(true);
          }}
        >
          <div
            style={{ textAlign: "justify", textAlignLast: "center" }}
            className="p-1 md:pr-10 md:pl-10 md:pb-6  pt-6 text-sm sm:text-md font-mono text-gray-600  dark:text-gray-900"
          >
            Hello, my name is <b>Baris.</b> I'm a developer{" "}
            {"&"} designer based in Antalya currently. <br />
            From a young age I always was into programming and
            UI design. After I graduated, I worked as a graphic designer for
            many years.
            <br />
            My latest projects is are mostly based on React
            and React Native. Besides design and web development, I'm also
            interested in developing and designing games as a hobby. <br />
            <div className="text-center text-gray-600 tracking-wide text-sm sm:text-md mt-6 m-auto items-center justify-center w-full  dark:text-gray-900">
              You can check{" "}
              <Link
                to="works"
                smooth={true}
                offset={-120}
                onClick={() => {
                  dispatch(
                    setModalActive({
                      modalActive: false,
                      modalType: "about",
                    })
                  );
                }}
                className="font-semibold underline text-skin-base"
                href={"#a"}
              >
                my works here!
              </Link>
              <br />
              or You can{" "}
              <a className="font-semibold underline text-skin-base" href={"#a"}>
                CV pdf here!
              </a>
              <div className="text-gray-600  dark:text-gray-900">
                If you liked what you see already, we can work together!
              </div>
            </div>
          </div>
        </CSSTransition>
        <button
          onClick={() => setContactMeClicked(true)}
          className={`flex items-center justify-center text-white text-center  text-xs lg:text-xl bg-skin-base max-w-1/2 w-1/2 m-auto  duration-500 font-mono 
        ${contactMeClicked ? "h-0 opacity-0" : "h-12"}
         rounded-xl`}
        >
          Contact Me
        </button>
        <CSSTransition
          in={contactMe}
          unmountOnExit
          timeout={1200}
          classNames="fade"
        >
          <div>
            <ContactMe />
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default About;
