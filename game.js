const number1box = document.getElementById("number1")
const number2box = document.getElementById("number2")
const number3box = document.getElementById("number3")

var score = 0
var operator
var number1
var number2
var number3
randomize();

function randomize() {
    var number1 = Math.round(Math,random()* 100);
    var number2 = Math.round(Math,random() * 100);

    if(number1 < number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }
    operator = Math.ceil(Math.random() * 5)

    switch (operator) {
        case 1: 
            number3 = number1 + number2;
            break;

        case 2:
            number3 = number1 - number2;
            break;

        case 3: 
            number3 = number1 * number2;
            break;

        case 4: 
            number3 = Math.floor(number1/number2)
            number1 = number3 * number2;
            break;

        case 5:
            number3 = number1 % number2;
            break;
        default:
            number3 = number1 % number2;
            break;
    }
    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
    number3box.innerHTML = number3;
}

randomize();

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

plus.onclick = () => {
    if((number1 + number2) === number3) {
        score++;
        randomize();
        resetTime(timerId)
    }
    else {
        location.href = "gameover.html?score=" + score;
    }

}
minus.onclick = () => {
    if((number1 - number2) === number3) {
        score++;
        randomize();
        resetTime(timerId)
    }
    else {
        location.href = "gameover.html?score=" + score;
    }

}
mul.onclick = () => {
    if((number1 * number2) === number3) {
        score++;
        randomize();
        resetTime(timerId)
    }
    else {
        location.href = "gameover.html?score=" + score;
    }

}
divide.onclick = () => {
    if((number1 / number2) === number3) {
        score++;
        randomize();
        resetTime(timerId)
    }
    else {
        location.href = "gameover.html?score=" + score;
    }

}
modulus.onclick = () => {
    if((number1 / number2) === number3) {
        score++;
        randomize();
        resetTime(timerId)
    }
    else {
        location.href = "gameover.html?score=" + score;
    }

}