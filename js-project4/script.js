let price = document.getElementById("price");
let dis = document.getElementById("discount");
let tip = document.getElementById("tip");
let submit = document.getElementById("submit")
let noce = document.getElementById("noce")
let discode = ["zmp0", "zmp1", "zmp2"]
let disamount = ["10", "20", "30"]
submit.onclick = function () {
    let disvalue = 0
    discode.forEach(function(e) {
        if (e === dis.value){
            disvalue = parseInt(disamount[dis.value[3]]) + 0
        } else if (disvalue == ""){disvalue = 0}
    })
    if (price.value > 0){
        let tipv = tip.value;
        if (tipv === "") {tipv = 0}
        let noc = price.value - disvalue + parseInt(tipv);
        console.log(tipv)
        noce.innerHTML = noc
        
    }
}
