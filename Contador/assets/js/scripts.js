var currentNumberWrapper = document.getElementById("currentNumber");
var btnIncrement = document.getElementById("btn_increment");
var btnDecrement = document.getElementById("btn_decrement");

var currentNumber = 0;

btnIncrement.addEventListener("click",()=>{
    if(currentNumber < 10){
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber; 
    }
    changeColor();
})

btnDecrement.addEventListener("click",()=>{
    if(currentNumber > -10){
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber; 
    }
    changeColor();
})

function changeColor(){
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }else{
        document.getElementById("currentNumber").style.color = "grey";
    }
}