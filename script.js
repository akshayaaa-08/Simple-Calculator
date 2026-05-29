let display = document.getElementById("display");
function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function addBracket(){
    let text = display.value;
    let open = (text.match(/\(/g) || []).length;
    let close = (text.match(/\)/g) || []).length;
    let lastChar = text.slice(-1);

    if(text === "" ||"+-*/(%".includes(lastChar) || open === close){
        display.value += "(";
    }
    else{
        display.value += ")";
    }
}

function calculate(){
    try{
        let expr = display.value;
        let open = (expr.match(/\(/g) || []).length;
        let close = (expr.match(/\)/g) || []).length;
        while(open > close){
            expr += ")";
            close++;
        }
        display.value = eval(expr);
    }
    catch{
        display.value = "Error";
    }
}