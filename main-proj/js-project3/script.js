if (localStorage.getItem("user_activtion")){
    
}else{
    localStorage.setItem("user_activtion", false)
}






let button = document.getElementById("button")
let input = document.getElementById("date")
let text = document.getElementById("text")
let user_activtion = localStorage.getItem("user_activtion");
let codebutton = document.getElementById("submit")
let codeinput = document.getElementById("code-input")
let formcode = document.querySelector(".bor")
let mnawabanumper = document.getElementById("pos")

codebutton.onclick = function () {
let inputv = codeinput.value;
let code = new XMLHttpRequest();

code.open("GET", "/pasword.json")
code.onload = function() {
    console.log(code.status)
    let codes
    if (code.status >= 200 && code.status <= 299){
        codes = JSON.parse(code.responseText);
    }
    console.log(codes)
    for (i = 0; i < codes.length; i++){
        if (inputv === codes[i]) {
            console.log(true)
            localStorage.setItem("user_activtion", true)
            
            
        }

            
        
    }
};

code.send()
}









if (user_activtion == "false") {
    document.getElementById("body").classList.add("dis")
    formcode.classList.remove("dis")
}else{
    document.getElementById("body").classList.remove("dis")
    formcode.classList.add("dis")



    button.onclick = function () {
        var d = "";
        if (mnawabanumper.value === "1"){
            d = "7/20/2024";
        } else if(mnawabanumper.value === "2"){
            d = "7/21/2024";
        }else if(mnawabanumper.value === "3"){
            d = "7/22/2024";
        }else if(mnawabanumper.value === "4"){
            d = "7/23/2024";
        }
        console.log(d)
        let date = input.value;
        let dop = new Date(d);
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
}
