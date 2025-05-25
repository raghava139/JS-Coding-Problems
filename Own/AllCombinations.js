// "abc"
// ["a", "ab", "abc", "b", "bc", "c"]

let InputStr = 'abc'

function AllCombinations(InputStr ,resultArr = []) {
    console.log(InputStr)
    for (let i = 0; i < InputStr.length; i++) {
        for (let j = i + 1; j <= InputStr.length; j++) {
            resultArr.push(InputStr.slice(i, j));
        }
    }
    console.log(resultArr)
}
AllCombinations(InputStr);