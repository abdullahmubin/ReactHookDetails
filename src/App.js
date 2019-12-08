import React from "react";
import HookCounter from "./HookContainer/counter";
import CounterTwo from "./HookContainer/CounterTwo";
import CounterThree from "./HookContainer/CounterThree";
import CounterFour from './HookContainer/CounterFour';
import CounterWithUseEffect from './HookContainer/CounterWithUseEffect';
import MousePosition from './HookContainer/MousePosition';

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      {/* <CounterWithUseEffect /> */}
      <MousePosition />
    </div>
  );
}

export default App;
