const IncCounter = (num:number) => {
    return {
        type:"INCREMENT",
        payload:num
    }
}
const DecCounter = (num:number) =>{
    return {
        type:"DECREMENT",
        payload:num
    }
}
export { IncCounter,DecCounter };