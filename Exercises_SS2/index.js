//Ex1: Write a program to print out
// a. 7 numbers, starting from 0 (no user input)
// for (let i = 0; i < 7; i++){
//     console.log(i);
// }
// b. n numbers, starting from 0, n entered by user
// const n = Number(prompt("Enter a number"));
// for (let i = 0; i < n; i++){
//     console.log(i);
// }
//c. A sequence of numbers, starting from 3, ending before n, n entered by user
// const n = Number(prompt("Enter a number"));
// for (let i = 3; i < n; i++){
//      console.log(i);
// }
// d. A sequence of numbers, starting from c, ending before n, c and n entered by user
// const c = Number(prompt("Starting number"));
// const n = Number(prompt("Ending number"));
// for (let i = c; i < n; i++){
//     console.log(i);
// }
// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// const c = Number(prompt("Starting number"));
// const n = Number(prompt("Ending number"));
// for (let i = c; i < n; i+=3){
//     console.log(i);
// }
// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// const c = Number(prompt("Start"));
// const n = Number(prompt("End"));
// const s = Number(prompt("Step"))
// for (let i = c; i < n; i+=s){
//     console.log(i);
// }

//Ex2: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// const n = Number(prompt("Enter a number"));
// let result = 1;
// for (let i = 1; i <= n; i++){
//     result *= i;
// }
// alert("The factorical of " + n + " is " + result);

//Ex3: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// const age = Number(prompt("Enter your age"));
// if (age < 14 ){
//     alert ("You are not old enough to view this content");
// }
// else if (age >= 14){
//     alert ("Go to vnxx");
// }
// //Ex4: Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// let n = Number(prompt("Enter a number "));
// if (n < 9/2) {
//     alert("Lower half of 9");
// }
// else if (n> 9/2){
//     alert("High half of 9");
// }
// else if (n == 9/2){
//     alert("Equal half of 9");
// }

//Ex5: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// const n = Number(prompt("Enter N"));
// const x = Number(prompt("Enter X"));
// if (x < n/2){
//     alert(x + " is in lower half of " + n);
// } else {
//     alert(x + " is in higher half of " + n);
// }
//Ex6: Write a script to check if a number is even (divisible by 2) or odd number
// const x = Number(prompt("Enter a number "));
// if (x % 2 != 0){
//     alert(x + " is an odd number ");
// }
// else {
//     alert(x + " is an even number ");
// }

//Ex7: Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for (let i = 1 ; i <= 3; i++)
// {
//     console.log("L");
// }
// for (let i = 1 ; i <= 3; i++)
// {
//     console.log("H");
// }
// b. n L’s and H’s in total, n entered by user
// let n = Number(prompt("Enter total number of L's and H's"));
// let x = Math.ceil(n/2);
// let y = n - x;
// for (let i = 1; i <= x; i++){
//     console.log("L");
// }
// for (let i = 1; i <= y; i++){
//     console.log("H");
// }
// c. 8 1’s and 0’s in total, consecutively
// for (let i = 1; i <= 8/2; i++){
//     console.log("1");
//     console.log("0");
// }
// d. n 1’s and 0’s in total, consecutively, n entered by user
// const n = Number(prompt("Enter total of 1's and 0's"));
// for (let i = 1; i <= Math.ceil(n/2); i++){
//     console.log("1");
//     console.log("0");
// }

//Ex8. rite a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation
// And then based on the calculated BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30
// const mass = Number (prompt ("Enter your weight in kg"));
// const height_uncovert = Number (prompt ("Enter your height in cm"));
// let height = height_uncovert/100;
// let BMI_unfix = mass/(height**2);
// let BMI = BMI_unfix.toFixed(1);
// if (BMI < 16){
//     alert(" Severely underweight");
// }
// if (BMI >= 16 && BMI <= 18.5){
//     alert("You are Underweight");
//     alert(" Your BMI is " + BMI);
// }
// if (BMI > 18.5 && BMI < 25){
//     alert("You are Normal ");
//     alert(" Your BMI is " + BMI);
// }
// if (BMI >= 25 && BMI <= 30){
//     alert("You are Overweight ");
//     alert(" Your BMI is " + BMI);
// }
// if (BMI > 30){
//     alert("You are Obese :))");
//     alert(" Your BMI is " + BMI);
// }
