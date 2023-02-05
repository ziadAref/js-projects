const hourz = document.querySelector(".hour")
const minutez = document.querySelector(".minute")
const secondz = document.querySelector(".second")

const black = document.querySelector(".black")
const white = document.querySelector(".white")
const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const color = document.getElementsByClassName("color")

const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")
const counter = document.querySelector(".counterInt")


function colored(){
    if(document.body.style.backgroundColor = "black" || "blue" || "red"){
        counter.style.color="white"
    }
    else if(document.body.style.backgroundColor = "white"){
        counter.style.color="black"
    }
}






        function clock(){
            const time = new Date();

            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();

            // console.log(hours, minutes, seconds)

            const hoursToDeg = (hours / 12) * 360;
            hourz.style.transform = `rotate(${hoursToDeg}deg)`;

            const minutesToDeg = (minutes / 60) * 360;
            minutez.style.transform = `rotate(${minutesToDeg}deg)`;

            const secondsToDeg = (seconds / 60) * 360;
            secondz.style.transform = `rotate(${secondsToDeg}deg)`;
        }

        setInterval(clock, 1000)




black.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="black"
    black.style.border ="2px solid gold"
    blue.style.border = "none"
    white.style.border = "none"
    red.style.border = "none"
    hourz.style.backgroundColor = "gold"
    minutez.style.backgroundColor = "gold"
    
})
white.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="white"
    white.style.border ="2px solid gold"
    black.style.border = "none"
    blue.style.border = "none"
    red.style.border = "none"
    hourz.style.backgroundColor = "white"
    minutez.style.backgroundColor = "white"
    
})
red.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="red"
    red.style.border ="2px solid gold"
    black.style.border = "none"
    white.style.border = "none"
    blue.style.border = "none"
    hourz.style.backgroundColor = "yellow"
    minutez.style.backgroundColor = "yellow"
    
})
blue.addEventListener("click", ()=>{
    document.body.style.backgroundColor ="blue"
    blue.style.border ="2px solid gold"
    black.style.border = "none"
    white.style.border = "none"
    red.style.border = "none"
    hourz.style.backgroundColor = "blue"
    minutez.style.backgroundColor = "blue"
    
})





decrease.addEventListener("click", () =>{
    counter.innerHTML--
})
reset.addEventListener("click", () =>{
    counter.innerHTML ="0"

})
increase.addEventListener("click", () =>{
    counter.innerHTML++
   
})
    


