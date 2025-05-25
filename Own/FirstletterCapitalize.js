// Input: "hello world"
// Output: "Hello World"


let Input = "hello world";

function FirstLetterCapitalize(Input) {

    let makeItArr = Input.split(' ');
    console.log(makeItArr)
    let result = '';

    for (let i = 0; i < makeItArr?.length; i++) {
        let StartCaps = makeItArr[i].charAt(0).toUpperCase();
        let Word = makeItArr[i];
        result += `${StartCaps}${Word.slice(1)} `
    }

    console.log(result)
}
FirstLetterCapitalize(Input);