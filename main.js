let generateClick = document.getElementById('generateBtn').addEventListener('click', function () {
    let roundAndRandom = Math.round(Math.random() * 9999);
    if (roundAndRandom > 1001) {
        document.getElementById('generateNumber').value = roundAndRandom;
        document.getElementById('generateNumber').style.color = 'white';
        document.getElementById('generateNumber').style.transition = '1s'; 
    }
    else{
        document.getElementById('generateNumber').value = 2547;
        document.getElementById('generateNumber').style.color = 'red';
    }    
});


//arman

let items1 = document.getElementById('count1').addEventListener('click', function () {
    countNumber('7');
});
let items2 = document.getElementById('count2').addEventListener('click', function () {
    countNumber('8');
});
let items3 = document.getElementById('count3').addEventListener('click', function () {
    countNumber('9');
});
let items4 = document.getElementById('count4').addEventListener('click', function () {
    countNumber('4');
});
let items5 = document.getElementById('count5').addEventListener('click', function () {
    countNumber('5');
});
let items6 = document.getElementById('count6').addEventListener('click', function () {
    countNumber('6');
});
let items7 = document.getElementById('count7').addEventListener('click', function () {
    countNumber('1');
});
let items8 = document.getElementById('count8').addEventListener('click', function () {
    countNumber('2');
});
let items9 = document.getElementById('count9').addEventListener('click', function () {
    countNumber('3');
});
let items10 = document.getElementById('count10').addEventListener('click', function () {
    Backspace();
});
let items11 = document.getElementById('count11').addEventListener('click', function () {
    countNumber('0');
});
let items12 = document.getElementById('count12').addEventListener('click', function () {
    clearNumber();
});


function countNumber(value) {
    document.getElementById('typeVerifyCode').value += value;
}

function clearNumber() {
    document.getElementById('typeVerifyCode').value = "";
}

function Backspace() {
    let countBack = document.getElementById('typeVerifyCode');
    let parseCount = countBack.value;
    
    if (parseCount.length > 0) {
    countBack.value = parseCount.slice(0, -1);
    }
}

let submetBtn = document.getElementById('submit-btn').addEventListener('click', function () {
    let typeVerify = document.getElementById('typeVerifyCode').value;
    let generateNum = document.getElementById('generateNumber').value;

    if (typeVerify === generateNum) {
        document.getElementById('correct-pin').style.display = 'block';
        document.getElementById('wrong-pin').style.display = 'none';
        
    }
    else{
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('correct-pin').style.display = 'none';
    }

    if (typeVerify.trim() === '') {
        document.getElementById('wrong-pin').style.display = 'block';
        document.getElementById('correct-pin').style.display = 'none';
    }
    clear();
});

function clear() {
    document.getElementById('typeVerifyCode').value = "";
    document.getElementById('generateNumber').value = "";
}



