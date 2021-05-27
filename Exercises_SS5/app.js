//Bai 1:
// function startWith (str){
//     return str.indexOf("Java") === 0;
// }
// let str = prompt("Enter a string");
// console.log(startWith(str));

//Bai 2:
// function findMaxDiff (arr){
//     if( arr.length === 0){
//       return 0;
//     }else if(arr.length === 1){
//       return 0;
//     }else {
//      let  max = Math.abs(arr[1] - arr[0]);
//          for(let i = 1; i < arr.length; i++)
//              if(Math.abs(arr[i+1]-arr[i]) > max)
//                  max = Math.abs(arr[i+1] - arr[i]);
//          return max;
//     }
//    }
// let a =  [1, -10, 5, 18, -9, 5];
// console.log(findMaxDiff(a));

// function first (arr,n){
//     let b = [];
//     if (n<=0){
//         return [];
//     } else if (n>arr.length){
//         return arr;
//     }else if (n<=arr.length) {
//         // return arr.splice(0,n);
//         for (let i=0; i<n; i++){
//             b[i] = a[i];
//         }
// }
// console.log(...b);
// }
// let n = Number(prompt("Enter number of element "));
// let a = [1,5,62,-13,3,5];
// console.log(first(a,n,length));

//Bai 4:
// function checkInt (number1,number2){
//     if (((number1 < 0) && (number2>0)) || ((number2<0) && (number1>0))){
//         alert("TRUE")   
//     } else if ((number1==0) || (number2==0)) {
//         alert("FALSE");
//     } else {
//         alert("FALSE");
//     }
// }
// let a = Number(prompt("Enter number a:"));
// let b = Number(prompt("Enter number b:"));
// checkInt(a,b);

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
//O(n^2)
// function findMaxDiff2( arr){  
// let size = arr.length;   
// let maxDiff = arr[1] - arr[0];
//   for (let i = 0; i < size; i++)
//   {
//     for (let j = i+1; j < size; j++)
//     {    
//       if (arr[j] - arr[i] > maxDiff)
//         maxDiff = arr[j] - arr[i];
//     }
//   }        
//   return maxDiff;
// }
//O(n)
// function findMaxDiff2(arr){
//         let size = arr.length;
//         let maxDiff = arr[1] - arr[0];
//         let minElement = arr[0];
//         for (let i = 0; i<size; i++) {
//             if (arr[i] - minElement > maxDiff)
//                 maxDiff = arr[i] - minElement;
//             if (arr[i] < minElement)
//                 minElement = arr[i];
//         }
//         return maxDiff;
// }
// let arr = [1,5,3,8,9];
// console.log(findMaxDiff2(arr));       
