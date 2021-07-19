console.log("connected.....");
let color = ["red","green","black","pink","blue","orange","yellow"];
let min=0 ; max=7;

let box = document.getElementById('box');
box.addEventListener("click",()=>{
    let random = parseInt(Math.random()*((max-min)+min));
    box.style.backgroundColor = color[random];
})