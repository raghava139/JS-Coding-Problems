// Input: [1, 2, 2, 3, 3, 3]
// Output: {1: 1, 2: 2, 3: 3}

let Arr = [1, 2, 2, 3, 3, 3];
function CountTheOcc(Arr) {
    let result = {};
    Arr?.forEach((elem) => {

        if (!result[elem]) {
            result[elem] = 1
        } else {
            result[elem] += 1
        }
    })
    return result;

}
console.log(CountTheOcc(Arr));