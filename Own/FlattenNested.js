const obj = {
    name: 'Alice',
    address: {
        city: 'Delhi',
        zip: '110001'
    }
};

// Output:
//   {
//     name: 'Alice',
//     city: 'Delhi',
//     zip: '110001'
//   }


function FlattenNestObj(obj, result = {}) {

    //based case here 
    for (let [keys, values] of Object.entries(obj)) {
        if (typeof values === 'object' && !Array.isArray(values)) {
            FlattenNestObj(values, result)
        } else {
            result[keys] = values;
        }
    }
    return result;
}
console.log(FlattenNestObj(obj));