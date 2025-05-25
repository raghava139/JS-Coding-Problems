// Input: [1, 3, 2, 4, 3, 5]
// Output: 3

let Arr = [1, 3, 2, 4, 3, 5];


function MostRepeatedone(Arr) {

    let result = {}

    Arr?.forEach(elem => {

        if (!result[elem]) {
            result[elem] = 1
        } else {
            result[elem] += 1
        }
    })
    console.log(result)

    let count = 0;
    let mostRepeated = null;
    Object.entries(result)?.map(([key,value]) => {
        if (value > count) {
            count = value;
            mostRepeated = Number(key);
        }
    })
    console.log(mostRepeated)
    return mostRepeated;
}
MostRepeatedone(Arr)