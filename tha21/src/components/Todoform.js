import React,{ useState } from 'react'

const Todoform = (props)=>{
    const [input,setInput] =useState("");
    const [input2,setInput2] = useState();
    const handleChange = (e)=>{
        setInput(e.target.value);

    }
    const handlechange2 = (e) =>{
        setInput2(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*100),
            text:input,
            cal:input2
        })
        setInput('');
        setInput2('');
    }
    return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <div className="inputs">
        <input type="text" className="todo-input" placeholder="food name" onChange={handleChange}
        value={input} ></input>
        <input type="number" placeholder="calories" onChange={handlechange2} value={input2} className="todo-input2"/>
        </div>
        <button className="todo-button">Add Item</button>
    </form>
    )
}
export default Todoform;