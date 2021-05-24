//Ex1: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
// let array = [prompt("Enter a squence of number, separated by commans (,)")];
// let a = prompt("Enter a squence of number, separated by commans (,)").split(",");// Nhập dãy số có được ngắn cách bởi dấu phẩy
// let sum = 0;
// for (let i=0; i<a.length; i++){
//     sum = sum + parseInt(a[i]);
// }
// alert("Total of squence is: " + sum); 
//Ex2 + 3: 
// let a = [];
// a = prompt("Enter a squence number, separated by "," ").split(",");
// let swap;
//let len = a.length;
// for (let i=0; i<len-1; i++){
//     for(let j= i+1; j<len; j++){
//         if (a[i]>a[j]){
//             swap=a[i];
//             a[i]=a[j];
//             a[j]=swap;
//         }
//     }
// }
// for (let i=0; i<len; i++){
//     console.log(a[i]);
// }
// let min=a[0];
// for (let i=0; i<len; i++){
//     if (a[i]<min){
//         min=a[i];
//     }
// }
// console.log("Min= " + min);
//Ex3: 
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let n = Number(prompt("Enter a number "));
// let b = [];
// let dem = 0;
// for (let i=0; i<arr.length; i++){
//     if (n == arr[i]){
//         dem++;
//         b.push(i);
//     }
// }
// if (dem>0){
//     console.log(n + " is FOUND in array, position is: " + b);
// } else {
//     console.log(n + " is NOT foud in array");
// }
//Ex4:
//indexOf{
// for (let i=0; i<len; i++){
//     if (max==sheep[i]){
//         sheep[i]=8;
//     }
// }
//}
// let sheep = [5,7,300,90,24,50,75];
// let len = sheep.length;
// max = sheep[0];
// console.log("Hello my name is Hoang Hiep and here is my sheep sizes: ");
// console.log(...sheep);


// for (let i=0; i<len; i++){
//     if (max<sheep[i]){
//         max=sheep[i];
//     }
// }
// console.log("Now my biggest sheep has size " + max + " let's shave it! ");
// console.log("\n");
// pos = sheep.indexOf(max);
// sheep[pos] = 8; 
// console.log("After shearing, here is my flock");
// console.log(...sheep);
// console.log("\n");

// let month = Number(prompt("Enter month you want to grown your flock"));
// for(let j=1; j<=month; j++){
//     console.log("MONTH " + j);
// console.log("One month has passed, my sheep have grown, here are their sizes");
// for (let i=0; i<len; i++){
//     sheep[i]=sheep[i]+50;
// }
// console.log(...sheep);
// max = sheep[0];
// for (let i=0; i<len; i++){
//     if (max<sheep[i]){
//         max=sheep[i];
//     }
// }
// console.log("Now my biggest sheep has size " + max + " let's shave it! ");
// console.log("\n");
// pos = sheep.indexOf(max);
// sheep[pos] = 8;     
// console.log("After shearing, here is my flock");
// console.log(...sheep);
// console.log("\n");
// }

// let sizes = 0;
// for (let i=0; i<len; i++){
//     sizes=sizes+parseInt(sheep[i]);
// }
// let cost = sizes * 2;
// console.log("My flock has sizes in total: " + sizes);
// console.log("I would get " + sizes + " * 2$ = " + cost);
//Ex5:
// let names = [];
// names = prompt("Enter a suqence of names").split(",");
// for (let i=0; i<names.length; i++){
//     a.push("<" + names[i] + ">");
//     names[i] = "<" + names[i] + ">";
// }
// alert(...names);
//Ex6:
// let a = [];
// let num = [];
// num = prompt("Enter a squence of numbers").split(",");
// for (let i=0; i<num.length; i++){
//     if (num[i]%2!=0){
//         a[i]=num[i];
//     }
// }
// a = a.slice(",");
// alert(num + " => " + a);
