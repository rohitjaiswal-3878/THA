import Box from './box'
function Board(){
    const arr =Array.from({length:25},(item,index)=>item=index+1);
    return (
    <div className="container">
        {
            arr.map((element,index)=>{
                let color;
                if(index%2===0){
                    color="blue"
                }
                else{
                    color="pink"
                }
                return <div className="box" key={index} style={{backgroundColor:color}}/>
            })
        }
    </div>
    )
}
export default Board;