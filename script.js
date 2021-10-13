const numberBtns = document.querySelectorAll('.number');
const screen = document.querySelector('.output');
const operatorBtns = document.querySelectorAll('.operator');
const deleteBtns = document.querySelectorAll('.delete');
const equalBtn = document.querySelector('.equal');
const prevResult = document.querySelector('.result');
let previousResult = 0;
let content = '';


numberBtns.forEach(number => {
    number.addEventListener('click', () => {
        screen.innerText  += number.innerText;
    });
})

operatorBtns.forEach(operator => {
    operator.addEventListener('click', () => {
        screen.innerText += operator.innerText;
    });
})

deleteBtns[1].addEventListener('click', () => {
    deleteAll();
})

deleteBtns[0].addEventListener('click', () => {
    undo();
})

equalBtn.addEventListener('click',() => {
    equal();
})

prevResult.addEventListener('click', () => {

    screen.innerText += previousResult;
})
const equal = () => {
    let operate = screen.innerText;
    for(let i = 0; i < operate.length;i++){
        if(operate[i] == 'x')
            operate = operate.replace(operate[i],'*');
    }
    screen.innerText = parseFloat(eval(operate).toFixed(6));
}

const deleteAll = () => {
    previousResult = screen.innerText;
    screen.innerHTML = "";
}

const undo = () => {
    let content = screen.innerHTML;
    screen.innerHTML = content.substring(0,content.length-1);
}