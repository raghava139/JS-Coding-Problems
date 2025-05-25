// [1, 2, 3, 4, 2, 1, 5, 6, 3]
// [1, 2, 3]

let input = [1, 2, 3, 4, 2, 1, 5, 6, 3]
function RemoveDups(input) {
    let result = {};
    let resultArr = [];

    input?.forEach((ele) => {
        if (!result[ele]) {
            result[ele] = 1
        } else {
            result[ele] += 1
        }
    })


    for (let [key, value] of Object.entries(result)) {
        if (value > 1) {
            resultArr.push(Number(key))
        }
    }
    console.log(resultArr)
    console.log(result)
}
RemoveDups(input);