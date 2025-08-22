function checkWeather(temp) {
    if (temp === 0) {
        return "Freezing";
    } else if (temp <= 15) {
        return "Cold";
    } else if (temp <= 25) { 
        return "Pleasant";
    } else if (temp <= 35) {
        return "Warm";
    } else {
        return "Hot";
    }
}