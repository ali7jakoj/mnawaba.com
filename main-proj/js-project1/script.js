let input = document.querySelector(".input")
let submit = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
let delall = document.querySelector(".bs")
let taskarray = [];


if (localStorage.getItem("tasks")) {
    taskarray = JSON.parse(localStorage.getItem("tasks"));
  }


delall.onclick = function () {
    localStorage.removeItem("tasks")
    tasks.innerHTML = ""
    

}



getdata()
// add task
submit.onclick = function () {    
    if (input.value !== ""){
        addtasktoarray(input.value);
        input.value = "";
    }
}

tasks,addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        // Remove Task From Local Storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // Remove Element From Page
        e.target.parentElement.remove();
        // task elemnt
        
    }
    if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
    }
})

function addtasktoarray(tasktext) {
    const task = {
        id: Date.now(),
        title: tasktext,
        completed: false,
      };
      console.log(taskarray)
    // push task to array of tasks
    taskarray.push(task)
    console.log(taskarray)
    // add task to html
    addtasktohtmlfrom(taskarray);
    // add task to localestorege
    adddatatolacalstoreage(taskarray)
    
}



function addtasktohtmlfrom(array) {
    tasks.innerHTML = "";
    array.forEach((task) => {
        // create main div
        let div = document.createElement("div")
        div.className = "task";
        // check if it done or not
        if (task.completed === true) {
            div.className = "task done"
        }

        div.setAttribute("data-id", task.id)
        div.appendChild(document.createTextNode(task.title))
        // create del button
        let span = document.createElement("span")
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"))
        // append del button
        div.appendChild(span)
        // add task div to body
        tasks.appendChild(div)
    });
}



function adddatatolacalstoreage(array) {
    localStorage.setItem("tasks", JSON.stringify(array))

}
function getdata() {
    let data = localStorage.getItem("tasks")
    if (data) {
        let task = JSON.parse(data)
        addtasktohtmlfrom(task)
    }
}

function deleteTaskWith(taskid) {
    taskarray = taskarray.filter((task) => task.id != taskid);
    adddatatolacalstoreage(taskarray);
}

function toggleStatusTaskWith(taskid) {
    for (let i = 0; i < taskarray.length; i++) {
        if(taskarray[i].id == taskid){
            taskarray[i].completed == false ? (taskarray[i].completed = true) : (taskarray[i].completed = false);
            adddatatolacalstoreage(taskarray);
        }
    }
    
}
