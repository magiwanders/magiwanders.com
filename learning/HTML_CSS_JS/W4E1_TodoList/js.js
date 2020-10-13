// Todo list that adds a list of task that can be marked as complete.

// MODEL - inner data representation

// returns list of all tasks
function getTaskList() {
  return document.querySelectorAll(".task")
}

// returns delete button of passed task
function getDeleteButtonOf(task) {
  return task.querySelector(".delete_button")
}

// returns checkbox of passed task
function getCheckboxOf(task) {
  return task.querySelector(".completed_checkbox")
}



// VIEW - all functions related to creating and showing what user sees

// returns a task object, already built, but not assigned as child
function createTask(task_name_text) {
  const completed_checkbox = document.createElement("input")
  completed_checkbox.classList.add("completed_checkbox")
  completed_checkbox.setAttribute("type", "checkbox");

  const label = document.createElement("label")
  label.innerHTML = "Completed"

  const delete_button = document.createElement("button")
  delete_button.classList.add("delete_button")
  delete_button.innerHTML = "Delete"

  const task_controls = document.createElement("div")
  task_controls.classList.add("task_controls")
  task_controls.appendChild(completed_checkbox)
  task_controls.appendChild(label)
  task_controls.appendChild(delete_button)

  const task_name = document.createElement("p")
  task_name.classList.add("task_name")
  task_name.innerHTML = task_name_text

  const task_container = document.createElement("div")
  task_container.classList.add("task_container")
  task_container.appendChild(task_controls)
  task_container.appendChild(task_name)

  const task = document.createElement("li")
  task.classList.add("task")
  task.appendChild(task_container)
  return task
}

// CONTROL - all webapp funcitons and behaviours

add_task_button.onclick = addTask

// adds task to list and assignes the delete and checkbox functions
function addTask() {
  const task_name_text = document.getElementById("task_name_input").value
  if (task_name_text != "") {
    const task = createTask(task_name_text)
    assignFunctions(task)
    document.getElementById("list").appendChild(task)
    document.getElementById("task_name_input").value = ""
  }

  // PART OF THE ALTERNATIVE SOLUTION
  //updateDeleteButtons()
  //updateTickboxes()
}

// assigns functions to delete button and checkbox elements
function assignFunctions(task) {
  getDeleteButtonOf(task).onclick = function() { // Assign to corresponding delete button onclick
        if(confirm("Are you sure?")) task.remove() // the removal of the task
  }
  getCheckboxOf(task).onclick = function() { // Assign to corresponding checkbox onclick
        toggleColor(task)
   }
}

// toggles color according to checkbox
function toggleColor(task) {
  if (getCheckboxOf(task).checked == true) {
    task.style.backgroundColor = "green"
  }
  else {
    task.style.backgroundColor = "red"
  }
}



/* ALTERNATIVE SOLUTION THAT REASSIGNES ALL FUNCTION EVERY TIME
// assigns all delete functions
function updateDeleteButtons() {
  getTaskList().forEach( // For each task in the tasklist
    function(task) {
      getDeleteButtonOf(task).onclick = function() { // Assign to corresponding delete button onclick
        if(confirm("Are you sure?")) task.remove() // the removal of the task
      }
    }
  )
}

//assigns all checkbox functions
function updateTickboxes() {
  getTaskList().forEach( // For each task in the tasklist
    function(task) {
      getCheckboxOf(task).onclick = function() { // Assign to corresponding checkbox onclick
        toggleColor(task)
      }
    }
  )
}
*/
