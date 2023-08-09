//Elements

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

// Counter & Functionality

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
function colorCounter() {
	if (count < 0) {
		counterDP.style.color = 'red';
	} else if (count === 0) {
		counterDP.style.color = 'black';
	} else {
		counterDP.style.color = 'green';
	}
}
// Numbers style
subBtn.addEventListener("click", function() {
  count -= 1;
	counterDP.innerHTML = count;
	colorCounter();
})

resetBtn.addEventListener("click", function() {
  count = 0;
	counterDP.innerHTML = count;
	colorCounter();
})

addBtn.addEventListener("click", function() {
  count += 1;
	counterDP.innerHTML = count;
	colorCounter();
})


