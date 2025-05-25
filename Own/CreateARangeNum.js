// Input: 1, 5
// Output: [1, 2, 3, 4, 5]

function ToCreateRanges(start, end) {

    let resultArr = [];
    for (let i = start; i < end + 1; i++) {
        resultArr.push(i);
    }

    return resultArr

}
console.log(ToCreateRanges(1,5))