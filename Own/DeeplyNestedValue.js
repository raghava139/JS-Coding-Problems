const input = [1, [2, [3, [4, [5]]]]];

// Output: 5


function DeeplyNestedValues(arr){
    // console.log(input.length)
    let result = null;
    for(let i = 0 ; i<arr?.length; i++){
        if(Array.isArray(arr[i])){
            console.log(result)
            result = DeeplyNestedValues(arr[i])
        }else{
            result = arr[i]
        }
    }
    // console.log(result)
    return result;
}

console.log(DeeplyNestedValues(input));