// Input: [0, "", null, undefined, 42, false, "hello"]
// Output: [42, "hello"]


let Input = [0, "", null, undefined, 42, false, "hello"];


function RemoveEmptyValues(Arr) {

    let Result = Arr?.filter((elem) => elem);


    return Result;
}

console.log(RemoveEmptyValues(Input))

