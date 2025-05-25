// Input: [1, 3, 2, 1, 4, 1]
// Output: 1

let array = [1, 3, 2, 1, 4, 1]

function MostFreq(array) {
    let result = {};
    let maxCount = 0;
    let mostFrequent;
    array?.forEach((elem) => {
        if (!result[elem]) {
            result[elem] = 1
        } else {
            result[elem] += 1
        }
        console.log('result[elem]',result[elem])
        console.log('maxCount',maxCount)
        console.log('mostFrequent',mostFrequent)
        if (result[elem] > maxCount) {
            maxCount = result[elem];
            mostFrequent = elem;
        }
    })
    console.log(mostFrequent)
}
MostFreq(array);