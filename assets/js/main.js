let counter = 0;

function increase(){
    counter +=1;
    document.getElementById("number").innerHTML = counter;
}
function reset(){
    counter=0
    document.getElementById("number").innerHTML = counter;
}
function decrease(){;
    counter -=1;
    document.getElementById("number").innerHTML = counter;
}

