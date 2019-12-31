import React, { useReducer } from "react";
import HookCounter from "./HookContainer/counter";
import CounterTwo from "./HookContainer/CounterTwo";
import CounterThree from "./HookContainer/CounterThree";
import CounterFour from "./HookContainer/CounterFour";
import CounterWithUseEffect from "./HookContainer/CounterWithUseEffect";
import MousePosition from "./HookContainer/MousePosition";
import IntervalCounter from "./HookContainer/IntervalCounter";
import DataFetching from "./HookContainer/DataFetching";
import DataFetchById from "./HookContainer/DataFetchById";
import ComponentC from "./HookContainer/ComponentC";
import ReducerCounterOne from "./HookContainer/ReducerCounterOne";
import ReducerCounterTwo from "./HookContainer/ReducerCounterTwo";
import logo from "./logo.svg";
import "./App.css";
import ReducerCounterThree from "./HookContainer/ReducerCounterThree";
import ReducerContextA from "./HookContainer/ReducerContextA";
import ReducerContextB from "./HookContainer/ReducerContextB";
import ReducerContextC from "./HookContainer/ReducerContextC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const ObjectTestContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

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
      {/* <ReducerCounterThree /> */}

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ReducerContextA />
        <ReducerContextB />
        <ReducerContextC />
      </CountContext.Provider>

      
    </div>
  );
}

export default App;
