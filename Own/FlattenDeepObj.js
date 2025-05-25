// {
//   user: {
//     name: 'John',
//     address: {
//       city: 'Delhi'
//     }
//   }
// }

// { 'user.name': 'John', 'user.address.city': 'Delhi' }

let InputObj = {
    user: {
        name: 'John',
        address: {
            city: 'Delhi'
        }
    }
}

function FlattenDeepObj(InputObj, parentChildkey = "", result = {}) {
    for (let [key, value] of Object.entries(InputObj)) {
        let newKey = parentChildkey ? `${parentChildkey}.${key}` : key;
        console.log(newKey)
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            FlattenDeepObj(value, newKey, result)
        } else {
            result[newKey] = value;
        }
    }
    console.log(result)
    return result;
}
FlattenDeepObj(InputObj);