// Input: { a: { b: { c: 1 } } }
// Output: { "a.b.c": 1 }

let MainObj = { a: { b: { c: 1 } } };
function FlattenObj(MainObj, parentkey = '', result = {}) {

    for (let [key, value] of Object.entries(MainObj)) {

        let newkey = parentkey ? `${parentkey}.${key}` : key

        if (typeof value === 'object' && !Array.isArray(value) && value != null) {
            FlattenObj(value, newkey, result)
        } else {
            result[newkey] = value
        }
    }
    return result;
}
console.log(FlattenObj(MainObj));