import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem} from "../reducer/todoAction";
const AddTodo = () => {
    const dispatch = useDispatch();
    const [item,setItem] = useState([]);
    console.log(item);
    return (
        <div class ="add-todo-container">
            <input type="text" value={item} placeholder="enter todo" onChange={(e)=>{
                setItem(e.target.value)
            }}></input>
            <button className="add-todo-btn" onClick={()=>{dispatch(addItem({
                title:item,
                done:false
            }))}}>Add todo</button>
        </div>
    )
}
export default AddTodo;