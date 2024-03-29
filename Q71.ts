// Question71: Compare let and const: Create two examples where lets allows assignment but const doesnt. try to reassign a const-declared variable and catch the error.
// This program compare let and const statement.
let age =30;
age = 23;
console.log(age);
const nam = "Asma";
try {
    nam = "Haya"
} catch (error){
    console.log("error:Can't reassign a const-declare variable");
}