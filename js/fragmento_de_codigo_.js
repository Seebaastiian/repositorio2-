function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
// como no tiene variables no se puede hacer 




function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
//console.log = 15
/*
diagrama en T 
variables : result | valores : hello();
*/



function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
// console.log = 15, 3 = 18
/*
diagrama en T
variables : result | valores : numplus(3)
*/




var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
//console.log = 15,10,10,15
/*
diagrama en T
variables : result | valores : var num = 