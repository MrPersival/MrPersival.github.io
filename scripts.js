let isDotPressed = false;
let operationInWork = '';
let numberInWork = '';

function action(actionName){
    const numberField = document.getElementById("mainNumber");
    const actionField = document.getElementById("numberAndOperationInWork");
    if(actionName == "CE"){
        numberField.value = "";
        isDotPressed = false;
        operationInWork = "";
        actionField.innerHTML = "";
        return;
    }
    if(actionName == "C"){
        numberField.value = "";
        isDotPressed = false;
    }
    if(actionName == "pi"){
        numberField.value = Math.PI;
        return;
    }
    if(actionName == "-" && numberField.value == ""){
        numberField.value = "-";
        return;
    }
    console.log(actionName);
    if(numberField.value.length == 0 || operationInWork != '') return;
    switch(actionName){
        case '.':
            if(isDotPressed) return;
            if(numberField.value == "") numberField.value = 0; 
            isDotPressed = true;
            numberField.value = String(numberField.value) + '.';
            break;
        case 'delete':
            numberField.value = numberField.value.substring(0, numberField.value.length - 1);
            break;
        case 'exponent':
            actionButtonPressed("^");
            break;
        case 'procent':
            actionButtonPressed("%");
            break;
        case 'root':
            actionField.innerHTML = "√(" + numberField.value + ")";
            numberField.value = Math.sqrt(numberField.value);
            finishNonEqutaionOperation();
            break;
        case 'multiply':
            actionButtonPressed("*");
            break;
        case 'divide':
            actionButtonPressed("/");
            break;
        case 'log':
            actionField.innerHTML = "log(" + numberField.value + ")";
            numberField.value = Math.log10(numberField.value);
            finishNonEqutaionOperation();
            break;
        case '-':
            actionButtonPressed("-");
            break;
        case '+':
            actionButtonPressed("+");
            break;

        case 'sin':
            actionField.innerHTML = "sin(" + numberField.value + ")";
            numberField.value = Math.sin(numberField.value * Math.PI / 180);
            finishNonEqutaionOperation();
            break;
        case 'cos':
            actionField.innerHTML = "cos(" + numberField.value + ")";
            numberField.value = Math.cos(numberField.value * Math.PI / 180);
            finishNonEqutaionOperation();
            break;
        case 'tan':
            actionField.innerHTML = "tan(" + numberField.value + ")";
            numberField.value = Math.tan(numberField.value * Math.PI / 180);
            finishNonEqutaionOperation();
            break;
        
        case 'arcsin':
            actionField.innerHTML = "arcsin(" + numberField.value + ")";
            numberField.value = Math.asin(numberField.value) / Math.PI * 180;
            finishNonEqutaionOperation();
            break;
        case 'arccos':
            actionField.innerHTML = "arccos(" + numberField.value + ")";
            numberField.value = Math.acos(numberField.value) / Math.PI * 180;
            finishNonEqutaionOperation();
            break;
        case 'arctan':
            actionField.innerHTML = "arctan(" + numberField.value + ")";
            numberField.value = Math.atan(numberField.value) / Math.PI * 180;
            finishNonEqutaionOperation();
            break;

        default:
            console.log("Unknown action in action: " + actionName);
    }
}

function enterNumber(number){
    const numberField = document.getElementById("mainNumber");
    if(isDotPressed && numberField.value.length == 0) isDotPressed = false;
    numberField.value = String(numberField.value) + String(number);
}

function actionButtonPressed(actionName){
    const numberField = document.getElementById("mainNumber");
    const actionField = document.getElementById("numberAndOperationInWork");
    actionField.innerHTML = numberField.value + actionName;
    operationInWork = actionName;
    numberInWork = numberField.value;
    numberField.value = "";
    isDotPressed = false;
}

function equation(){
    const numberField = document.getElementById("mainNumber");
    const actionField = document.getElementById("numberAndOperationInWork");
    let result = 0;
    switch(operationInWork){
        case "^":
            result = parseFloat(numberInWork) ** parseFloat(numberField.value);
            break;
        case "/":
            result = parseFloat(numberInWork) / parseFloat(numberField.value);
            break;
        case "*":
            result = parseFloat(numberInWork) * parseFloat(numberField.value);
            break;
        case "-":
            result = parseFloat(numberInWork) - parseFloat(numberField.value);
            break;
        case "+":
            result = parseFloat(numberInWork) + parseFloat(numberField.value);
            break;
        case "%":
            result = parseFloat(numberInWork) / 100 * parseFloat(numberField.value);
            break;
        case "":
            result = numberField.value;
        default:
            console.log("Unknown action in equation(): " + operationInWork);
    }
    let historySpan = document.createElement("SPAN");
    historySpan.classList.add("historyElement");
    historySpan.innerHTML = numberInWork + " " + operationInWork + " " + numberField.value + " = " + "<b>" + result + "</b>";
    const historyDiv = document.getElementById("operationsHistory");
    historyDiv.appendChild(historySpan);
    actionField.innerHTML = numberInWork + " " + operationInWork + " " + numberField.value + " =";
    operationInWork = "";
    numberField.value = result; 
}

function finishNonEqutaionOperation(){
    const numberField = document.getElementById("mainNumber");
    const actionField = document.getElementById("numberAndOperationInWork");
    let historySpan = document.createElement("SPAN");
    historySpan.classList.add("historyElement");
    historySpan.innerHTML = actionField.innerHTML + " " + " = " + "<b>" + numberField.value + "</b>";
    const historyDiv = document.getElementById("operationsHistory");
    historyDiv.appendChild(historySpan);
    operationInWork = "";
}