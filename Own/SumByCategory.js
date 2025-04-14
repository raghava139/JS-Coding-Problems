const expenses = [
    { category: 'food', amount: 100 },
    { category: 'travel', amount: 200 },
    { category: 'food', amount: 50 },
    { category: 'travel', amount: 150 }
];

// Output:
//   {
//     food: 150,
//     travel: 350
//   }

function toSumByCategory(expenses) {
    let result = {};
    expenses?.forEach(elem => {
        let amountValue = elem?.amount;
        let categoryValue = elem?.category;

        if (!result[categoryValue]) {
            result[categoryValue] = amountValue
        }else{
            result[categoryValue] += amountValue 
        }
    })
    console.log(result)
}
toSumByCategory(expenses)