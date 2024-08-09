const sumAll = function(int1, int2) {
let finalNumber= 0
if ((int1 < 0 || int2 <0) || !(Number.isInteger(int1) && Number.isInteger(int2))){
    finalNumber="ERROR"

}else if (int1 < int2){
    for(let i=int1; i<int2+1; i++){
        finalNumber += i
    }
}else{
    for(let i=int2; i<int1+1; i++){
        finalNumber += i
    }
}

return finalNumber
};
console.log(sumAll(1, 4))
console.log(sumAll(1, 4000))
console.log(sumAll(123, 1))
console.log(sumAll(-10, 4))


// Do not edit below this line
module.exports = sumAll;
