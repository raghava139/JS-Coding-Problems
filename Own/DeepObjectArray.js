// Input:
const data = [
    { id: 1, items: ['a', 'b'] },
    { id: 2, items: ['c'] },
    { id: 3, items: ['d', 'e'] }
  ];
  
//   // Output:
//   ['a', 'b', 'c', 'd', 'e']
function DeepObjectArry(data){
    let ResultArr= [];
    data?.forEach(elem=>{
        let Items = elem?.items;
        ResultArr.push(...Items)
    })

    console.log(ResultArr)
}

DeepObjectArry(data)
  