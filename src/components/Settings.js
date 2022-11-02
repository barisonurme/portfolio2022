import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  darkModeToggle,
  setCurrentTheme,
  setDarkMode,
} from "../store/uiControllerSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((store) => store.uiController.darkMode);
  const currentTheme = useSelector((store) => store.uiController.currentTheme);

  const darkModeHandler = () => {
    dispatch(darkModeToggle());
  };

  useEffect(() => {
    const localThemeColor = localStorage.getItem("themeColor");
    const localDarkMode = localStorage.getItem("darkMode");
    dispatch(setCurrentTheme(localThemeColor));
    dispatch(setDarkMode(localDarkMode));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden z-30 cursor-auto font-Kanit">
      <div className="w-full flex flex-col pr-4 translate-y-4 whitespace-nowrap">
        <div className="flex flex-col justify-end items-end w-full">
          <div className="text-md font-bold flex mb-2">Language</div>
          {/* <div className="flex items-center justify-center border rounded-xl p-2 mt-1  hover:bg-gray-200 dark:hover:text-zinc-800 duration-500 cursor-pointer dark:border-zinc-900">
            <div className="rounded-md text-md">Türkçe</div>
            <div className="bg-skin-base w-4 h-4 rounded-full flex justify-center items-center ml-2 border">
              <div className="bg-skin-inverted w-2 h-2 rounded-full"></div>
            </div>
          </div> */}
          <div className="flex items-center justify-center  rounded-xl p-2  hover:bg-gray-200 dark:hover:text-zinc-800 duration-500 cursor-pointer">
            <div className="rounded-md text-md">English</div>
            <div className="bg-skin-base w-4 h-4 rounded-full flex justify-center items-center ml-2 border">
              <div className="bg-skin-inverted w-2 h-2 rounded-full opacity-0"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end w-full">
          <div className="text-md font-bold mt-4">Dark Mode</div>
          <div
            onClick={() => darkModeHandler()}
            className={`w-16 cursor-pointer hover:bg-white-50 bg-skin-base h-8 rounded-full items-center duration-1000 flex  p-1`}
          >
            <div
              className={`w-6 h-6 bg-skin-inverted rounded-full flex items-center justify-center ${
                darkMode ? "translate-x-1" : "translate-x-7"
              } duration-1000`}
            >
              <div
                className={`bg-skin-base rounded-full translate-x-3 ${
                  darkMode ? "h-6 w-6 " : "h-0 w-0"
                } duration-1000`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end w-full">
          <div className="text-md font-bold mt-4">Theme</div>

          <div className="flex w-24 flex-wrap flex-row-reverse">
            <div
              onClick={() => {
                dispatch(setCurrentTheme("theme-green"));
              }}
              className="flex justify-center items-center border p-1 rounded-md m-1  bg-white dark:bg-zinc-800 dark:text-zinc-100 group hover:bg-gray-200 cursor-pointer dark:hover:bg-black duration-500 hover:rounded-xl dark:border-zinc-900"
            >
              <div className="bg-green-500 w-4 h-4 rounded-md group-hover:rounded-xl flex justify-center items-center">
                <div
                  className={`h-2 w-2 bg-skin-inverted rounded-full duration-500 opacity-0 ${
                    currentTheme === "theme-green" && "opacity-100"
                  }`}
                ></div>
              </div>
            </div>

            <div
              onClick={() => {
                dispatch(setCurrentTheme("theme-root"));
              }}
              className="flex justify-center items-center border p-1 rounded-md m-1  bg-white dark:bg-zinc-800 dark:text-zinc-100 group hover:bg-gray-200 cursor-pointer dark:hover:bg-black duration-500 hover:rounded-xl dark:border-zinc-900"
            >
              <div className="bg-rose-500 w-4 h-4 rounded-md group-hover:rounded-xl flex justify-center items-center">
                <div
                  className={`h-2 w-2 bg-skin-inverted rounded-full duration-500 opacity-0 ${
                    currentTheme === "theme-root" && "opacity-100"
                  }`}
                ></div>
              </div>
            </div>

            <div
              onClick={() => {
                dispatch(setCurrentTheme("theme-indigo"));
              }}
              className="flex justify-center items-center border p-1 rounded-md m-1  bg-white dark:bg-zinc-800 dark:text-zinc-100 group hover:bg-gray-200 cursor-pointer dark:hover:bg-black duration-500 hover:rounded-xl dark:border-zinc-900"
            >
              <div className="bg-indigo-600 w-4 h-4 rounded-md group-hover:rounded-xl flex justify-center items-center">
                <div
                  className={`h-2 w-2 bg-skin-inverted rounded-full duration-500 opacity-0 ${
                    currentTheme === "theme-indigo" && "opacity-100"
                  }`}
                ></div>
              </div>
            </div>

            <div className="flex justify-center items-center border p-1 rounded-md m-1  bg-white dark:bg-zinc-800 dark:text-zinc-100 group hover:bg-gray-200 cursor-pointer dark:hover:bg-black duration-500 hover:rounded-xl dark:border-zinc-900">
              <div
                onClick={() => {
                  dispatch(setCurrentTheme("theme-amber"));
                }}
                className="w-4 bg-amber-500 h-4 rounded-md group-hover:rounded-xl flex justify-center items-center"
              >
                <div
                  className={`h-2 w-2 bg-skin-inverted rounded-full duration-500 opacity-0 ${
                    currentTheme === "theme-amber" && "opacity-100"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
