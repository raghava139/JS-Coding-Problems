const keys = ['id', 'name', 'age'];
const values = [1, 'Alice', 25];

// Output: { id: 1, name: 'Alice', age: 25 }

function ConvertArrsToObjs(ks,vs){

    let result = {};
    ks?.forEach((elm,index)=>{
        result[elm] = vs[index]
    })
    
    console.log(result);
}
ConvertArrsToObjs(keys,values)