// Input: ['hi', 'hello', 'hey', 'yo']
// Output: {2: ['hi', 'yo'], 3: ['hey'], 5: ['hello']}

let ArrR = ['hi', 'hello', 'hey', 'yo']
function GroupTheWordsByLength(ArrR){

    let result = {};
    ArrR?.forEach((elem)=>{
        if(!result[elem?.length]){
            result[elem?.length] = [elem]  
        }else{
            result[elem?.length].push(elem)
        }
         
    })
    console.log(result)
}
GroupTheWordsByLength(ArrR);