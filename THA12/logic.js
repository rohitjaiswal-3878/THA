
const button=document.querySelector('#btn');
const newlist=document.querySelector('#list');
button.addEventListener('click',()=>{
    let i=1;
    const inputvalue=document.querySelector('#inputfield');
    const adding=document.createElement('h2');
    adding.innerHTML=inputvalue.value;
    newlist.append(adding);
    inputvalue.value="";
    i++;
    adding.addEventListener('click',()=>{
        adding.style.textDecoration="line-through";
        adding.style.color="red";
        
    })
    adding.addEventListener('dblclick',()=>{
        newlist.removeChild(adding);
    })
})