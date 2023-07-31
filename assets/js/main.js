//creazione elementi

let counterDisplay = document.createElement('span');
counterDisplay.setAttribute("id","counterDP");
let displayText = document.createTextNode("0")

counterDisplay.appendChild(displayText)

let addBtn = document.createElement("button");
let addText = document.createTextNode("+");

addBtn.appendChild(addText);

let resetBtn = document.createElement("button");
let resetText = document.createTextNode("Reset");

resetBtn.appendChild(resetText);

let subBtn = document.createElement("button");
let subText = document.createTextNode("-");

subBtn.appendChild(subText);

// Insert in the DOM 

let counter = document.getElementById('counter');
counter.append(addBtn,resetBtn,subBtn,counterDisplay);

// counter funzionalità
let counterDP = document.getElementById('counterDP');
let count = 0

subBtn.addEventListener("click", function() {
    count -= 1; 
    counterDP.innerHTML = count;
})

resetBtn.addEventListener("click", function() {
    count = 0;
    counterDP.innerHTML = count;
})

addBtn.addEventListener("click", function() {
    count += 1;
    counterDP.innerHTML = count;
})

