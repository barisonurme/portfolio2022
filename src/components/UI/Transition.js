import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setTransitionHandler } from "../../store/uiControllerSlice";

const Transition = () => {
  const uiController = useSelector((store) => store.uiController);
  const currentWork = uiController.currentWork;
  const transitionActive = uiController.transitionActive;
  const transitionFinish = uiController.transitionFinish;

  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={transitionActive}
        unmountOnExit
        timeout={400}
        onEntered={() => {
          dispatch(
            setTransitionHandler({
              transitionActive: true,
              transitionFinish: true,
            })
          );
        }}
      >
        <div></div>
      </CSSTransition>
      <CSSTransition
        in={transitionFinish}
        unmountOnExit
        timeout={1000}
        onExited={() => {
          dispatch(
            setTransitionHandler({
              transitionActive: false,
              transitionFinish: false,
            })
          );
        }}
      >
        <div></div>
      </CSSTransition>
      <div
        onClick={() =>
          dispatch(
            setTransitionHandler({
              transitionActive: false,
              transitionFinish: false,
            })
          )
        }
        style={{
          left: "50%",
          transform: `translate(${transitionActive ? "-50%" : "50%"}, -50%)`,
          top: `50%`,
          transition: "transform, .5s ease-in-out",
        }}
        className={`fixed h-screen w-full z-30`}
      >
        <div className={`w-full h-screen ${currentWork.baseColor}`}></div>
      </div>
    </>,
    document.getElementById("transition")
  );
};

export default Transition;
