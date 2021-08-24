
function add(input, counter) {
    counter += input;
    return counter;
}

function subtract(input, counter) {
    counter -= input;
    return counter;
}



window.addEventListener("DOMConetentLoaded", (e) => {

})

let form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let input = document.getElementById("counter").value;
    console.log(input);
    let solution = document.querySelector('#showResults');
    let addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', function() {
        solution.textContent = add(input, solution);
        
    })
    let subtractBtn = document.querySelector('#subtract');
    subtractBtn.addEventListener('click', function(){
        solution.textContent = subtract(input, solution).value2;
    })
    subtractBtn.onmouseover = function() {
        subtractBtn.style.backgroundColor = "white";
        subtractBtn.style.borderColor = "#BEBEBE";
    }
    addBtn.onmouseover = function() {
        addBtn.style.backgroundColor = "white";
        addBtn.style.border = "1px solid #BEBEBE";
        addBtn.style.color = "#BEBEBE";
    }
    subtractBtn.onmouseover = function() {
        subtractBtn.style.backgroundColor = "white";
        subtractBtn.style.border = "1px solid #BEBEBE";
        subtractBtn.style.color = "#BEBEBE";
    }
    
  }); 
