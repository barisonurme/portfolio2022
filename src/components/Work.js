import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { setTransitionHandler } from "../store/uiControllerSlice";
import { RiArrowDropLeftLine } from "react-icons/ri";
import * as Scroll from "react-scroll";

const Work = () => {
  const [secondContainer, setSecondContainer] = useState(false);
  const [videoLink, setVideoLink] = useState("");

  const uiController = useSelector((store) => store.uiController);
  const dispatch = useDispatch();
  const transitionFinish = uiController.transitionFinish;
  const currentWork = uiController.currentWork;

  var scroller = Scroll.scroller;

  const closeWorkHandler = async () => {
    dispatch(
      setTransitionHandler({
        transitionActive: true,
        transitionFinish: false,
      })
    );
    setTimeout(() => {
      scroller.scrollTo("works", {
        smooth: true,
        offset: -90,
      });
    }, 100);
  };

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={transitionFinish}
        unmountOnExit
        timeout={1000}
        classNames="fade"
        // onEntered={() =>
        //   dispatch(
        //     setTransitionHandler({
        //       transitionActive: true,
        //       transitionFinish: false,
        //     })
        //   )
        // }
      >
        <div className="z-40 fixed w-full h-full justify-center items-center flex flex-col text-left  bg-gray-900 dark:text-zinc-100">
          {/* Close */}

          {!secondContainer && (
            <div className="fixed z-50 top-5 left-5 lg:hidden">
              <AiOutlineCloseCircle
                onClick={closeWorkHandler}
                size={45}
                className={`${currentWork.secondaryTextColor} hover:text-zinc-800 dark:hover:text-zinc-200 duration-500 hover:rotate-180 ease-in-out hover:scale-110`}
              />
            </div>
          )}
          {!secondContainer && (
            <div className=" w-full max-w-7xl cursor-pointer left-1/2 translate-y-full hidden lg:flex flex-end justify-end p-2">
              <div className="p-4">
                <AiOutlineCloseCircle
                  onClick={closeWorkHandler}
                  size={45}
                  className={`${currentWork.textColor} hover:text-zinc-800 dark:hover:text-zinc-200 duration-500 hover:rotate-180 ease-in-out hover:scale-110`}
                />
              </div>
            </div>
          )}

          {secondContainer && (
            // Video Container
            <div
              className={`max-w-7xl  w-11/12 lg:w-full lg:max-w-[1280px] lg:h-2/4 rounded-xl shadow-none overflow-hidden flex flex-col items-center justify-start lg:justify-center`}
            >
              <div
                className={`text-xl text-zinc-50 mt-5 w-full text-center h-16 flex justify-center items-center`}
              >
                <p className="font-light text-sm tracking-wider">
                  This video is screen recorded from live demo of
                  <b className="font-black tracking-normal">
                    {" "}
                    {currentWork.title}.
                  </b>
                </p>
              </div>
              <iframe
                title={currentWork.title}
                className="aspect-video w-11/12 max-w-4xl overflow-hidden h-full shadow-2xl rounded-xl"
                src={videoLink}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {!secondContainer && (
            <div
              className={`max-w-7xl h-full  lg:h-2/4 min-h-[500px] rounded-0 lg:rounded-xl shadow-none lg:shadow-xl overflow-hidden  flex flex-col lg:flex-row items-center justify-start lg:justify-center bg-white dark:bg-zinc-800`}
            >
              {/* Card Image Side */}
              <div
                className={`lg:w-1/2 w-full flex h-1/2 lg:h-full border-8 rounded-0 md:rounded-l-xl  border-white dark:border-zinc-800  overflow-hidden`}
              >
                <img
                  src={currentWork.heroImage}
                  alt="work thumbnail"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-center lg:flex-start flex-col lg:w-1/2 w-full p-4 ">
                {/* Card Description Side */}
                <div>
                  <div
                    className={`text-5xl font-black ${currentWork.textColor}`}
                  >
                    {currentWork.title}
                  </div>
                  <div>
                    <div className="font-light font-sans md:text-2xl mt-4">
                      {currentWork.longDescription}
                    </div>
                    <div className="flex font-light mt-4  justify-start lg:justify-center flex-col">
                      <span className="ml-2 font-sans text-md">
                        Worked with:
                      </span>
                      <div className="flex flex-row flex-wrap">
                        {currentWork.usedWhileWorking.map((tool) => (
                          <div
                            key={tool}
                            className="p-2 pl-4 pr-4 mr-2 mt-2 rounded-xl text-sm whitespace-nowrap bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex font-light mt-4  justify-start lg:justify-center flex-col flex-wrap">
                      <span className="ml-2 font-sans text-md">
                        Project Links:
                      </span>
                      <div className="flex flex-row">
                        {currentWork.links.map((link) => (
                          <div
                            onClick={() => {
                              if (!link.buttonActive) return;
                              if (link.text === "Video") {
                                setVideoLink(link.link);
                                setSecondContainer(true);
                                return;
                              }
                              window.open(`${link.link}`, "_blank");
                            }}
                            key={link.text}
                            className={`${
                              link.buttonActive
                                ? `${currentWork.baseColor} cursor-pointer`
                                : "bg-zinc-400 dark:bg-zinc-700 opacity-70 cursor-not-allowed"
                            } duration-500 hover:bg-zinc-900   text-white p-2 pl-4 pr-4 mr-2 mt-2 rounded-xl whitespace-nowrap`}
                          >
                            {link.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {secondContainer && (
            <div
              className="text-white text-center p-3 pl-8 pr-8 rounded-xl cursor-pointer absolute bottom-32 tracking-wide border font-light border-white  duration-500 select-none group"
              onClick={() => setSecondContainer(false)}
            >
              <div className="overflow">
                <div className="group-hover:translate-x-2 duration-500">
                  Back
                </div>
                <div className="group-hover:-translate-x-4 opacity-0 group-hover:opacity-100 -translate-y-6 duration-500 absolute">
                  <RiArrowDropLeftLine size={25} />
                </div>
              </div>
            </div>
          )}
        </div>
      </CSSTransition>
    </>,
    document.getElementById("work")
  );
};

export default Work;
