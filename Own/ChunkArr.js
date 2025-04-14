// Input:
const nums = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

// Output:
// [[1, 2, 3], [4, 5, 6], [7]]


function ChunkArr(arr, size) {
    let ResultArr = [];
    let tempArr = []
    arr?.map((elem, i) => {
        tempArr.push(elem)
        if (tempArr?.length === size ||i == arr.length-1 ) {
            ResultArr.push(tempArr)
            tempArr = []
        }
    })
    console.log(ResultArr)
    return ResultArr;

}

ChunkArr(nums, size);