// Input: [1, 2, 3, 4]
// Output: true

// Input: [1, 2, 2, 3]
// Output: false

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 2, 3]

function CheckUniqueBool(arr1) {

    let Result = {};
    for (let i = 0; i < arr1.length; i++) {
        let elem = arr1[i];

        if (Result[elem]) {
            return false;
        }
        else {
            Result[elem] = true;
        }
    }
    return true;
}
console.log(CheckUniqueBool(arr1))