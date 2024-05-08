function multiply() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  let mul = num1 * num2;
  console.log(mul);
  let res = document.getElementById('results')
  res.innerHTML =mul

}




function divide(){
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    let divide = num1/num2
    console.log(divide)
    let res = document.getElementById('results')
    res.innerHTML  =  divide

}

