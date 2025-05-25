// [1, [2, [3, [4]]]]
// 4

let Input = [1, [2, [3, [4]]]];

function FlattenedNestedArr(Input) {
    if (Input.length == 0) return null;
    let result = 0;
    // console.log(Input[i]);
    for (let i = 0; i < Input.length; i++) {
        if (Array.isArray(Input[i])) {
            let storingflat = FlattenedNestedArr(Input[i]);
            result = storingflat;
            
        } else {
            result = Input[i];
        }
    }
    return result;
}
console.log(FlattenedNestedArr(Input));