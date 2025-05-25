// Input: "IX"
// Output: 9

let Roman = "XI";
function ConvertRomanToInt(Roman) {
    let RomanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0;
    for (let i = 0; i < Roman.length; i++) {
        let current = RomanObj[Roman[i]];
        let Next = RomanObj[Roman[i + 1]];

        if (Next > current) {
            total += (Next - current);
            i++;
        } else {
            total += current;
        }
    }
    console.log(total)
}
ConvertRomanToInt(Roman);