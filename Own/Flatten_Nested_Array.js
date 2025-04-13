const nestedArray = [1, [2, [3, [4]], 5]];
console.log('nestedArray', nestedArray)


function FlattenArrayfun(nestArr) {

    if (nestArr.length == 0) return null;
    let FlattenArr = [];
    for (let i = 0; i < nestArr.length; i++) {
        if (Array.isArray(nestArr[i])) {
            let storingflat = FlattenArrayfun(nestArr[i]);
            FlattenArr.push(...storingflat)
        } else {
            FlattenArr.push(nestArr[i])
        }
    }

    return FlattenArr;

}
console.log(FlattenArrayfun(nestedArray))