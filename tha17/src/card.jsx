const card = ({title,calorie})=>{
    // console.log(title,calorie);
    return (
        <div className="cards">
            <h1>{title}</h1>
            <p>You have consumed {calorie} cals today.</p>
        </div>
    )
}
export default card;