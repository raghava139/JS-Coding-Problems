// [1, 2, 3], [2, 3, 4]
// { onlyInFirst: [1], onlyInSecond: [4] }


let arr1 = [1, 2, 3], arr2 = [2, 3, 4]

function CompareTwoDiff(arr1, arr2) {
    // console.log(arr1)
    // console.log(arr2)

    let Result = { onlyInFirst: [], onlyInSecond: [] };
    let removeDups = {};
    let ResultArray = [];
    [...arr1, ...arr2]?.forEach((elem) => {
        if (!removeDups[elem]) {
            removeDups[elem] = 1
            // ResultArray.push(elem)
        } else {
            removeDups[elem] += 1
        }
    })
    console.log(removeDups)
    for (let [key, values] of Object.entries(removeDups)) {
        if (values == 1) {
            ResultArray.push(Number(key))
        }
    }
    console.log(ResultArray)

    let firstarray = arr1.filter((ele) => {
        if (ResultArray.includes(ele)) {
            Result?.onlyInFirst.push(ele)
        }

    });
    let secondarray = arr2.filter((ele) => {
        if (ResultArray.includes(ele)) {
            Result?.onlyInSecond.push(ele)
        }

    });
    console.log(Result)

    return Result;

}
CompareTwoDiff(arr1, arr2);
// function testingCompareTwodiff(arr1, arr2) {
//     const onlyInFirst = arr1.filter((elem) => !arr2.includes(elem))
//     const onlyInSecond = arr2.filter((elem) => !arr1.includes(elem))
//     console.log('firstarra', firstArray)
//     console.log('secondArray', secondArray)

//     return { firstArray, secondArray }
// }
// console.log(testingCompareTwodiff(arr1, arr2))