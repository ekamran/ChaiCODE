let num = 15;

function divisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Multiple of 3 and 5";
    } else if (num % 3 === 0) {
        return "Multiple of 3";
    } else if (num % 5 === 0) {
        return "Multiple of 5";
    } else {
        return num;
    }
}