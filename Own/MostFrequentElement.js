// Input:
const chars = ['a', 'b', 'c', 'a', 'a', 'b'];

// Output:
// 'a'
function MostFreq(chars) {
    let result = {};

    chars?.forEach(elem => {
        if (!result[elem]) {
            result[elem] = 1
        } else {
            result[elem] += 1;
        }
    })

    let maxcount = 0;
    let maxchar = '';
  for (let [key,value] of Object.entries(result)){
    if(value > maxcount){
        maxcount = value;
        maxchar = key;
    }
  }
  return maxchar
}
console.log(MostFreq(chars))