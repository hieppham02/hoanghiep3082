// // //Ex1: Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color
// // let products = [
// //     {   
// //         Name: "Xiaomi portable charger 20000mah",
// //         Brand: "Xiaomi",
// //         Price: 428,
// //         Color: "White",
// //         Category: "Charger"
// //     },
// //     {
// //         Name: "VSmart Active 1",
// //         Brand: "VSmart",
// //         Price: 5487,
// //         Color: "Black",
// //         Category: "Phone"
// //     },
// //     {
// //         Name: "iPhone X",
// //         Brand: "Apple",
// //         Price: 21490,
// //         Color: "Gray",
// //         Category: "Phone"
// //     },
// //     {
// //         Name: "Samsung Galaxy A9",
// //         Brand: "Samsung",
// //         Price: 8490,
// //         Color: "Blue",
// //         Category: "Phone"
// //     }
// // ]
// // console.table(products);
// // console.clear();
// // // // 1.1:Print/log name and price of all the products out
// // // //https://stackoverflow.com/questions/34507674/javascript-get-value-from-an-object-inside-an-array/34507712
// // // for ( let i = 0; i < products.length; i++ ){
// // //     console.log("#"+ parseInt(i+1) + ": " +  products[i].Name );
// // //     console.log('   Price',products[i].Price);
// // //     console.log('-----------------------------------------');
// // // }
// // // // 1.2: Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
// // // let input = Number(prompt("Enter product possition:"));
// // // console.clear();
// // // for ( let i = 0; i < products.length; i++ ){
// // //     if ( input == i+1 ){
// // //         console.log('Name:',products[i].Name);
// // //         console.log('Brand:',products[i].Brand);
// // //         console.log('Price: '+products[i].Price);
// // //         console.log('Color:',products[i].Color);
// // //         console.log('Category',products[i].Category);      
// // //     }
// // // }
// // // // 1.3: Write a script printing/logging out the products based on category input by users
// // // let Category= prompt("Enter your category");
// // // for ( let i = 0; i < products.length; i++ ){
// // //     if ( Category== products[i].Category ){
// // //         console.log('Name:',products[i].Name);
// // //         console.log('Price: '+products[i].Price);
// // //         console.log('--------------------------');
// // //     }
// // // }
// // //1.4: 
// // products[0].Providers = 'PhukienzeroDientuccc'; 
// // products[1].Providers = 'tgdd';
// // products[2].Providers = 'tgdd';
// // products[3].Providers = 'tgdd';
// // console.table(products);
// // // for ( let i = 0; i < products.length; i++ ){
// // //     console.log("#" + parseInt(i+1) + ". " + products[i].Name );
// // //     console.log("    Price: " + products[i].Price );
// // //     console.log("    Providers: " + products[i].Providers );
// // //     console.log('-----------------------------------------------');
// // // }
// // //1.5:
// // let provider = prompt("Enter providers");
// // for ( let i = 0; i < products.length; i++ ){
// //     if ( provider == products[i].Providers){
// //         console.log('Name:',products[i].Name);
// //         console.log('Brand:',products[i].Brand);
// //         console.log('Price: '+products[i].Price);
// //         console.log('Color:',products[i].Color);
// //         console.log('Category:',products[i].Category);
// //         console.log('Provides:',products[i].Providers); 
// //         console.log('-----------------------------------');  
// //     }
// // }
// //Ex2: Write a script to store and process the learning tasks to become a front-end developer
// let tasks = [
//     none = {

//     },
//      {
//         part: "HTML",
//         status: "false"
//     },
//      {
//         part: "CSS",
//         status: "false"
//     },
//      {
//         part: "Basic of JavaScript",
//         status: "false"
//     },
//      {
//         part: "Node Package Manager",
//         status: "false"
//     },
//      {
//         part: "Git",
//         status: "false"
//     }
// ]
// for ( let i = 1 ; i < tasks.length; i ++ ){
//     console.log(parseInt(i) + ". " +  tasks[i].part);
//     console.log('   Complete:',tasks[i].status);
// }
// let userInput = prompt("Enter your conmmand (New, Delete, Update, Complete)");
// if ( userInput == "new" ){
//     let n = prompt("Enter new task");
//     let f = {
//             part: n,
//             status: "false"
//         }
//     tasks.push(f);
// }
// else if ( userInput == "update" ){ 
//     let index = Number(prompt("Enter possition"));
//     for ( let i = 1; i < tasks.length; i ++){
//         if ( i == index ){
//             tasks[i].part = prompt("Enter new title");
//         }
//     }
// }
// else if ( userInput == "complete" ){
//     let index = Number(prompt("Enter possition"));
//     for ( let i = 1; i < tasks.length; i ++ ){
//         if ( i == index ){
//             tasks[i].status = "[x]";
//         }
//     }
// }
// else if ( userInput == "delete" ){
//     let index = Number(prompt("Enter possition"));
//     for ( let i = 1; i < tasks.length; i ++ ){
//         if ( i == index ){
//             tasks.splice(i-1,1);
//         }
//     }
// }
// console.clear();
// for ( let i = 1 ; i < tasks.length; i ++ ){
//     console.log(parseInt(i) + ". " +  tasks[i].part);
//     console.log('   Complete:',tasks[i].status);
// }
console.log("Hi there, this is my learning tasks to front-end developer career:");
// let tasks = [
//     none = {

//     },
//     a = {
//         part: "HTML",
//         status: "[ ]"
//     },
//     b = {
//         part: "CSS",
//         status: "[ ]"
//     },
//     c = {
//         part: "Basic of JavaScript",
//         status: "[ ]"
//     },
//     d = {
//         part: "Node Package Manager",
//         status: "[ ]"
//     },
//     e = {
//         part: "Git",
//         status: "[ ]"
//     },
//     f = {
//         part: "ReactJS",
//         status: "[ ]"
//     }
// ]
// for ( let i = 1; i < tasks.length; i ++ ){
//     console.log(i + ". " + tasks[i].status + " " + tasks[i].part);
// }
// let index = prompt("If you complete one of them, enter that task possition ");
//     for ( let i = 1; i < tasks.length; i ++ ){
//         if ( i == index ){
//             tasks[i].status = "[x]";
//     }
// }
console.clear();
for ( let i = 1; i < tasks.length; i ++ ){
    console.log(i + ". " + tasks[i].status + " " + tasks[i].part);
}