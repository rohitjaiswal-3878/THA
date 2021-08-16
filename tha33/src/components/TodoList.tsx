import React from "react";

interface TodoListProps {
    title: String,
    done: boolean,
}
const TodoList = ({ title, done }: TodoListProps) => {
    return (
        <div className="todo-list">
            {title}
        </div>
    )
}
export default TodoList;