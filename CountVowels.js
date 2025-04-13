function countVowels(str){
    let vowels = ['a','e','i','o','u'];
    let count=0;
    let EmptyArry =[];

    for (let char of str?.toLowerCase()){
         if(vowels?.includes(char)){
            EmptyArry.push(char)
            count++;
         }
    }
    console.log(EmptyArry)
    return count;

}
console.log(countVowels('Hello World'));