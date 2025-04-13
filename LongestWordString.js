function LongestWord(str){

    let words = str.split(" ")
    console.log('words',words);

    let LongestWord = "";
    for(let word of words){
        
        if(word?.length > LongestWord.length ){
            LongestWord = word;
        }
    }
    return LongestWord;
}
console.log(LongestWord('i love coding in javascript'));