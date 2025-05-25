const a = [1, 2, 3];
const b = [2, 3, 4, 5];

// Output: [1, 2, 3, 4, 5]


function mergeARemDups(firstArr,secondArr){
    let MergArr = [...a,...b];
    console.log('merged',MergArr);

    let result = {};
    let resultArr = [];
    MergArr?.forEach((elem)=>{
        
        if(!result[elem]){
            result[elem] = 1;
            resultArr.push(elem)
        }
    })
    return resultArr
}
console.log(mergeARemDups(a,b))