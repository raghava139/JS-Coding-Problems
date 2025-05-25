// Input: 121
// Output: true


let Input = 131;
function CheckPalindrome(Input) {
    let reverseTheString=`${Input}`.split('').reverse().join('')
    console.log(reverseTheString);

    return `${Input}` ===  reverseTheString
}
console.log(CheckPalindrome(Input));