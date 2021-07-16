let exam;
let projects;

function finalGrade(exam, projects) {
    if (100 >= exam > 90 || projects >= 10) {
        console.log('Ваша оценка 100');
    } else if (exam > 75 || projects >= 5) {
        console.log('Ваша оценка 90');
    } else if (exam > 50 || projects > 2) {
        console.log('Ваша оценка 75');
    } else {
        console.log('Ваша оценка 0');
    }
}