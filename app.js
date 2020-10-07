
function increase() {
    document.getElementById('demoInput').stepUp();
 }


 function decrease() {
    document.getElementById('demoInput').stepDown();
 }

 function updateDisplay() {
    // select the element with class of `calculator-screen`
    const display = document.querySelector('.screen');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  