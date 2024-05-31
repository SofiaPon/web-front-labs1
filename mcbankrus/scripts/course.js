let fromRuble = document.getElementById('input-from-ruble');
let toRupia = document.getElementById('input-to-rupia');
let fromRupia = document.getElementById('input-from-rupia');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    let convertedValue = fx(fromRuble.value).from("RUB").to("INR");
    toRupia.value = convertedValue.toFixed(2);
});

document.getElementById('button-from').addEventListener('click', function() {
    let convertedValue = fx(fromRupia.value).from("INR").to("RUB");
    toRuble.value = convertedValue.toFixed(2);
});