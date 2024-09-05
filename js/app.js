{
    // 1 - misol
function checkAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 18 ? "Kattasiz" : "Kichikisiz";
}
}


{
    // 2 - misol
    function checkNumberType(num) {
    if (num === 0) return "musbat";
    return num > 0 ? "musbat" : "manfiy";
}
}

{
    // 3 - misol
    function countPositiveNumbers(...numbers) {
    let positiveCount = 0;
    numbers.forEach(num => {
        if (num > 0) positiveCount++;
    });
    return positiveCount;
}
}

{
    // 4 - misol
    function checkEvenOdd(num) {
    return num % 2 === 0 ? "juft" : "toq";
}
}

{
    // 5 - misol
    function processNumber(num) {
    return num % 2 !== 0 ? num * 2 : num / 2;
}
}

{
    // 6 - misol
    function adjustNumber(num) {
    if (num === 0) return 10;
    return num > 0 ? num + 1 : num - 2;
}
}

{
    // 7 - misol
    function returnLargerFirst(a, b) {
    return a > b ? [a, b] : [b, a];
}
}

{
    // 8 - misol
    function modifyIfPositiveAndEven(num) {
    if (num > 0 && num % 2 === 0) {
        return num + 1;
    }
    return num;
}
}

{
    // 9 - misol
    function multiplyLargerByTen(a, b) {
    return Math.max(a, b) * 10;
}
}

{
    // 10 - misol
    function countOddEven(...numbers) {
    let oddCount = 0;
    let evenCount = 0;
    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    });
    return { even: evenCount, odd: oddCount };
}
}




// Example calls to the functions:
console.log(checkAge(2005));
console.log(checkNumberType(4)); 
console.log(countPositiveNumbers(2, -6, 9));
console.log(checkEvenOdd(3));
console.log(processNumber(7));
console.log(adjustNumber(0));
console.log(returnLargerFirst(7, 5));
console.log(modifyIfPositiveAndEven(8));
console.log(multiplyLargerByTen(5, 8));
console.log(countOddEven(7, 8, 3));
