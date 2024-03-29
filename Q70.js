"use strict";
// Question70:Understanding let in loops: Write a function that uses a loop with the let keword to print numbers from 1 to 5. explain how the let keyword affects the visibility of the loop variable.
//  this function print numbers from 1 to 5
function printnumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printnumbers();
