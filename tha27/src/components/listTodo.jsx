import { useSelector } from "react-redux";
import { deleteItem, doneItem } from "../reducer/todoAction";
import { useDispatch } from "react-redux";


const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);
    console.log(todos)
    return (
        <div className="list-todo-container">
            {todos.map((item, index) => (
                <div className="items" key={index}>
                    {(item.done === true) ? <div style={{ textDecoration: 'line-through', color: 'red' }}>{item.title}</div> :
                        <div style={{ textDecoration: 'none', color: 'black' }}>{item.title}</div>}
                    <button onClick={() => {
                        dispatch(deleteItem(index));
                    }}>Delete</button>
                    <div className="doneBtn">
                        {(item.done === true) ?
                            <button onClick={() => dispatch(doneItem({ title: item.title, done: false, index: index }))}>UnDone</button> :
                            <button onClick={() => dispatch(doneItem({ title: item.title, done: true, index: index }))}>Done</button>
                        }
                    </div>
                </div>

            ))}
        </div>
    )

}
export default ListTodo;