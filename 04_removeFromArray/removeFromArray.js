const removeFromArray = function(array=[],...removeItems) {
    let finalArray=[]
    let items = removeItems
    
    finalArray = array.filter(element => !removeItems.includes(element));
    
    return finalArray
}

    

;
 console.log(removeFromArray([1,2,3,4],3))
 console.log(removeFromArray([1,2,3,4],3,2))
  console.log(removeFromArray([1,2,2,4],2))
 console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
 console.log(removeFromArray([1, 2, 3, 4], 7, 2))
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3))
console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
