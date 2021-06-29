for(let i=0 ; i<396 ;i++){
    addElement();
}
function addElement(){
    const newB=document.createElement("div");
    newB.className="box boxred";
    const currentdiv=document.querySelector(".container");
    currentdiv.appendChild(newB);
}

const box=document.querySelectorAll('.box');
box.forEach((item) => {
    item.addEventListener('click',() => {
        item.classList.toggle('boxred');
    })
})