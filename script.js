const display = document.querySelector("#display");
let expression = "";

const addToDisplay = (value) => {
    expression += value;
    display.value =  expression;
}
   
const calculate = _ => {
    let result = eval(expression);
    display.value = result;
    expression = "";
}

const clearDisplay = () => {
    display.value = "";
    expression = "";
}