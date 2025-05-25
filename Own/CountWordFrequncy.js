// Input: "hello world hello"
// Output: { hello: 2, world: 1 }


let Str = "hello world hello";

function CountWordFrequency(Str) {

    let result = {};
    let makeArr = Str.split(" ")
    console.log(makeArr)

    for (let i = 0; i < makeArr?.length; i++) {

        if (!result[makeArr[i]]) {
            result[makeArr[i]] = 1;
        } else {
            result[makeArr[i]] += 1;
        }
    }

    console.log(result)
}
CountWordFrequency(Str);