import React from "react";
import Data from "./Component/Data";
import "./App.css";
import useDarkMode from "./hooks/DarkMode";

function App() {
  const [dark, setDark] = useDarkMode("dark", false);

  const toggle = (e) => {
    e.preventDefault();
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark-mode App" : "App"}>
      <button onClick={toggle}>Dark</button>
      <Data />
    </div>
  );
}

export default App;
