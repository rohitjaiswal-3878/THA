import { func } from 'prop-types';
import React from 'react'
import ReactDOM from 'react-dom'
import logo from './1.jpg'
import './index.css'
 
function App(){
    return (
        <div className="app">
        <div className="container">
            <img src={logo} alt="img shown" width="200" height="100"/>
            <h1>React Card</h1>
            <p>Enjoy your life!</p>
        </div>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));