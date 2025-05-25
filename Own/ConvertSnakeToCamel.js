// 'hello_world_example'
// 'helloWorldExample'

let Input = 'hello_world_example'
function ConvertSnakeToCamel(Input) {

    let RemoveUnd = Input.split('_')
    let mergedTheText = '';

    for (let i = 0; i < RemoveUnd.length; i++) {
        let firstLetter = RemoveUnd[i][0];
        if (i !== 0) {
            mergedTheText += `${firstLetter?.toUpperCase()}${RemoveUnd[i].slice(1)}`
        } else {
            mergedTheText += `${firstLetter?.toLowerCase()}${RemoveUnd[i].slice(1)}`
        }
    }
    console.log(mergedTheText)
}
ConvertSnakeToCamel(Input);