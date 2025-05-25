// Input: "I love JavaScript"
// Output: "JavaScript love I"

let Str = "I love JavaScript";

function ReverseWords(Str) {
    let MakeItArr = Str.split(" ");
    let Result = "";

    for (let i = MakeItArr.length-1 ; i >= 0; i--) {
        console.log(i)
        Result += `${MakeItArr[i]} `
    }
    console.log(Result.trim())

}
ReverseWords(Str);