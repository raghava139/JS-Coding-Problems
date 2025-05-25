const arr1 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const arr2 = [{ id: 2, value: 100 }, { id: 3, value: 200 }];
// [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B', value: 100 },
//   { id: 3, value: 200 }
// ]

function MergeTwoArrofObjs(arr1, arr2) {
    let twoArrays = [...arr1, ...arr2];
    let ResultObj = {}
    twoArrays?.forEach((elem) => {
        if (ResultObj[elem?.id]) {
            ResultObj[elem?.id] = {...ResultObj[elem?.id],...elem}
        } else {
            ResultObj[elem?.id] =  {...elem}
        }
    })
    let result = Object.values(ResultObj)
    console.log(result)
    return result;
}
MergeTwoArrofObjs(arr1, arr2);
