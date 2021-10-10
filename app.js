let secEl= document.querySelector('.sec')
//========================================================

function startSec(){
    let minEl=document.querySelector('.min')
    let hrEl=document.querySelector('.hrs')
    let now=new Date;
    let sec=now.getSeconds()
    let secCal=sec/60*360+90
    // console.log(secCal);
    secEl.style.transform=`rotate(${secCal}deg)`

    let min=now.getMinutes()
    let minCal=min/60*360+90
    // console.log(secCal);
    minEl.style.transform=`rotate(${minCal}deg)`

    let hours=now.getHours()
    let hrsCal=hours/12*360+90
    // console.log(secCal);
    hrEl.style.transform=`rotate(${hrsCal}deg)`
}

setInterval(startSec,1000)