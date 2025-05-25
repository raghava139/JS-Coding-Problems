// Input: [1, 2, 3, 4], rotate by 2
// Output: [3, 4, 1, 2]


let array = [1, 2, 3, 4]
function RotateArr(array, times) {

    let result = [];
    let Arrlength = array.length;
    times = times % Arrlength;

    for (let i = times; i < Arrlength; i++) {
        result.push(array[i])
    }

    for (let i = 0; i < times ; i++){
        result.push(array[i])
    }


    return result;
}
console.log(RotateArr(array, 2));