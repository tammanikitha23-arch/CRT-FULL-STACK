//problem:1
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
let N = 5;
let securityLevels = [1, 2, 3, 4, 5];
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        let sum = securityLevels[i] + securityLevels[j];

        if (isPrime(sum)) {
            count++;
        }
    }
}
console.log(count);

//problem2:
let n = 6;
let salaries = [7, 2, 9, 9, 5, 7];
let uniqueSalaries = [...new Set(salaries)];
if (uniqueSalaries.length < 2) {
    console.log(-1);
}
else {

    uniqueSalaries.sort((a, b) => b - a);

    console.log(uniqueSalaries[1]);
}