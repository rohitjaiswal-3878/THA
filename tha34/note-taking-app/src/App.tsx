import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import{ noteType } from "./reducers/index"
import { addNote, deleteNote } from './actions';


function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state:noteType) => state.notes);
  const [input,setInput] = useState<string>("");
  return (
    <div className="App">
      <div className="container">
      <input type="text" onChange={(e) => {
        setInput(e.target.value)
      }}></input>
      <button onClick={() => {
        dispatch(addNote(input));
        setInput("");
      }}>Add</button>
      
      <div className="notes">
        <ul>
        {notes.map((note:string,index:number)=>(
          <li key={index}>
            <h3>{note}</h3>
            <button onClick={() => {
              dispatch(deleteNote(index))
            }}>Delete</button>
          </li>
        ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
