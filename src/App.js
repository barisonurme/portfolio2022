import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import Backdrop from "./components/UI/Backdrop";
import Modal from "./components/UI/Modal";
import Transition from "./components/UI/Transition";
import Skills from "./components/Skills";
import BlankSpace from "./components/BlankSpace";
import Toaster from "./components/UI/Toaster";
import Work from "./components/Work";
import { useSelector } from "react-redux";
import Header from "./components/Header";

function App() {
  const uiController = useSelector((store) => store.uiController);
  const transitionFinish = uiController.transitionFinish;


  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-zinc-100 selection:bg-skin-inverted">
      <Toaster />
      <Transition />
      <Work />
      {!transitionFinish && (
        <>
          <Header />
          <Modal />
          <Backdrop />
          <Works />
          <Skills />
          {/* <svg
            className="h-8 duration-500 -translate-y-8 fill-white dark:fill-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 183.27 9.89"
            width="100%"
            height="15"
            fill="white"
            preserveAspectRatio="none"
          >
            <path
              class="cls-1"
              d="M183.27,9.89H0V0H0C60.76,7.81,122.51,7.81,183.27,0h0s0,9.89,0,9.89Z"
            ></path>
          </svg> */}
          <div className={`p-2 flex w-full  flex-col`}>
            <div className="text-4xl font-black decoration-skin-base text-skin-base text-center justify-center mb-6 mt-16 bg-white dark:bg-gray-900 bg-skin-base dark duration-500 tracking-wider font-Kanit selection:bg-skin-base">
              CONTACT ME
            </div>
            <ContactMe />
          </div>
          <BlankSpace size={8} />
        </>
      )}
    </div>
  );
}

export default App;
