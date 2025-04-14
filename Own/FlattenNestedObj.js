// Input:
let NestObj = { a: 1, b: { c: 2, d: { e: 3 } } }

// Output:
// { 'a': 1, 'b.c': 2, 'b.d.e': 3 }


function NestObjFun(myobj, parentkey = '', result = {}) {
    for (let [key, value] of Object.entries(myobj)) {
        const newkey = parentkey ? `${parentkey}.${key}` : key;
        console.log('newkey', newkey)
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            NestObjFun(value, newkey, result);
        }
        else {
            result[newkey] = value;
        }
    }
    console.log(result)
}
NestObjFun(NestObj)