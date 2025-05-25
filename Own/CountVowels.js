// Input: "hello world"
// Output: 3

let arr = "hello world";
function CountVowels(arr) {

    let result = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < arr.length; i++) {
        if (vowels?.includes(arr[i])) {
            result += 1
        }
    }
    console.log(result)
    return result

}
CountVowels(arr);