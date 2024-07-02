

 


setInterval(()=>{
    const currentDate = new Date()
    const currentTime = currentDate.toUTCString().slice(17,25)
    document.getElementById("currentTime").textContent = currentTime
}, 100)