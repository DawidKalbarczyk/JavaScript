let output = "";

document.querySelector('.js-button').onclick = function() {
    todoArrayFunction('.js-input');
}
document.querySelector('.js-button2').onclick = function() {
    todoArrayFunction('.js-input2');
}
document.querySelector('.js-reset-button').onclick = function() {
    resetButtonFunction('.js-reset-button');
}
document.querySelector('.js-reset-button2').onclick = function() {
    resetButtonFunction('.js-reset-button2');
}

todoArray1 = JSON.parse(localStorage.getItem('todos')) || [];
todoArray2 = JSON.parse(localStorage.getItem('todos2'))  || [];
todoArray3 = JSON.parse(localStorage.getItem('todos3'))  || [];
console.log(todoArray2);
renderArray();
function renderArray3() {
    for (let i = 0; i < todoArray1.length; i++) {
        const todo = todoArray3
    }
}
function resetButtonFunction(resetSelector) {
    if (resetSelector === '.js-reset-button') {
        todoArray1 = [];
        console.log(todoArray1);
        outputParagraph();
        localStorage.setItem('todos', JSON.stringify(todoArray1));

    } else if (resetSelector === '.js-reset-button2') {
        todoArray2 = [];
        console.log(todoArray2);
        outputParagraph();
        localStorage.setItem('todos2', JSON.stringify(todoArray2));
    }

}
function outputParagraph() {
    document.querySelector('.js-array-out')
        .innerHTML = output;
    output = "";
}

function renderArray() {
    for (let i = 0; i < todoArray2.length; i++) {
        output += todoArray2[i] + "<br>";
    }
    outputParagraph();
}
function todoArrayFunction(selector) {
    let todoElement = document.querySelector(selector);
    if (selector === '.js-input') {
        todoArray1.push(todoElement.value);
        console.log(todoArray1)
    } else if (selector === '.js-input2') {
        todoArray2.push(todoElement.value);
        renderArray();
        console.log(todoArray2);

    }
    localStorage.setItem('todos', JSON.stringify(todoArray1));
    localStorage.setItem('todos2', JSON.stringify(todoArray2));
}

function isEnter(event) {
    if (event.key === 'Enter') {
        todoArrayFunction();
    }
}
