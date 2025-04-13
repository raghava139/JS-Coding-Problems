// anagrams are rearrange the letters same different words

function anagramsALg(str1,str2){
    let string1 = str1.split('').sort().join("");
    let string12= str2.split('').sort().join("");
   
    return string1 == string12;

}

console.log(anagramsALg('silent','listen'));