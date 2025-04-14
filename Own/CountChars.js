// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
let Static = "hello";

function CountChars(text) {
    let Result = {};
    for (let i = 0; i < text?.length; i++) {
        let TextValue = text[i];
        
        if(!Result[TextValue]){
            Result[TextValue] = 1
        }else{
            Result[TextValue] +=1
        }
    }
    console.log(Result)
    return Result
}
CountChars(Static);