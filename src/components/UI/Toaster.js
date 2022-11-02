import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { toasterHandler } from "../../store/uiControllerSlice";

const Toaster = () => {
  const dispatch = useDispatch();
  const closeToaster = () => {
    dispatch(toasterHandler({ active: false }));
  };
  const uiController = useSelector((store) => store.uiController);
  const toasterActive = uiController.toasterActive;
  const toasterMessage = uiController.toasterMessage;

  return ReactDOM.createPortal(
    <CSSTransition
      in={toasterActive}
      unmountOnExit
      timeout={1200}
      classNames="popup"
      onEntered={() => closeToaster()}
    >
      <div className={`z-50 fixed flex popup pointer-events-none justify-center items-center top-0 left-0 bottom-0 right-0`}>
        <div className="bg-skin-base rounded-xl justify-center flex align-middle items-center  text-2xl text-white font-Kanit p-4 pr-8 pl-8">
          {toasterMessage}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("toaster")
  );
};

export default Toaster;
