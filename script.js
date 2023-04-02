let noOfOranges = 0;
let userInput = document.querySelector('input');
let addOranges = document.querySelector('.add');
let removeOranges = document.querySelector('.remove');
let display = document.querySelector('.orangesRemaining');

addOranges.addEventListener('click', add);
removeOranges.addEventListener('click', remove);

function add(){
    noOfOranges += Number(userInput.value);
    console.log(noOfOranges);
    display.innerHTML = noOfOranges;

    if(noOfOranges > 50){
        alert("Well done!");
    }
}

function remove(){
    noOfOranges -= Number(userInput.value);
    console.log(noOfOranges);
    display.innerHTML = noOfOranges;
}

