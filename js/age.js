function checkAge(age) {
 if (age < 0) {
    return "Invalid Age";
 }   else if (age <= 12) {
    return "Child";
 }   else if (age <= 19) {
    return "Teen";
 } else if (age <= 59) {
    return "Adult";
 } else {
    return "Senior";
 }
}