let $buttons = document.querySelectorAll("button");
let input = document.querySelector(".input");
let total = document.querySelector(".total");

let valOne = [];
let valTwo = [];
var operator = [];
let finalAnswer = 0;

[...$buttons].map(x => {x.addEventListener("click", function (e) {
        switch (this.innerHTML) {
            case "C":
                clearDisplay();
                break;
            case "=":
                makeCalculation();
                break;    
            case "+":
                operator.splice(0, 1, this.innerHTML)
                console.log(operator);
                storeValue();
                break;
            case "*":
                operator.splice(0, 1, this.innerHTML)
                console.log(operator);
                storeValue();
                break;
            case "/":
                operator.splice(0, 1, this.innerHTML)
                console.log(operator);
                storeValue();
                break;
            case "-":
                operator.splice(0, 1, this.innerHTML);
                console.log(operator);
                storeValue();
                break;
            default:
                 if (valOne.length > 8 ) {
                    ErrorInput();
                }
                        else {
                        valOne.push(this.innerText);
                        input.textContent = valOne.join("");
                        console.log(valOne);
                        }
                         break;
            }
    })
})

function ErrorInput(){
    input.textContent = "";
    total.textContent = "Error, coba lagi"
    setTimeout (clearDisplay ,2000)
}
function clearDisplay() {
    input.textContent = "";
    total.textContent = ""
    valOne = [];
    valTwo = [];
    operator = [];
}
function makeCalculation() {
    if (valTwo.length > 0 && operator.length!==0) {
        finalAnswer = eval(valTwo + operator + valOne.join(""));
        total .textContent = "";
        total.textContent = eval(finalAnswer).toFixed(2);
        input.textContent = "";
        valTwo = eval(finalAnswer);
        valOne = [];
    } else if (operator.length == 0) {
        total.textContent = "Error, coba lagi.";
    } else if(finalAnswer == false){
        total.textContent = "NaN, coba lagi."
    }
    else {
        finalAnswer = finalAnswer = eval(valTwo + operator + valOne.join(""));
        console.log(finalAnswer);
        total.textContent = "";
        input.textContent = "";
        total.textContent = eval(finalAnswer).toFixed(2);
        valTwo = eval(finalAnswer);
        valOne = [];
    }
}

function storeValue() {
        if (valOne.length == 0 && valTwo.length == 0 ) {
            return false;
        }else if (valTwo.length > 0) {
            total.textContent = valTwo + " " + operator;
        }else if(valTwo.length == 0) {
            valTwo.push(valOne.join(""));
            valOne = [];
            input.textContent = "";
        }
        total.textContent = valTwo + " " + operator;
}
