// Input: "swiss"
// Output: "w"

let Str = 'swiss';
function FirstUniqueChar(Str) {

    let result = {};

    for (let i = 0; i < Str.length; i++) {
        let elem = Str[i];
        if (!result[elem]) {
            result[elem] = 1;
        } else {
            result[elem] += 1
        }
        // result[elem] = (result[elem] || 0) + 1
    }
    console.log(result)

    for (let i = 0; i < Str.length; i++) {
        if (result[Str[i]] === 1) {
            return Str[i];
        }
    }
}
console.log(FirstUniqueChar(Str));