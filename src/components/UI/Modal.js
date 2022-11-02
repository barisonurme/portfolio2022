import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import About from "../About";
import { setModalActive } from "../../store/uiControllerSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
  const uiController = useSelector((store) => store.uiController);
  const modalType = uiController.modalType;
  const modalActive = uiController.modalActive;
  const [modalAnim, setModalAnim] = useState(false);
  const dispatch = useDispatch();

  let modalContext = <></>;

  switch (modalType) {
    case "about":
      modalContext = <About />;
      break;

    default:
      break;
  }

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        in={modalActive}
        unmountOnExit
        timeout={1200}
        classNames="fade"
        onEnter={() => {
          setModalAnim(true);
        }}
        onExited={() => {
          setModalAnim(false);
        }}
      >
        <div></div>
      </CSSTransition>
      {uiController.modalActive && (
        <>
          <div
            style={{
              left: "50%",
              transform: `translate(-50%, ${modalAnim ? "-50%" : "-20%"})`,
              opacity: `${modalAnim ? "100" : "0%"}`,
              top: `10%`,
              transition: ".5s ease-in-out",
            }}
            className={`fixed l-0 r-0  w-10/12 max-w-4xl z-40 duration-1000`}
          >
            <div
              className="flex flex-col items-end w-full text-center mt-5 font-bold p-4  m-auto hover:opacity-80 cursor-pointer font-mono text-skin-base"
              onClick={() => dispatch(setModalActive(false))}
            >
              <AiOutlineCloseCircle size={30} />
            </div>
            {modalContext}
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
