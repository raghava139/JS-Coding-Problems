// Input: { z: 3, a: 1, b: 2 }
// Output: { a: 1, b: 2, z: 3 }


let InputObj = { z: 3, a: 1, b: 2 };

function SortByObjectKey(InputObj){
    console.log(InputObj)

    let result = Object.keys(InputObj)?.sort()?.reduce((acc,key)=>{
            acc[key] = InputObj[key];
            return acc;
    },{})
    console.log('result',result)
    return result;
}
SortByObjectKey(InputObj);