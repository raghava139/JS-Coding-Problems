// [2, 4, 3, 5, 7], target = 7

let arrayInput = [2, 4, 3, 5, 7], target = 7;
// [[2, 5], [4, 3]]


function findPairsWithTarget(arrayInput, target) {
    let result = []
    for (let i = 0; i < arrayInput.length; i++) {

        for (let j = i + 1; j < arrayInput.length; j++) {
            let sum = arrayInput[i] + arrayInput[j];
            if (sum === target) {
                result.push([arrayInput[i], arrayInput[j]]);
            }
        }
    }
    console.log(result);
    return result;
}
findPairsWithTarget(arrayInput, target);