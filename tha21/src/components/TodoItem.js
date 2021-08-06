import React, { useState } from 'react'
import Todoform from './Todoform'
import Todo from './Todo'

const TodoItem = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text) {
            return;
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
        console.log(...todos);
    }
    const removeTodo = id => {
        const removeArr = todos.filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    const updatedTodos = (todoId, newValue) => {
        if (!newValue.text) {
            return;
        }
        setTodos(a => a.map(item =>
            item.id == todoId ? newValue : item
        ))


    }
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        })

        setTodos(updatedTodos);
    }
    return (
        <div className="container">
            <h1 className="hh">Calorie Read Only</h1>
            <div className="box">
                <Todoform onSubmit={addTodo} />
                <div className="items">
                    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodos={updatedTodos} />
                </div>
            </div>
        </div>

    )
}
export default TodoItem;