let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenval='';
for(item of buttons){
    item.addEventListener('click', (e)=>
{
    buttonText = e.target.innerText;
    console.log("button is clicked:",buttonText);
    if(buttonText=='x'){
        buttonText='*';
        screenval+=buttonText;
        screen.value=screenval;
    }
    else if(buttonText=='='){
        
        screen.value=eval(screenval);
    }
    else if(buttonText=="c"){
        screenval="";
        screen.value=screenval;
    }
    else{
        screenval+=buttonText;
        screen.value=screenval;
    }
})
}