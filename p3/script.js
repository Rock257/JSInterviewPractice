// alert(document.URL)

function multiply() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;
  let mul = num1 * num2;
  console.log(mul);
  let res = document.getElementById("results");
  res.innerHTML = mul;
}

function divide() {
  let num1 = document.getElementById("firstNumber").value;
  let num2 = document.getElementById("secondNumber").value;

  let divide = num1 / num2;
  console.log(divide);
  let res = document.getElementById("results");
  res.innerHTML = divide;
}

// p2

// P-2 Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function getDiff() {
  const fixedNum = 13;

  let userNumber = document.getElementById("userNum").value;

  // differnce
  // let diff = userNumber - fixedNum;
  // console.log(diff);
  // let showNum = document.getElementById('showNum')
  // showNum.innerHTML = diff
  
  let diff = (userNumber - fixedNum)

  if (diff >= 13) {

     diff = (userNumber - fixedNum)*2;
    console.log(diff);
    let showNum = document.getElementById("showNum");
    showNum.innerHTML = diff;
  }

  else{
    diff = (userNumber - fixedNum);
    console.log(diff);
    let showNum = document.getElementById("showNum");
    showNum.innerHTML = diff;
  }
  return diff
}


// p-3  

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  


function sum(x,y){
  const showSum = document.getElementById('sum') ;

  let sumNum = x+y ;

  if(x===y){
    sumNum = (x+y )*3;
  }
  else{
    sumNum = sumNum ;
  }
  showSum.innerHTML = sumNum;
  return sumNum ;
}




