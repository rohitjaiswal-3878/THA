import React , { useState } from 'react'
import Todoform from './Todoform'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({todos,completeTodo , removeTodo ,updatedTodos})=> {
    const [edit , setEdit] = useState({
        id:null,
        value:''
    })
    const submitUpdate = value=>{
        updatedTodos(edit.id,value);
        setEdit({
            id:null,
            value:''
        })
    }
    if(edit.id){
        return <Todoform onSubmit={submitUpdate}/>
    }
    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
           <div className="icons">
                <RiCloseCircleLine onClick = {()=>removeTodo(todo.id)} className="remove-todo"/>
                <TiEdit onClick = {()=>setEdit({id:todo.id,value:todo.text})} className="edit-todo"/>
            </div>
            <div key={todo.id} onClick = {()=>completeTodo(todo.id)} className='content'>
                <h1>{todo.text}</h1>
                <p className='calorie'>You consumed {todo.cal} calories.</p>
            </div>
            

        </div>
    ))
}
export default Todo;