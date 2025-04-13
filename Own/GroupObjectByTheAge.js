const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
];

console.log(people);

//output
//   {
//     21: [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }],
//     25: [{ name: 'Bob', age: 25 }]
//   }


function GroupTheAge(people) {

  let result = {}
  people?.forEach((element) => {
    let AgeOfpeople = element?.age;
    if (!result[AgeOfpeople]) {
      result[AgeOfpeople] = [element]
    } else {
      result[AgeOfpeople].push(element)
    }

  })
  return result
}

GroupTheAge(people);