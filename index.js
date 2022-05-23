let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count++;
    console.log(`The button was clicked ${count} times`);
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}