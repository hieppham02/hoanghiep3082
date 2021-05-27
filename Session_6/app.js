// //Bai 1:
// // function bai1 (str,size){
// //     let res = '';
// //     for (let i = size; i > 0; i--){
// //         res += str[i];
// //     }
// //     return res;
// // }
// // let strInput = prompt("Type something here ");
// // let n = strInput.length;
// // console.log(bai1("\n"+strInput,n));

// //Bai 2:
// // function bai2(str,n) {
// // 	for (let i = 0; i < n; i ++){
// //         let firstEle = str[i].split("");
// //         firstEle[0] = firstEle[0].toUpperCase();
// //     }
// // }
// // let inputStr = 'this is a tree'.split(" ");
// // let n = inputStr.length;
// // console.log(bai2("\n"+inputStr,n));

// // //Bai 3:
// // function bai3(arr) {
// //     let newArr = []
// //     for (let i = 0; i < arr.length; i++) {
// //       if (newArr.indexOf(arr[i]) === -1) {
// //         newArr.push(arr[i])
// //       }
// //     }
// //     return newArr
// //   }
// //   console.log(bai3([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
// //Bai 4:
// function bai4 (arr){
//     let userInput = prompt("Enter C/R/U/D (Create/Read/Update/Delete");
//     if (userInput == 'C'){
//         let add = {
//             name: prompt("Name?"),
//             age: Number(prompt("Age?")),
//             salary: Number(prompt("Salary?")),
//             rank: prompt("rank?")
//         }
//         arr.push(add);
//         console.log(arr);
//     }
//     else if (userInput == 'R'){
//         for (let key in arr){
//             console.table(arr[key])
//         }
//     }
//     else if (userInput == "U"){

//     }
    

// }
// let mindX = [
//     {
//         name: 'Hai',
//         age: 24,
//         salary: 500,
//         rank: 'fresher'
//     },
//     {
//         name: 'Duong',
//         age: 27,
//         salary: 3000,
//         rank: 'Senior'
//     },
//     {
//         name: 'Dat',
//         age: 30,
//         salary: 5000,
//         rank: 'CTO'
//     }
// ]
// bai4(mindX);