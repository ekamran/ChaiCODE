function complexNum(num) {
    if (num === 0) {
        return "Zero";
    } else if (num %2 === 0 && num > 0) {
        return "Positive Even";
    } else if (num %2 !== 0 && num > 0) {
        return "Positive Odd";
    } else if (num %2 === 0 && num < 0) {
        return "Negative Even";
    } else {
        return "Negative Odd";
    }
}