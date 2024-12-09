let isDotPressed = false;
let operationInWork = '';
let numberInWork = '';

let lastUsedColor = "#000000";

const coordsStep = 30;
const lineHalfHeight = 5;
const graphCalculationStep = 0.01;
const graphCalcScale = 30;

var graphInput = document.getElementById("graphInput");
var canvas = document.getElementById("graphCanvas");




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

function graphCalcLoaded(){
    canvas = document.getElementById("graphCanvas");
    graphInput = document.getElementById("graphInput");
    graphInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        console.log(graphInput.value);
        functionEntered(e);
    }
    });

    const ctx = canvas.getContext("2d");

    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;
    console.log(canvasHeight + " " + canvasWidth);

    ctx.beginPath();
    ctx.strokeStyle = "rgba(200, 200, 200, 1)";
    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasWidth/2; i <= canvasWidth; i += coordsStep){
        ctx.moveTo(i, canvasHeight/2);
        ctx.lineTo(i, 0);
        ctx.lineTo(i, canvasHeight);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasWidth/2; i >= 0; i -= coordsStep){
        ctx.moveTo(i, canvasHeight/2);
        ctx.lineTo(i, 0);
        ctx.lineTo(i, canvasHeight);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasHeight/2; i <= canvasHeight; i += coordsStep){
        ctx.moveTo(canvasWidth, i);
        ctx.lineTo(0, i);
        ctx.lineTo(canvasWidth, i);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasHeight/2; i >= 0; i -= coordsStep){
        ctx.moveTo(canvasWidth, i);
        ctx.lineTo(0, i);
        ctx.lineTo(canvasWidth, i);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasWidth/2; i <= canvasWidth; i += coordsStep){
        ctx.lineTo(i, canvasHeight/2);
        ctx.lineTo(i, canvasHeight/2 + lineHalfHeight);
        ctx.lineTo(i, canvasHeight/2 - lineHalfHeight);
        ctx.lineTo(i, canvasHeight/2);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasWidth/2; i >= 0; i -= coordsStep){
        ctx.lineTo(i, canvasHeight/2);
        ctx.lineTo(i, canvasHeight/2 + lineHalfHeight);
        ctx.lineTo(i, canvasHeight/2 - lineHalfHeight);
        ctx.lineTo(i, canvasHeight/2);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasHeight/2; i <= canvasHeight; i += coordsStep){
        ctx.lineTo(canvasWidth/2, i);
        ctx.lineTo(canvasWidth/2 + lineHalfHeight, i);
        ctx.lineTo(canvasWidth/2 - lineHalfHeight, i);
        ctx.lineTo(canvasWidth/2, i);
    }

    ctx.moveTo(canvasWidth/2, canvasHeight/2);
    for(i=canvasHeight/2; i >= 0; i -= coordsStep){
        ctx.lineTo(canvasWidth/2, i);
        ctx.lineTo(canvasWidth/2 + lineHalfHeight, i);
        ctx.lineTo(canvasWidth/2 - lineHalfHeight, i);
        ctx.lineTo(canvasWidth/2, i);
    }
    ctx.stroke();

}

function functionEntered(e){
    canvas = document.getElementById("graphCanvas");
    graphInput = document.getElementById("graphInput");
    const parser = new exprEval.Parser();
    const ctx = canvas.getContext("2d");
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;
    ctx.moveTo(0, parser.evaluate(graphInput.value, {x: 0 - canvasWidth/2}));
    ctx.beginPath();
    let isPathClosed = false;
    for(i = -canvasWidth/2; i <= canvasWidth; i += graphCalculationStep)
    {
        if(isPathClosed) ctx.beginPath();
        var actualX = i;
        var actualY = parser.evaluate(graphInput.value, {x: actualX});

        var xOnCanvas = i * graphCalcScale + canvasWidth/2;
        var yOnCanvas = canvasHeight - canvasHeight/2 - (actualY * graphCalcScale);
        //console.log("Actual coords: " + actualX + " " + actualY + ". Coords on canvas: " + xOnCanvas + " " + yOnCanvas);

        if(xOnCanvas < 0 || yOnCanvas < 0 || xOnCanvas > canvasWidth || yOnCanvas > canvasHeight){
            ctx.moveTo(xOnCanvas, yOnCanvas);
            continue;
        }
        else ctx.lineTo(xOnCanvas, yOnCanvas);
    }
    console.log(ctx.strokeStyle);
    if(ctx.strokeStyle == "#000000") ctx.strokeStyle = "rgb(255, 0, 0)";
    else if(ctx.strokeStyle == "#ff0000") ctx.strokeStyle = "#00ff00";
    else if(ctx.strokeStyle == "#00ff00") ctx.strokeStyle = "#0000ff";
    else if(ctx.strokeStyle == "#0000ff") ctx.strokeStyle = "#000000";

    ctx.stroke();

    let historyDiv = document.createElement("DIV");
    let historySpan = document.createElement("SPAN");
    historySpan.innerHTML = "y = " + graphInput.value;
    historySpan.classList.add("historyElement");
    const formulasDiv = document.getElementById("formulasDiv");
    historyDiv.innerHTML = "<div style = \"background-color:" + ctx.strokeStyle +  "; height: 25px; width: 25px; \"></div>"
    historyDiv.appendChild(historySpan);
    historyDiv.classList.add("grafHistoryDiv");
    formulasDiv.appendChild(historyDiv);
}