// 1. Write a JavaScript function to calculate the sum of two numbers.   

const sum =(a,b)=>{
    return a+b ;
}
const result  = sum(6,8)
console.log((result))

// 2. Write a JavaScript program to find the maximum number in an array. 

let maxArr = [5,99,77,5,23,45,74]

const maximum = maxArr.reduce((acc,curr)=>{
    return acc>curr? acc:curr
})

console.log(maximum)

// method 2  

function maxNum(arr){
    return Math.max(...maxArr)
}

// Write a JavaScript program to display the current day and time in the following format.  Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const one = document.getElementById('one') 

let days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
let today = new Date() ;

let day  = days[today.getDay()] ;


// get the current hour ,minutes , second 

let hour  = today.getHours();
let minutes = today.getMinutes();
let sec = today.getSeconds();


// console.log("today is :"+  day , hour,minutes ,sec) 

// determine if it's AM or PM 

let prepand = (hour >=12 ? "PM" : 'AM') ;

// convert 24 hours format to 12 hour format 

hour = (hour>= 12) ? hour -12 : hour

// check the special cases when hour is = 0 

if(hour===0 && prepand ==='PM'){
    if(minutes ===0  && sec === 0 ){
        hour = 12 ;
        prepand = 'noon'
    }
    else{
        hour  = 12 ;
        prepand = 'AM'
    }
}


console.log(`Today is : ${day}`)
console.log(`Current time is : ${hour} :  ${minutes} : ${sec}`)


// let showTime = document.getElementById('showTime')

// const results = setInterval(()=>{
//     console.log(`Today is : ${day}`)
// console.log(`Current time is : ${hour} :  ${minutes} : ${sec}`)

// let showTime  = (`Today is : ${day} Current time is : ${hour} :  ${minutes} : ${sec}`)
// return showTime;
// },50000)

// let myFunc = () =>{
//     let showTime  = (`Today is : ${day} Current time is : ${hour} :  ${minutes} : ${sec}`)
// return showTime;
// }


// showTime.innerText =`${setInterval(myFunc) , 1000}`
