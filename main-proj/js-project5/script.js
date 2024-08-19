let numpers = []
let display = document.getElementById("display")
let calt = "";
function doit(input){
    numpers.push(input)
    
    calt = numpers.join("")
    display.innerHTML = calt
}
function calc(){
    let e = eval(calt)
    numpers.splice(0, numpers.length)
    numpers.push(e)
    display.innerHTML = e
}
function del(){
    numpers.pop()
    display.innerHTML = numpers
}
function delall(){
    numpers.splice(0, numpers.length)
    display.innerHTML = "0"
}