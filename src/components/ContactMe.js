import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toasterHandler } from "../store/uiControllerSlice";
import { sendForm } from "./configs/firebaseHandler";
import Loading from "./UI/Loading";

const ContactMe = () => {
  const mailRef = useRef();
  const messageRef = useRef();
  const dispatch = useDispatch();
  const [focusMessage, setFocusMessage] = useState(true);
  const [focusMail, setFocusMail] = useState(true);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const submitHandler = async (event) => {
    setFormSubmitting(true);
    event.preventDefault();
    let response = true;
    if (messageRef.current.value.trim(" ") === "") response = "msg";
    if (mailRef.current.value.trim(" ") === "") response = "mail";
    switch (response) {
      case "msg":
        setFormSubmitting(false);
        dispatch(
          toasterHandler({
            active: true,
            message: "Message field is Empty",
            color: "bg-red-500",
          })
        );
        break;
      case "mail":
        setFormSubmitting(false);
        dispatch(
          toasterHandler({
            active: true,
            message: "Mail field is Empty.",
            color: "bg-red-500",
          })
        );
        break;

      default:
        const response = await sendForm(
          mailRef.current.value,
          messageRef.current.value
        );
        if (response) {
          setFormSubmitting(false);
          messageRef.current.value = "";
          mailRef.current.value = "";
          changeInputHandler("", "mailInput");
          changeInputHandler("", "messageInput");
          dispatch(
            toasterHandler({
              active: true,
              message: "Message Sended.",
              color: "bg-red-500",
            })
          );
        }
        else {
          setFormSubmitting(false);
          dispatch(
            toasterHandler({
              active: true,
              message: "Something went wrong.",
              color: "bg-red-500",
            })
          );
        }
        break;
    }
  };

  useEffect(() => {
    mailRef.current.value = localStorage.getItem("mailInput");
    messageRef.current.value = localStorage.getItem("messageInput");
    formValidationHandler();
  }, []);

  const formValidationHandler = () => {
    if (messageRef.current.value.trim() === "") {
      setFocusMessage(false);
    }
    if (mailRef.current.value.trim() === "") {
      setFocusMail(false);
    }
  };

  const changeInputHandler = (refCurrentValue, inputPlace) => {
    switch (inputPlace) {
      case "mailInput":
        localStorage.setItem("mailInput", refCurrentValue);
        break;

      case "messageInput":
        localStorage.setItem("messageInput", refCurrentValue);
        break;

      default:
        break;
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`w-full  m-auto justify-center text-center font-mono text-md overflow-hidden duration-500 bg-transparent`}
    >
      <div
        className={`font-mono max-w-5xl m-auto text-left duration-500 mt-4 ${
          !focusMail ? "translate-x-6 translate-y-10" : "translate-x-6"
        }  dark:text-zinc-500`}
      >
        E-mail:
      </div>
      <input
        onFocus={() => setFocusMail(true)}
        onBlur={() => formValidationHandler()}
        className="relative w-full m-auto max-w-5xl flex p-2 md:p-4 border-2 dark:border-gray-800  bg-transparent dark:text-zinc-600 mt-1 rounded-xl  duration-500"
        ref={mailRef}
        onChange={() => changeInputHandler(mailRef.current.value, "mailInput")}
      />
      <div
        onClick={() => {
          setFocusMessage(true);
          messageRef.current.focus();
        }}
        className={`font-mono max-w-5xl m-auto text-left duration-500 mt-4 ${
          !focusMessage ? "translate-x-6 translate-y-12" : "translate-x-6"
        }  dark:text-zinc-500`}
      >
        Message:
      </div>
      <textarea
        onFocus={() => setFocusMessage(true)}
        onBlur={() => formValidationHandler()}
        className="w-full m-auto max-w-5xl flex p-2 md:p-4 border-2 dark:border-gray-800 resize-none  bg-transparent  dark:text-zinc-600 mt-1 rounded-xl"
        rows="4"
        // placeholder="Message:"
        onChange={() =>
          changeInputHandler(messageRef.current.value, "messageInput")
        }
        ref={messageRef}
      />
      <button
        type="submit"
        className="text-white bg-skin-base w-1/2 max-w-2xl justify-center flex m-auto p-2 md:p-4 items-center mt-2 rounded-xl font-Kanit"
      >
        {formSubmitting ? <Loading /> : "Send Message!"}
      </button>
    </form>
  );
};

export default ContactMe;
