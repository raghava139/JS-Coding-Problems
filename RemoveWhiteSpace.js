function RemoveWhiteSpaces(str){
    console.log(str)
    let RemoveSpaces = str.replace(/\s/g,"");
    console.log(RemoveSpaces)
}

let InputString = 'Interview,        Happy';
RemoveWhiteSpaces(InputString)