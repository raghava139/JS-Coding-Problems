// Input: [1, 2, 3, 5] (range is 1 to 5)
// Output: 4


let Input = [1, 2, 3, 5];

function FindMissingNumber(Input) {

    for (let i = 0; i < Input?.length; i++) {
        let iElem = i + 1;

        if (Input[i] !== iElem) {
            return iElem
        }
    }
    return null;
}
console.log(FindMissingNumber(Input));