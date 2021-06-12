//Write a JavaScript function to check whether an `input` is an array or not

function is_array(val){
    return Array.isArray(val);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// Write program to clone an array?

function array_Clone(){
    numbercp=[arguments.length];

    for(let i=0 ; i<arguments.length ; i++){
        numbercp[i]=arguments[i];
        return numbercp[i];
    }
    
    
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


//write a program to get the first element of the array

function first(){
    return arguments[0];
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Write a simple JavaScript program to join all elements of the following array into a string.
mycolor=["Red","Green","white",'blue'];
console.log(mycolor.join(','));
console.log(mycolor.join('+'));


//Write a JavaScript program to find the most frequent item of an array
frearr=[];
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf=1;

for(var i=0 ; i<arr1.length ; i++){
    var count=0;
    for(var j=i;j<arr1.length;j++){
        if (arr1[i]==arr1[j])
            count++;
        if (mf<count){
            mf=count;
            item=arr1[i];
        }
        
    }
    
}
console.log(item+" ( "+mf+" times )");

