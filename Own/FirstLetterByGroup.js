//input ['apple', 'banana', 'apricot', 'blueberry']
//output: 
// {
//     a: ['apple', 'apricot'],
//     b: ['banana', 'blueberry']
// }

let input = ['apple', 'banana', 'apricot', 'blueberry'];

function FirstLetterByGroup(input) {

    let result = {};

    for (let i = 0; i < input.length; i++) {
        let elemStarts = input[i]?.[0];
        if (!result[elemStarts]) {
            result[elemStarts] = [input[i]]
        } else {
            result[elemStarts].push(input[i])
        }
    }
    console.log(result);

}
FirstLetterByGroup(input)