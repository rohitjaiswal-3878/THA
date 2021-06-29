const box = document.querySelectorAll('.box');
const num = document.querySelector('.number');
const num1 = document.querySelector('.number1');

let a=0,b=25;

box.forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('boxclick')){
            item.classList.remove('boxclick')
            a=a-1;
            b=b+1;
            num.innerHTML=a;
            num1.innerHTML=b;
            
        
        }
        else{
            item.classList.add('boxclick');
            a=a+1;
            b=b-1;
            num.innerHTML=a;
            num1.innerHTML=b;
            
            
            
        }
        
      
    })
})

  // if (box.classList.contains('boxclick')) {
        //     box.classList.remove('boxclick');
        //     var a = +num;
        //     a++;

        // }
        // else {
        //     box.classList.add('boxclick');
        //     var b = +num1;
        //     b--;
        // }

