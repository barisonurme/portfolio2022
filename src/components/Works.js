import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  setCurrentWork,
  setTransitionHandler,
} from "../store/uiControllerSlice";

const workList = [
  {
    title: "Food Order",
    description:
      "Pizzaria is fully responsive ordering solution for restaurants.",
    longDescription:
      "Pizzaria is fully responsive ordering solution for restaurants. Note: Admin panel and ordering features might be disabled at live demo for security reasons.",
    thumbnail: "/images/works/pizzaria/screenshot.jpg",
    heroImage: "/images/works/pizzaria/screenshot01.jpg",
    usedWhileWorking: [
      "React",
      "Redux",
      "Tailwind",
      "Firebase",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-red-600",
    baseColor: "bg-red-600",
    secondaryTextColor: "text-red-600",
    textColor: "text-red-600",
    category: "webApp",
    links: [
      {
        text: "Source Code </>",
        link: "https://github.com/barisonurme/food-order",
        buttonActive: true,
      },
      {
        text: "Live Demo",
        link: "https://foodorder-bfeb6.firebaseapp.com/",
        buttonActive: true,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/OoCiQ7yhu3k",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Mobile Chat App",
    description: "Real time message application with different features.",
    longDescription:
      "Chappter is real time message application build with React Native. You can login and start chatting with anyone, add profile picture, react recieved messages",
    thumbnail: "/images/works/chappter/screenshot.jpg",
    heroImage: "/images/works/chappter/screenshot01.gif",
    usedWhileWorking: [
      "React Native",
      "Redux",
      "Firebase",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-sky-500",
    baseColor: "bg-sky-500",
    secondaryTextColor: "text-sky-500",
    textColor: "text-sky-500",
    category: "mobileApp",
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/sZIic2ByJas",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Mini Basketball",
    description: "Hypercasual game with monetized system build in.",
    longDescription:
      "Hypercasual game with monetized system build in. Players must play the game and watch ads for better rewards",
    thumbnail: "/images/works/minibasketball/screenshot.jpg",
    heroImage: "/images/works/minibasketball/screenshot01.jpg",
    usedWhileWorking: [
      "Unity3d",
      "Blender",
      "Photoshop",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-indigo-500",
    baseColor: "bg-indigo-500",
    secondaryTextColor: "text-indigo-500",
    textColor: "text-indigo-500",
    category: "gameDev",
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/20E38xpgcD8",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Workout Tracker",
    description: "Fitness Tracker, helps users track their workout.",
    longDescription:
      "Fitness Tracker is a web site that helps users track their workout from phone or desktop. You can login and track your daily activities such as calorie intake, water consumption, daily weight, and workouts.",
    category: "webApp",
    thumbnail: "/images/works/trainmate/screenshot.png",
    heroImage: "/images/works/trainmate/screenshot01.gif",
    pageBgColor: "bg-zinc-800",
    baseColor: "bg-indigo-700",
    secondaryTextColor: "text-cyan-400",
    textColor: "text-indigo-700",
    usedWhileWorking: [
      "ReactJs",
      "Redux",
      "Firebase",
      "Adobe After Effects",
      "Figma",
    ],
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "http://trainmate-b1a5f.firebaseapp.com",
        buttonActive: true,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/sZIic2ByJas",
        buttonActive: false,
      },
    ],
  },
];

const filters = [
  {
    text: "All Works",
    status: true,
    filter: "all",
  },
  {
    text: "Web Development",
    status: false,
    filter: "webApp",
  },
  {
    text: "Mobile App",
    status: false,
    filter: "mobileApp",
  },
  {
    text: "Graphic Design",
    status: false,
    filter: "graphicDesign",
  },
  {
    text: "Motion Graphics",
    status: false,
    filter: "motionGraph",
  },
  {
    text: "Game Development",
    status: false,
    filter: "gameDev",
  },
];

const Works = () => {
  const [activeWorkList, setActiveWorkList] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const parent = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveWorkList([]);
    setActiveWorkList(workList);
    setActiveFilters(filters);
  }, []);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const filterHandler = (clickedFilter) => {
    setActiveWorkList(workList);

    for (const filter in filters) {
      filters[filter].status = false;

      if (filters[filter].filter === clickedFilter)
        filters[filter].status = true;
    }
    setActiveFilters(filters);

    if (clickedFilter === "all") return;
    // prettier-ignore
    setActiveWorkList(workList.filter((work) => work.category === clickedFilter));
  };

  return (
    <div
      name="works"
      className={`duration-500 bg-white dark:bg-gray-900 dark:text-zinc-50 z-50 -translate-y-6 min-h-[90px]`}
    >
      <svg
        className="h-16 duration-500 -translate-y-16  fill-white dark:fill-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 183.27 9.89"
        width="100%"
        height="15"
        fill="white"
        preserveAspectRatio="none"
      >
        <path d="M183.27,9.89H0V0H0C60.76,7.81,122.51,7.81,183.27,0h0s0,9.89,0,9.89Z"></path>
      </svg>
      <div className=" -translate-y-6">
        <div className="flex lg:flex-row flex-col justify-center max-w-5xl m-auto">
          <span className="flex justify-center items-center text-center text-2xl sm:text-5xl font-Kanit font-bold whitespace-nowrap">
            I'm passionate about &nbsp;
          </span>
          <span className="flex justify-center items-center text-center text-2xl sm:text-5xl font-bold  font-Kanit text-skin-base whitespace-nowrap duration-500">
            Development {"&"} Design
          </span>
        </div>
        <div className="flex justify-center text-xl p-2 sm:text-2xl tracking-wide font-light text-center font-OpenSans opacity-60">
          Here is couple of works i have done recently
        </div>
        {/* Filters */}
        <div className="flex max-w-5xl m-auto justify-center sm:justify-evenly whitespace-nowrap flex-wrap mt-2 sm:mt-10">
          {activeFilters.map((filter) => (
            <div
              onClick={() => filterHandler(filter.filter)}
              key={filter.text}
              className={`${
                filter.status ? "bg-skin-base text-white " : " "
              } p-2 m-1 sm:p-2 sm:pr-4 sm:pl-4 sm:m-1 md:m-2 text-sm md:text-md hover:bg-skin-base duration-500 hover:text-white cursor-pointer select-none border-skin-base border rounded-xl  md:rounded-2xl font-Kanit`}
            >
              {filter.text}
            </div>
          ))}
        </div>
        {/* Works  */}
        <div
          ref={parent}
          className="flex max-w-7xl m-auto justify-center items-center mt-4 flex-wrap"
        >
          {activeWorkList.length === 0 && (
            <div className="h-96 w-full font-mono items-center flex flex-col justify-center text-2xl text-center">
              <div>
                Nothing to show yet <br />
                You can contact <span>here</span> for more information
              </div>
            </div>
          )}
          {activeWorkList.map((work) => (
            <div
              onClick={() => {
                dispatch(setCurrentWork(work));
                dispatch(
                  setTransitionHandler({
                    transitionActive: true,
                    transitionFinish: false,
                    transitionColor: work.pageBgColor,
                    transitionTextColor: work.textColor,
                  })
                );
              }}
              key={work.title}
              className="w-full xs:w-5/12 md:w-64 rounded-xl md:rounded-none h-auto sm:h-72 md:h-96 m-4 cursor-pointer overflow-hidden bg-white dark:bg-slate-800 dark:text-zinc-300 shadow-md hover:shadow-xl shadow-gray-900/10 border border-zinc-200 dark:border-0 dark:border-zinc-900 duration-1000 group hover:md:scale-110 "
            >
              <div className="w-full h-18 md:h-48 bg-skin-base duration-500 ">
                <img
                  alt={work.text}
                  src={work.thumbnail}
                  className="opacity-100 mix-blend-screen grayscale brightness-[1.25] hover:brightness-100 object-cover w-full h-full duration-1000"
                />
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="m-auto mt-2 md:mt-auto font-medium md:font-bold p-2 font-Kanit text-xl">
                  {work.title}
                </p>
                <p className="w-full text-center pr-2 pl-2 pb-2 text-sm font-light opacity-70">
                  {work.description}
                </p>
                <button className="bg-skin-base text-white mb-2 p-1 pr-6 pl-6 rounded-xl m-auto mt-4 flex justify-center items-center duration-1000  group-hover:shadow-md group-hover:drop-shadow-md">
                  <div className="overflow-hidden h-6 w-10 flex justify-center items-center">
                    <p className="absolute opacity-100 group-hover:opacity-0 duration-500 font-Kanit">
                      More
                    </p>
                    <FiArrowRight
                      size={20}
                      className="relative group-hover:-translate-x-0 -translate-x-5 duration-1000 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <svg
        className="h-16 duration-500 translate-y-24 rotate-180 fill-white dark:fill-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 183.27 9.89"
        width="100%"
        height="15"
        preserveAspectRatio="none"
      >
        <path
          d="M183.27,9.89H0V0H0C60.76,7.81,122.51,7.81,183.27,0h0s0,9.89,0,9.89Z"
        ></path>
      </svg> */}
      </div>
    </div>
  );
};

export default Works;
