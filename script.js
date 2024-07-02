

 


setInterval(()=>{
    const currentDate = new Date()
    const currentTime = currentDate.toUTCString().slice(17,25)
    document.getElementById("currentTime").textContent = currentTime
}, 100)

const date = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[date.getDay()];

document.getElementById("currentDayOfWeek").textContent = currentDayOfWeek