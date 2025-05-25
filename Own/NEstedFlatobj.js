// {
//   name: "John",
//   address: {
//     city: "New York",
//     geo: {
//       lat: "40.7128",
//       lng: "-74.0060"
//     }
//   }
// }

// {
//   "name": "John",
//   "address.city": "New York",
//   "address.geo.lat": "40.7128",
//   "address.geo.lng": "-74.0060"
// }

let SampleObj = {
    name: "John",
    address: {
        city: "New York",
        geo: {
            lat: "40.7128",
            lng: "-74.0060"
        }
    }
}

function NestedFlatOBJ(SampleObj, attachedkey = '', Result = {}) {
    for (let [keys, values] of Object.entries(SampleObj)) {
        let Resutlkey = attachedkey ? `${attachedkey}.${keys}` : keys;
        if (typeof values === 'object' && !Array.isArray(values) && values !== "") {
            Result = NestedFlatOBJ(values, Resutlkey, Result);
        } else {
            Result[Resutlkey] = values;
        }
    }
    // console.log(Result)
    return Result;
}
console.log(NestedFlatOBJ(SampleObj));