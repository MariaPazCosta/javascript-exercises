const leapYears = function(year) {
    let c1= year%4
    let c2= year%100
    let c3= year%400

    if(c1 == 0 && c2!=0 ){
        return true
    }else if (c2 != 0 && c3== 0 && c1 ==0 ){
        return true
    }else if(c2 == 0 && c3== 0 && c1 ==0){
        return true
    }else {
        return false
    }
};

console.log(leapYears(1600))
console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;
