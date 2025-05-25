// Input: { a: { b: { c: 1 } } }
// Output: { 'a.b.c': 1 }


let InputObj = { a: { b: { c: 1 } } }

function FlattenedObj(InputObj,parentkey='',result={}){
   
    for(let [key,value] of Object.entries(InputObj)){
        let newKey = parentkey? `${parentkey}.${key}`:key;
        if(typeof value === 'object' && !Array.isArray(value) && value !==null){
            FlattenedObj(value,newKey,result)
        }else{
            result[newKey] = value;
        }
    }
    // console.log(result)
    return result;
}
console.log(FlattenedObj(InputObj))