import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setModalActive } from "../../store/uiControllerSlice";

const Backdrop = () => {
  const uiController = useSelector((store) => store.uiController);
  const modalActive = uiController.modalActive;
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <>
      {/* {uiController.modalActive && ( */}
      <CSSTransition
        in={modalActive}
        unmountOnExit
        timeout={1200}
        classNames="fade"
      >
        <div
          onClick={() => dispatch(setModalActive({ modalActive: false }))}
          className={`w-full h-screen fixed bg-zinc-900/50 backdrop-blur-xl z-30`}
        ></div>
      </CSSTransition>
      {/* )} */}
    </>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
