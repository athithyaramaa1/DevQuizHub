// App.js
import { useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import * as React from "react";
import MaterialUISwitch from "./ModeSwitch";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    {/* Dark Mode <--> Light Mode  __ Toggle */}
      <div className={` ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="heading-container">
          {/* Heading */}
          <h1 className="Heading">DevQuizHub</h1>

          <div>
            <div>
              {/* <button className="toggleButton" >
                
              </button> */}
              {/* Dark Mode <-> Light Mode */}
              <MaterialUISwitch
                onClick={toggleDarkMode}
                className="toggleButton"
              />
            </div>
          </div>
        </div>
        {/* Question Box */}
        <QuestionBox darkMode={darkMode} />
      </div>
    </>
  );
};

export default App;
