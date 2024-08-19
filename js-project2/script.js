let start = document.getElementById("start");
let res = document.getElementById("restart")
let mc = document.getElementById("m");
let sc = document.getElementById("s");

setInterval(showtime, 1000);


function showtime() {
    let time = new Date;
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds();
    let am_pm = "";
    if (hour > 12) {
        am_pm = "PM"
        hour = hour - 12;
    } else{
        am_pm = "AM"
    }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("reg").innerHTML = am_pm;
}

showtime()

function z(a, b) {
    setTimeout(a.innerHTML = b, 1000)
}
function timer() {
    start.onclick = function() {
        let m = 0;
        let s = 0;
        setInterval(function() {
            s++
            sc.innerHTML = s;
        }, 1000)
        setInterval(function() {
            if (s == 0){
                m++
                mc.innerHTML = m;
            }
         }, 1000)
        setInterval(function() {
            if (s == 59){
                s = -1
            }
        }, 1000)

    }
}
timer()
res.onclick = function() {
    location.reload()

}
