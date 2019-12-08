import React from "react";
import HookCounter from "./HookContainer/counter";
import CounterTwo from "./HookContainer/CounterTwo";
import CounterThree from "./HookContainer/CounterThree";
import CounterFour from './HookContainer/CounterFour';
import CounterWithUseEffect from './HookContainer/CounterWithUseEffect';

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      <CounterWithUseEffect />
    </div>
  );
}

export default App;
