// [1, 2, 3], [2, 3, 4]
// [1, 4]

let arr1 = [1, 2, 3], arr2 = [2, 3, 4]
function UnqBW2Arrs(arr1,arr2) {

    let Mergedarr = [...arr1,...arr2];
    console.log(Mergedarr)

    let result = {};
    let resultArr=[];

    Mergedarr?.forEach(ele=>{
        if(!result[ele]){
            result[ele] = 1
        }else{
            result[ele] += 1
        }
    })
    console.log(result)
    let count=null;
    for (let [key,value] of Object.entries(result)){
            if(value == 1){
                resultArr.push(Number(key))
            }
    }

    console.log(resultArr)
}
UnqBW2Arrs(arr1,arr2)