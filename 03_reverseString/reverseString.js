const reverseString = function(string) {

    let reverse=""

    for(let i= 1; i < string.length + 1; i++){
        reverse+=string.at(-i)
    }
    return reverse
};
console.log(reverseString("hello"))
console.log(reverseString("hello there"))
console.log(reverseString("123! abc! Hello, Odinite."))
console.log(reverseString(""))
// Do not edit below this line
module.exports = reverseString;
