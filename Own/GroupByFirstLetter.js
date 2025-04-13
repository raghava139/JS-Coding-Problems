// Input:
const names = ['Alice', 'Adam', 'Bob', 'Charlie', 'Cathy'];

// Output:
// {
//   A: ['Alice', 'Adam'],
//   B: ['Bob'],
//   C: ['Charlie', 'Cathy']
// }


function GroupByFirstLetter(names) {

    if (names?.length > 0) {
        let result = {};
        names?.forEach(Element => {
            let SliceElement = Element[0]
            // console.log(SliceElement)
            if(!result[SliceElement]){
                result[SliceElement]= [Element]
            }else{
                result[SliceElement].push(Element)
            }
        })
        console.log(result)
        return result;
    }

}
GroupByFirstLetter(names);