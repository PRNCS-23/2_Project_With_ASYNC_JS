// 1 SET TIME OUT
setTimeout( ()=>{
    console.log('PRINCE SHARMA');
}, 2000) 

// 2 SET TIME OUT STORE FUNCTION IN VARIABLE
const Name = function(){
    console.log('PRINCE SHARMA');
}

setTimeout(Name, 4000)

// 3 
const changeHeading = function(){
    document.querySelector('.h1').innerText = "PRINCE SHARMA"
}
const headingChanger = setTimeout( changeHeading, 8000)

// CLEAR TIME OUT 
document.querySelector('#Stop').addEventListener('click', ()=>{
    clearTimeout(headingChanger)
    console.log("STOPPED");
})


// SET INTERVAL
const intervalId  = setInterval(()=>{
    console.log("PRINCE SHARMA");
}, 2000)

// CLEAR INTERVAL
clearInterval(intervalId)

// START INTERVAL AND CLEAR INTERVAL
let interval;

document.querySelector('#startInterval').addEventListener('click',()=>{
    interval = setInterval( () => {
        console.log("PRINCE SHARMA")
    }, 1000)
})
document.querySelector('#stopInterval').addEventListener('click', () => {
    clearInterval(interval)
})