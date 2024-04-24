// Ini File JS

function convert() {
    let celciusinput = parseFloat(document.getElementById('celciusinput').value);
    let fahrenheitoutput = document.getElementById('fahrenheitoutput');
    let calculasi = document.getElementById('calculasi');

    if (!isNaN(celciusinput)) {
        let fahrenheit = (celciusinput * 9 / 5) + 32;
        fahrenheitoutput.value = fahrenheit.toFixed(2) + ' °F';
        calculasi.value = celciusinput + ' °C * 9/5 + 32 = ' + fahrenheit.toFixed(2) + ' °F';
    } else {
        fahrenheitoutput.value = 'Harap masukkan nilai!';
        calculasi.value = '';
    }
}

function reset() {
    document.getElementById('celciusinput').value = '';
    document.getElementById('fahrenheitoutput').value = '';
    document.getElementById('calculasi').value = '';
}

function reverse() {
    let fahrenheitoutput = document.getElementById('fahrenheitoutput');
    let celciusinput = parseFloat(fahrenheitoutput.value);

    if (!isNaN(celciusinput)) {
        var celsius = (celciusinput - 32) * 5 / 9;
        document.getElementById('celciusinput').value = celsius.toFixed(2);
        document.getElementById('calculasi').value = celciusinput + ' °F - 32 * 5/9 = ' + celsius.toFixed(2) + ' °C';
    } else {
        document.getElementById('celciusinput').value = 'Harap masukkan nilai!';
        document.getElementById('calculasi').value = '';
    }
}