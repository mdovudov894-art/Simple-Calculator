var display = document.getElementById('display');

function toDisplay(input) {
    display.value += input;
}

function clearAll() {
    display.value = "";
}

function natija() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}

// Қисми иловашуда барои клавиатура
document.addEventListener('keydown', function(event) {
    var key = event.key;

    // Санҷиши рақамҳо ва амалҳо
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        toDisplay(key);
    } 
    // Тугмаи Enter барои ҳисоб кардан
    else if (key == 'Enter') {
         // Ин барои он ки саҳифа бозсозӣ нашавад
        natija();
    } 
    // Тугмаи Escape барои тоза кардан
    else if (key === 'Escape') {
        clearAll();
    }
    // Тугмаи Backspace барои нест кардани як рақами охирин (ихтиёрӣ)
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});
