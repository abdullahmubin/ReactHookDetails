import React from "react";
import HookCounter from "./HookContainer/counter";
import CounterTwo from "./HookContainer/CounterTwo";
import CounterThree from "./HookContainer/CounterThree";
import CounterFour from './HookContainer/CounterFour';
import CounterWithUseEffect from './HookContainer/CounterWithUseEffect';
import MousePosition from './HookContainer/MousePosition';
import IntervalCounter from './HookContainer/IntervalCounter';
import DataFetching from './HookContainer/DataFetching';
import DataFetchById from './HookContainer/DataFetchById';
import ComponentC from './HookContainer/ComponentC';
import ReducerCounterOne from './HookContainer/ReducerCounterOne';
import ReducerCounterTwo from './HookContainer/ReducerCounterTwo';
import logo from "./logo.svg";
import "./App.css";
import ReducerCounterThree from "./HookContainer/ReducerCounterThree";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const ObjectTestContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      {/* <CounterWithUseEffect /> */}
      {/* <MousePosition /> */}
      {/* <IntervalCounter /> */}

      {/* <DataFetching /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={'Abdullah al Mubin'}>
        <ChannelContext.Provider value={'Channel name'}>
          <ObjectTestContext.Provider value={'testing..'}>
            <ComponentC />
          </ObjectTestContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerCounterOne /> */}
      {/* <ReducerCounterTwo/> */}
      <ReducerCounterThree />
      
    </div>
  );
}

export default App;
