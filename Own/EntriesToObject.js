// Input: [["a", 1], ["b", 2]] 
// Output: { a: 1, b: 2 }



let input = [["a", 1], ["b", 2]];


function EntriesToObject(input) {
    let result = {};
    for ([key, value] of input) {
        result[key] = value
    }
    console.log(result)
}
EntriesToObject(input);