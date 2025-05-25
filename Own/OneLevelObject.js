// Input: { a: 1, b: { c: 2, d: 3 } }
// Output: { a: 1, c: 2, d: 3 }

let Obj = { a: 1, b: { c: 2, d: 3 } };


function OneLevelObject(Obj, result = {}) {

    for (let [keys, values] of Object.entries(Obj)) {
        if (typeof values === 'object' && !Array.isArray(values) && values !== null) {
            OneLevelObject(values, result)
        } else {
            result[keys] = values;
        }
    }

    return result;

}
console.log(OneLevelObject(Obj));