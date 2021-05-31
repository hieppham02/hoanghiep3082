//Bai 1: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.
// function reverse(str) {
//     let reversed = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i]
//     }
//     console.log(reversed) // olleh
// } 
//   let str_input = "programing"
//   reverse(str_input)

//Bai 2:Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. 
// function uppercase(str) {
// 	let strArr=str.split(" ");
// 	for(let i=0;i<strArr.length;i++){
//         let charArr=strArr[i].split("");
// 	    charArr[0]=charArr[0].toUpperCase();
//         strArr[i]=charArr.join("");
// 	}
// 	return strArr.join(" ");
// }
// let input_str = "this is test"
// console.log(uppercase(input_str))

//Bai 3: Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
// function same (arr){
//     let tg;
//     for (let i=0; i<arr.length-1; i++){
//         for (let j=i+1; j<arr.length; j++){
//             if (arr[i]===arr[j]){
//                 arr[i]=arr[j+1];
//                 arr.length--;
//                 i--;
//             }
//         }
//     }
//     // for (let i=0; i<arr.length-1; i++){
//     //     for (let j=i+1; j<arr.length; j++){
//     //         if (arr[i]>arr[j]){
//     //             tg=arr[i];
//     //             arr[i]=arr[j];
//     //             arr[j]=tg;
//     //         }   
//     //     }
//     // }
//     console.log(...arr);
    
// }
// let Arr=prompt("Nhập mảng bất kỳ, các phần tử cách nhau bằng dấu phẩy (,)").split(",");
// same(Arr);

//Bai 4:
// function crud (arr,userInput){
//     console.table(arr);
//     if (userInput === "r"){
//         console.table(arr);
//     } else if (userInput === "c"){
//         let name = prompt("Tên?");
//         let age = Number(prompt("Tuổi?"));
//         let rank = prompt("Chức vụ?")
//         let salary = Number(prompt("Lương?"));
//         let add = {
//             name: name,
//             age: age,
//             rank: rank,
//             salary: salary
//         }
//         arr.push(add);
//         console.table(arr)
//     } else if (userInput === "u"){
//         //let index = 1;
//         let index = prompt("Nhập số thứ tự cần sửa thông tin");
//         index = index - 1;
//         for (let i = 0; i < arr.length; i++){
//             if (i === index){
//                 let t = prompt("Nhập thông tin cần chỉnh sửa (name/age/rank/salary)").toLowerCase();
//                     if ( t === "name" ){
//                        arr[i].name = prompt("Ten?");         
//                     } else if ( t === "age" ){
//                         arr[i].age = Number(prompt("Tuoi?"));
//                     }  else if ( t === "rank" ){
//                         arr[i].age = Number(prompt("Chuc vu?"));
//                     }  else if ( t === "salary" ){
//                         arr[i].age = Number(prompt("Luong?"));
//                     }
//             }
//         }
//         console.table(arr);
//     } else if (userInput === "d"){
//         // let pos = 1;
//         let pos = Number(prompt("Nhap vi tri can xoa"));
//         pos = pos - 1;
//         for (let i = 0; i < arr.length; i ++){
//             if (i === pos){
//                 arr.splice(i,1);
//             }
//         }
//         console.table(arr);
//     }
// }
// let input = prompt("Nhập thao tác C/R/U/D (Creat/Read/Update/Delete) ").toLowerCase();
// let staff = [
//     {
//         name: "Hai",
//         age: 21,
//         rank: "Fresher",
//         salary: 350
//     },
//     {
//         name: "Ngoc",
//         age: 24,
//         rank: "Senior",
//         salary: 1500
//     },
//     {
//         name: "Quoc",
//         age: 27,
//         rank: "Tech lead",
//         salary: 3500
//     }
// ]
// crud(staff,input);

//Bai 5:
// function namNhuan (year){
//     if (year % 400 == 0) 
//         return true; 
//     if (year % 4 == 0 && year % 100 != 0) 
//         return true;
//     return false; 
// }
// function dayMonthYear (){
//     let day = 29;
//     let month = 2;
//     let year = 2039 ;
    
    
// }
// dayMonthYear();

