// 'A man a plan a canal Panama'
//true
function CheckPalindromeWithoutSpaces(str) {

str = str.replace(/\s+/g,"").toLowerCase();
console.log(str);

return str === str.split("").reverse().join("");
}

console.log(CheckPalindromeWithoutSpaces('A man a plan a canal Panama'))