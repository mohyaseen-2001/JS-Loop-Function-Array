
/*q2
for (let i = 0; i <= 5; i++) {
    alert(i);
}
    */
/*q3*/
let result = ""; 

for (let i = 0; i <= 5; i++) {
    result += i + "\n"; 
}

alert(result); 
/*q4*/
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
/*q5

let number = prompt("Enter a number between 0 and 100:");

while (number < 0 || number > 100) {
    alert("Wrong! You entered an invalid number.");
    number = prompt("Enter a number between 0 and 100:");
}

alert("Valid number entered: " + number);
*/
/*q6*/
/*q7*
let number = prompt("Enter a number between 0 and 100:");

while (isNaN(number) || number < 0 || number > 100) {
    alert("Wrong! Please enter a valid number between 0 and 100.");
    number = prompt("Enter a number between 0 and 100:");
}

alert("Great! Valid number: " + number);
*/

let number = prompt("enter the number ");
let sum = 0;
let i; 

for (i = 0; i <= number; i++) {
    sum = sum + i;
}

let avg = sum / (i - 1);

alert("The sum from 0 to " + number + " is: " + sum);
alert("The average from 0 to " + number + " is: " + avg);