import { useState } from 'react'
const Meme = ({meme,setMeme})=>{
    const [form,setForm] = useState({
        template_id:meme.id,
        username:"rohit829",
        password:"rohitjaiswal",
        boxes:[]

    })
    const generator=()=>{
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index)=>{
            url+=`&boxes[${index}][text]=${box.text}`;
        })
        fetch(url).then(res => res.json()).then((data)=>{
            if(!data.success){
                return
            }else{
           setMeme({...meme,url:data.data.url})
            }
        })
    }
    return(
        <div className="meme">
            <img src={meme.url} alt="error"/>
            <div className="inputfield">
                {[...Array(meme.box_count)].map((_,index)=>(
                    <input type="text" placeholder={`Caption ${index+1}`} key={index}
                    onChange={
                        (e)=>{
                            const newBoxes = form.boxes;
                            newBoxes[index]={text:e.target.value};
                            setForm({...form,boxes:newBoxes})
                        }
                    }/>
                ))}
            </div>
            <div>
                <button onClick={()=>{generator()}}>Generate Meme</button>
                <button onClick={()=>{setMeme(null)}}>Choose Template</button>
            </div>
        </div>
        
    )
}
export default Meme;