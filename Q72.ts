// Question72: Blockscop with let and const: Demonstrate blockscop by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible ouside of it.
// Demonstrating blockscop.
{
    let blockLet = "Seen only inside the block";
    const blockconst ="also only inside the block";
    console.log(blockLet);
    console.log(blockconst);
}
try {
    console.log(blockLet);


} catch(error) {
    console.log("`blockLet` is not accessable outside the block.");
}
try {
    console.log(blockconst);


} catch(error) {
    console.log("`blockconst` is not accessable outside the block.");
}