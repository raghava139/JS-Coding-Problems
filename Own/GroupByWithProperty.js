const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
];

//   // Output:
//   {
//     A: [{ name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' }],
//     B: [{ name: 'Bob', grade: 'B' }],
//     C: [{ name: 'David', grade: 'C' }]
//   }

//Group WIth
function GroupWithGrades(students, name, grade) {
    let result = {};
    students?.forEach(ele => {
        let GradeValue = ele?.grade
        let nameValue = ele?.name
        if (!result[GradeValue]) {
            result[GradeValue] = [{
                [name]: nameValue,
                [grade]: GradeValue
            }]
        } else {
            result[GradeValue].push(ele)
        }

    })

    return result;
}

GroupWithGrades(students, 'name', 'grade')