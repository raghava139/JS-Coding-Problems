// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]


let arr1 = [1, 3, 5], arr2 = [2, 4, 6];

function MergeSortTwoArrs(arr1, arr2) {

    let mergedArr = [...arr1, ...arr2];
    for (let i = 0; i < mergedArr.length; i++) {
        console.log('--firstloop--')
        for (let j = 0; j < mergedArr.length; j++) {
            console.log(mergedArr[j])
            console.log(mergedArr[j + 1])
            if (mergedArr[j] > mergedArr[j + 1]) {
                // Swap
                let temp = mergedArr[j];
                mergedArr[j] = mergedArr[j + 1];
                mergedArr[j + 1] = temp;
            }  
        }
    }
    console.log(mergedArr)
}
MergeSortTwoArrs(arr1, arr2)