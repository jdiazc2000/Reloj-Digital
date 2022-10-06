const Timer = document.querySelector('.timeH1')
const beep = new Audio('beep-sound-8333.mp3')
let SoundOn = false


const updateClock = () => {
    let currentTime = new Date()
    Timer.innerText = currentTime.toLocaleTimeString('en-IT')
    setTimeout(updateClock,1000)
    SoundOn ? beep.play() : beep.pause()
} 

updateClock()

