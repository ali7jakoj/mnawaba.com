let button = document.getElementById("button")
let input = document.getElementById("date")
let text = document.getElementById("text")

button.onclick = function () {
    let date = input.value;
    let dop = new Date("7/22/2024");
    let mnawba = new Date(date);
    let daysInMiliScound = mnawba - dop;
    let ageInDays = Math.trunc((daysInMiliScound)/1000/60/60/24)
    mna(ageInDays, date);
}

console.log()
function mna(day, inpu){
    console.log(day % 4)
    if(day % 4 == 0){
        text.innerHTML = " تاريخ" + " "  + inpu + " "  + " هو دوام " 
    }
    else if(day % 4 == 1){
        text.innerHTML = " تاريخ" + " "  + inpu + " "  + " هو اوف اليوم الاول "
    } 
    else if(day % 4 == 2){
        text.innerHTML = " تاريخ" + " "  + inpu + " "  + " هو اوف اليوم الثاني "
    } 
    else if(day % 4 == 3){
        text.innerHTML = " تاريخ" + " "  + inpu + " "  + " هو لوف في اليوم الثالث والاخير "
    }else{
        text.innerHTML = "ادخلت تاريخ خاطئ يرجى ادخال تاريخ بعد تاريخ اليوم" 
    }
}