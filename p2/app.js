const btn = document.getElementById('btn')

btn.style.backgroundColor = 'transparent'


const printCurrent = (e)=>{
    console.log('BUTTON CLICKED')
    console.log(e)
    window.print()
}