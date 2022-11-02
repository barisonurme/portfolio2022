import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalActive: false,
  modalType: "about",
  transitionActive: false,
  transitionFinish: false,
  transitionColor: "bg-zinc-900",
  transitionTextColor: "bg-zinc-900",
  toasterActive: false,
  toasterMessage: "",
  toasterColor: "",
  currentWork: { usedWhileWorking: [], links: [] },
  darkMode: true,
  mailInput: "",
  messageInput: "",
};
const uiController = createSlice({
  name: "uiController",
  initialState: initialState,
  reducers: {
    setModalActive(state, action) {
      const { modalActive, modalType } = action.payload;
      state.modalActive = modalActive;
      if (modalType !== undefined) state.modalType = modalType;
    },
    setTransitionHandler(state, action) {
      const {
        transitionActive,
        transitionFinish,
        transitionColor,
        transitionTextColor,
      } = action.payload;
      state.transitionActive = transitionActive;
      state.transitionFinish = transitionFinish;
      if (transitionColor !== undefined)
        state.transitionColor = transitionColor;
      if (transitionTextColor !== undefined)
        state.transitionTextColor = transitionTextColor;
    },
    toasterHandler(state, action) {
      const { active, message, color } = action.payload;
      state.toasterActive = active;
      if (message !== undefined) state.toasterMessage = message;
      if (color !== undefined) state.toasterColor = color;
    },
    setCurrentWork(state, action) {
      if (
        action.payload.usedWhileWorking !== undefined &&
        action.payload.heroImage !== undefined
      )
        state.currentWork = action.payload;
    },
    setCurrentTheme(state, action) {
      if (action.payload === null) {
        action.payload = "theme-green";
      }
      document.getElementById("root").classList.remove(state.currentTheme);
      document
        .getElementById("transition")
        .classList.remove(state.currentTheme);
      document.getElementById("modal").classList.remove(state.currentTheme);
      document.getElementById("totop").classList.remove(state.currentTheme);
      document.getElementById("toaster").classList.remove(state.currentTheme);
      state.currentTheme = action.payload;
      localStorage.setItem("themeColor", action.payload);
      document.getElementById("root").classList.add(action.payload);
      document.getElementById("transition").classList.add(action.payload);
      document.getElementById("modal").classList.add(action.payload);
      document.getElementById("totop").classList.add(action.payload);
      document.getElementById("toaster").classList.add(action.payload);
    },

    darkModeToggle(state) {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        document.getElementById("root").classList.add("dark");
        document.getElementById("work").classList.add("dark");
        document.getElementById("modal").classList.add("dark");
        localStorage.setItem("darkMode", true);
      } else {
        document.getElementById("root").classList.remove("dark");
        document.getElementById("work").classList.remove("dark");
        document.getElementById("modal").classList.remove("dark");
        localStorage.setItem("darkMode", false);
      }
    },
    setDarkMode(state, action) {
      if (action.payload === null) action.payload = "dark";

      if (action.payload !== "false" && action.payload !== undefined) {
        document.getElementById("root").classList.add("dark");
        document.getElementById("work").classList.add("dark");
        document.getElementById("modal").classList.add("dark");
        localStorage.setItem("darkMode", true);
        state.darkMode = action.payload;
      }
      if (action.payload === "false") {
        state.darkMode = false;
        console.log("why?");
      }
    },
  },
});

export default uiController.reducer;
export const {
  setModalActive,
  setTransitionHandler,
  toasterHandler,
  setCurrentWork,
  setCurrentTheme,
  darkModeToggle,
  setDarkMode,
} = uiController.actions;
