const calculator = document.querySelector('.calculator');
const display = document.getElementById('display');


let operation = '';
let priorOperation = '';
let item = '';
let numberRaw = [];
let numberCombined = '';
let number = '';
let numberPrior = '';
let total = '';

// What Button is Being Clicked
calculator.addEventListener('click', (e)=>{
    item = e.target.innerHTML;
    }
)

// Clear Number from Memory
function clearAll(){
    numberRaw = [];
    numberCombined = '';
    number = '';
    total = '';
}

// Main Function
calculator.addEventListener('click', (e)=> {
    switch (item) {
        case "C":
            console.log("Clear")
            clearAll();
            numberPrior = '';
            display.innerHTML = "&nbsp;";
            break;
        
        case "+":
            numberPrior = number;
            priorOperation = '+';
            clearAll();
            break;

        case "-":
            numberPrior = number;
            priorOperation = '-';
            clearAll();
            break;

        case "/":
            numberPrior = number;
            priorOperation = '/';
            clearAll();
            break; 

        case "*":
            numberPrior = number;
            priorOperation = '*';
            clearAll();
            break; 
        
        case "=":
            switch (priorOperation) {
                case "+":
                    total = numberPrior + number;
                    display.innerHTML = total;
                    console.log("case addition");
                    
                    number = total;
                    numberRaw = [];
                    break;

                case "-":
                    total = numberPrior - number;
                    display.innerHTML = total;
                    console.log("case subtraction");
                    
                    number = total;
                    numberRaw = [];
                    break;

                case "/":
                    total = numberPrior / number;
                    display.innerHTML = total;
                    console.log("case division");
                    
                    number = total;
                    numberRaw = [];
                    break;

                case "*":
                    total = numberPrior * number;
                    display.innerHTML = total;
                    console.log("case multiplication");
                    
                    number = total;
                    numberRaw = [];
                    break;                                            
            }

            break;

        default:
            numberRaw.push(item);
            numberCombined = numberRaw.join('');
            number = parseInt(numberCombined);
            
            console.log(`numberRaw is ${numberRaw} \n Default = ${number}`)
            display.innerHTML = number;
            break;
    }  
})