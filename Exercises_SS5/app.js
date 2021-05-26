//Bai 1:
// function startWith (str){
//     return str.indexOf("Java") === 0;
// }
// let str = prompt("Enter a string");
// console.log(startWith(str));
//Bai 2:
// function findMaxDiff (arr,n){
//     let b = [];
//     if (n<=1){
//         return 0;
//     }else{
//         for (let i=0; i<n; i++){
//         b[i] = a[i]-a[i+1];
//         }
//     let max = b[0];
//     for (let i=0; i<n; i++){
//         if (b[i]>max){
//             max=b[i];
//         }
//     }
//     return max;
//     }  
// }
// let a =  [1, -10, 5, 18, -9, 5];
// let n = a.length;
// console.log(findMaxDiff(a,n));
//Bai 3:
// function first (arr,n,length){
//     if (n<=0){
//         return [];
//     } else if (n>length){
//         return arr;
//     }else if (n<=length) {
//         return arr.splice(0,n);
// }
// }
// let n = Number(prompt("Enter number of element "));
// let a = [1,5,62,-13,3,5];
// let length = a.length;
// console.log(...first(a,n,length));
//Bai 4:
// function checkInt (number1,number2){
//     if (((number1 < 0) && (number2>0)) || ((number2<0) && (number1>0))){
//         return 1;   
//     } else if ((number1==0) || (number2==0)) {
//         return 0;
//     } else {
//         return 0;
//     }
// }
// let a = Number(prompt("Enter number a:"));
// let b = Number(prompt("Enter number b:"));
// if (checkInt(a,b)==1){
//     alert("TRUE");
// } else {
//     alert("FALSE");
// }
//Bai 5:
// function JavaScript (n){
//     let x = Math.abs(n-13);
//     if (n>13){
//         return x*2;
//     } else {
//         return x;
//     }
// }
// let inputNumber = Number(prompt("Enter a number"));
// alert(JavaScript(inputNumber));
//Bai 6:
// function findMaxDiff2 (arr,n){
//     let maxDiff = arr[0];
//     let b =[];
//     for (let i=0; i<n; i++){
//         b[i]=arr[i+1]-maxDiff;
//     }
//     let max = b[0];
//     for (let i=0; i<n; i++){
//         if (max>b[i]){
//             max=b[i];
//         }
//     }
//     return max;
// }
// let n = [1, 2, 3, 8, 9].length;
// console.log(findMaxDiff2([1, 2, 3, 8, 9],n));