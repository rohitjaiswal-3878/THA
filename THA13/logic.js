const button = document.querySelector('button');
const memebox = document.getElementById('image');
console.log(memebox);

var min=0,max=5;
let random=parseInt(Math.random()*((max-min)+ min));




button.addEventListener('click', async function generator(){
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(data => 
        memebox.innerHTML=`<img src="${data.preview[random]}" width="400" height="400"/>`);
});


