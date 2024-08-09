const removeFromArray = function(array=[],...removeItems) {
    
    let len= array.length
    let finalArray=[]
    for( i =(len-1); i>= 0;i--){
            
        if(array[i] == firElement && secElement == ""){
            
            finalArray=array.splice((array.indexOf(firElement)),1)

        }else if(array[i] == firElement || array[i]==secElement){
            
            let in1 =array.indexOf(firElement)
            let in2=array.indexOf(secElement)
            
            if(in1 == -1 && in2 != -1){
               finalArray= array.splice(in2,1)
            }else if (in1 != -1 && in2 == -1){
                finalArray=array.splice(in1,1)
            }else{
                finalArray = array.splice(in1,1)
                finalArray = array.splice((in2-1),1)
            }

    }
}
    
    return finalArray

};
// console.log(removeFromArray([1,2,3,4],3))
// console.log(removeFromArray([1,2,3,4],3,2))
// console.log(removeFromArray([1,2,2,4],2))
// console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"))
// console.log(removeFromArray([1, 2, 3, 4], 7, 2))
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
