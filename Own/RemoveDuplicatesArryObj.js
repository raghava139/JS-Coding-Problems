const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }
  ];
  
  // Output:
//   [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
//   ]
  

function RemoveDup(users){
    
    let result = {};
    let resultArr = [];
    users?.forEach(ele=>{
        let uniqueid = ele?.id;
        if(!result[uniqueid]){
            result[uniqueid] = 1
            resultArr.push(ele)
        }
    })
    console.log('resultarr',resultArr)
    return resultArr;

}
RemoveDup(users)