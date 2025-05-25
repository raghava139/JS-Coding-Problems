
// ['X', 'Y']

let ArrData = [
    { name: 'A', city: 'X' },
    { name: 'B', city: 'Y' },
    { name: 'C', city: 'X' }
]

function ArrObjKeys(ArrData) {
    console.log(ArrData);
    let Result = [];

    ArrData?.forEach((elem)=>{
        let cityValue = elem?.city;
        if(!Result.includes(cityValue)){
            Result.push(cityValue)
        }
    })
    console.log(Result)
}
ArrObjKeys(ArrData);