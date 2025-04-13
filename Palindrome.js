//Forward and backward should be same string in palindrome;
function PalindromeFun(str){

    let Reverserd = str.split("").reverse().join('')
    console.log('Revesed',Reverserd)

    return Reverserd === str

}
console.log(PalindromeFun('racecar'));