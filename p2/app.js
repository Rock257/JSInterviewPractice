const btn = document.getElementById('btn')

btn.style.backgroundColor = 'transparent'


const printCurrent = (e)=>{
    console.log('BUTTON CLICKED')
    window.print()
}


const today = new Date();

let day = today.getDate();
let month = today.getMonth();
let year  = today.getFullYear();

let  monthName = ['January', 'February', 'March', 'April',' May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let result   = `today is : ${day} of ${monthName[month]} and Year is : ${year} `
console.log(result)

const currDay = document.getElementById('currentDate');

