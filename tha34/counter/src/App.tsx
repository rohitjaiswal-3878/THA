import React from 'react';
import './App.css';
import { useDispatch,useSelector } from "react-redux";
import { IncCounter,DecCounter } from "./actions/index";
import { reducerType } from './reducers';
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state:reducerType) => state.counter);
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(IncCounter(3))
      }}>+</button>
      <div className="counter">{counter}</div>
      <button onClick={() => {
        dispatch(DecCounter(3))
      }}>-</button>
    </div>
  );
}

export default App;
