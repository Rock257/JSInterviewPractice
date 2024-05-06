const btn = document.getElementById("btn");

btn.style.backgroundColor = "transparent";

const printCurrent = (e) => {
  console.log("BUTTON CLICKED");
  window.print();
};

const today = new Date();

let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

let monthName = [
  "January",
  "February",
  "March",
  "April",
  " May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let result = `today is : ${day} of ${monthName[month]} and Year is : ${year} `;
console.log(result);

const currDay = document.getElementById("currentDate");

// p3 area

let a = 5;
let b = 6;
let c = 7;

const areaFind = (a, b, c) => {
  let s = (a + b + c) / 2;

  // by heroine formula
  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  console.log(area);
};

areaFind(5, 6, 7);

// random num

const getRandom = () => {
  let useNum = prompt("Enter a number between 1 to 10");
  console.log(useNum);

  let num = Math.floor(Math.random() * 10);
  console.log(num)
  if (useNum === num) {
    console.log("You Won");
  } else {
    console.log("You Lose");
  }
};
getRandom();
