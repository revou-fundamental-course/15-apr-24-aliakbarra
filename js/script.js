// Ini File js

let isReverse = true;

function reverse() {
    let cToF = document.getElementById('c-to-f');
    let fToC = document.getElementById('f-to-c');

    if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;
    } else {
        // Ini Tampilan Default
        console.log(isReverse);
        cToF.style.display = "block";
        fToC.style.display = "none";
        isReverse = true;
    }
}

function convert() {
    let celcius = document.getElementById("c-to-f-input").value;
    if (celcius.match(/[^0-9]/g)) {
        alert("Tolong Input Nomor Saja!");
    }
    console.log(celcius);
}

document.getElementById("button-convert").addEventListener('click', () => convert());