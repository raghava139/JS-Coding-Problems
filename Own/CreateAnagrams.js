// Input: "listen", "silent"
// Output: true


function CreateAnagrams(str1,str2){
    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');

    return string1 === string2;

}

console.log(CreateAnagrams('listen','silent'));