function printCode () {
    console.log("This is an awesome code editor");
}


function printMessages (num) {
    console.log(`Delivered ${num} messages`);
}

function addTwo (ekNum, doNum) {
    return ekNum + doNum
}

printCode ();
printMessages (500);
addTwo (1,1);
console.log(addTwo(2,2));