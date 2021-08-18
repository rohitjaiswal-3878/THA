interface ActionType{
    type:String,
    payload:number
}


const CounterReducer = (state=0,action:ActionType) => {
    switch(action.type){
        case "INCREMENT":
            return state+ action.payload;
        case "DECREMENT":
            return state- action.payload;
        default:
            return state;
    }
} 
export default CounterReducer;