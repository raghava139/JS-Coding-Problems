// Input: "hello world"
// Output: "Hello World"


let StringTex= "hello world";

function ConvertCapitalize(mystr){
    let result = mystr.split(' ')
    console.log(result)
    result =  result?.map(word=>{
        return word?.charAt(0)?.toUpperCase() + word?.slice(1)
    })
    console.log(result.join(' '))
    return result.join(' ');
}
ConvertCapitalize(StringTex)