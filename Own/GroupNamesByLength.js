const names = ['Alice', 'Bob', 'Eve', 'John', 'David'];

// // Output:
// {
//   3: ['Bob', 'Eve'],
//   4: ['John'],
//   5: ['Alice', 'David']
// }


function GroupsNamesBylength(names){
    let result = {};
    names?.forEach((elem)=>{
        
        if(!result[elem?.length]){
            result[elem.length] =  [elem]
        }else{
            result[elem.length].push(elem)
        }
        
    })
    console.log(result)

}
GroupsNamesBylength(names);
