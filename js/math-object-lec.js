function randomNumberRange(){
    var myMin = prompt('What is the MINIMUM number in your range?');
    var myMax = prompt(('What is the MAXIMUM number in your range?') - myMin + 1) - myMin;
    var randomNumber = Math.floor(Math.random() * myMax) + myMin;
    return randomNumber;
}