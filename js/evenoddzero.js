function evenOdd(num) {
    if (num === 0) {
        return "Zero";
    } else if (num %2 === 0) {
        return "Event";
    } else {
        return "Odd";
    }
}