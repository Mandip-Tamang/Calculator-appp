let btn = document.querySelectorAll("#number");
let operations = document.querySelectorAll("#operator")
let displayArea = document.querySelector("#resultArea");
let resetMode = document.querySelector("#reset");
let btnBS = document.querySelector("#backSpace");
let mod = document.querySelector("#modulo");
let operation = "";
let equalClicked = false;
let operand1 = "";
let operand2 = "";
let operationVal = false;
var res;

const clearArea = () => {
    displayArea.innerText = ''
}

const calculate = (n1, n2, operat) => {

    n1 = Number(n1);
    n2 = Number(n2);
    let result;
    if (operat === "+") {
        result = n1 + n2;
        return result;
    }
    else if (operat === "-") {
        result = n1 - n2;
        return result;
    }
    else if (operat === "÷") {
        result = n1 / n2;
        return result;
    }
    else {
        result = n1 * n2;
        return result;
    }

};

for (let operand of btn) {
    operand.addEventListener("click", () => {
        if (!operationVal) {
            operand1 += operand.innerText;
            displayArea.innerText = operand1;
        }
        else {
            clearArea();
            operand2 += operand.innerText;
            displayArea.innerText = operand2;
        }
    })
}
for (let op of operations) {
    op.addEventListener("click", () => {
        if (op.innerText != "=") {
            operation = op.innerText;
            clearArea();
            displayArea.innerText = operation;
            operationVal = true;
        }
        else {
            equalClicked = true;
        }
        if (equalClicked) {
             res = calculate(operand1, operand2, operation);
            displayArea.innerText = res;
            equalClicked = false;
            operand1 = res;
            operand2 = "";
        }
    })
}
resetMode.addEventListener("click", () => {
    clearArea();
    operation = "";
    operand1 = "";
    operand2 = "";
    operationVal = false;
    equalClicked = false;
})
btnBS.addEventListener("click", () => {
    if (displayArea.innerText === operand1) {
        operand1 = operand1.slice(0, -1); 
        displayArea.innerText = operand1;
    } else if (displayArea.innerText === operand2) {
        operand2 = operand2.slice(0, -1);
        displayArea.innerText = operand2;
    } else {
        console.log("Need to delete result");
        res = displayArea.innerText;
        res = res.slice(0, -1); 
        operand1 = res;
        displayArea.innerText = res;
    }
});

mod.addEventListener("click", () => {
    let temp = parseInt(displayArea.innerText) / 100;
    if (displayArea.innerText == operand1) {
        operand1 = temp.toString();
        displayArea.innerText = operand1;
    }
    else if(displayArea.innerText == operand2){
        operand2 = temp.toString();
        displayArea.innerText = operand2;
    }
   
})

