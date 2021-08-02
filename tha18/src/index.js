import React from 'react'
import ReactDOM from 'react-dom'
import Board from './chess'
import './style.css'

function App(){
    return (
    <div className="app">
        <Board/>
    </div>
    )
    
}

ReactDOM.render(<App/>,document.getElementById("root"));