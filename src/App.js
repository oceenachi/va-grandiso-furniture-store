import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./views/home";
import { Transition } from "react-transition-group";
import MidSection from "./views/MidSection";
import BestSellers from "./views/BestSelling";
import BrandSection from "./views/BrandSection";
import FooterSection from "./views/Footer";
import Button from "./atoms/button/button";

const duration = 125;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out 0s`,
};
const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

function App({ in: inProp }) {
  const [isViewing, setisViewing] = useState(0);
  const [timeOut, setTime] = useState();

  const handleDiscClick = (e) => {
    const id = e.target.id;
    clearTimeout(timeOut);
    setisViewing(Number(id));
  };

  useEffect(() => {
    const timeOutting = setTimeout(() => {
      isViewing >= 3 ? setisViewing(0) : setisViewing(isViewing + 1);
    }, 3000);
    setTime(timeOutting);
  }, [isViewing]);

  return (
    <div className="App container">
      <Transition
        in={inProp}
        timeout={{
          appear: 100,
          enter: 300,
          exit: 300,
        }}
      >
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Home id={isViewing} handleDiscClick={handleDiscClick} />
          </div>
        )}
      </Transition>
      <MidSection />
      <BestSellers/>
      <Button squared title="signup"> </Button>
      {/* <BrandSection/> */}
      {/* <FooterSection/> */}
    </div>
  );
}

export default App;
