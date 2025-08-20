function vowelCheck(char) {
    if (!char || !char.match(/^[a-zA-Z]$/)) {
        return "Not a letter";
    } else if (char === "a") {
        return "Vowel";
    } else if (char === "e") {
        return "Vowel";
    } else if (char === "i") {
        return "Vowel";
    } else if (char === "o") {
        return "Vowel";
    } else if (char === "u") {
        return "Vowel";
    } else {
        return "Consonant";
    }
}