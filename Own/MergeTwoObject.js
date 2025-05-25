// obj1 = { a: 1, b: 2 }, obj2 = { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }


let obj1 = { a: 1, b: 2 }, obj2 = { b: 3, c: 4 };

function ToMergeObjs(obj1,obj2){

    let objectD = {...obj1,...obj2}

    return objectD;
}
ToMergeObjs(obj1,obj2);