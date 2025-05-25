const arr = [
  { name: 'apple', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'banana', type: 'fruit' }
];

// Output:
// {
//   fruit: [{...}, {...}],
//   vegetable: [{...}]
// }

function GroupByProperty(arr) {

  let result = {};

  arr?.map((elem) => {
    let propType = elem?.type;
    if (!result[propType]) {
      result[propType] = [elem];
    } else {
      result[propType].push(elem);
    }
  })

  console.log(result)
}

GroupByProperty(arr)