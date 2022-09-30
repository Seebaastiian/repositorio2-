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
// console.log = 18
/*
diagrama en T
variables : result | valores : 18
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
variables : result | valores : 15,10,10,15

*/





var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
//console.log = 15,10,20,15
/*
diagrama en T
variables : result | valores : var num = 15
*/





function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result); 
//console.log = 3,5,16
/* 
Diagrama en T 
variables : result | valores :
*/




function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
//console.log = 5,8
/*
diagrama en T 
*/




function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 //console.log = 2,5,3,8
 /*
 diagrama en T 
 */



 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
//console.log = 5.8.13
/*
diagrama en T 
*/





function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
//console.log = 5,3,6,3,5,8,19
/*
Diagrama en T
var sum
*/


