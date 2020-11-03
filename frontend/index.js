document.addEventListener("DOMContentLoaded", () => {
  fetchEquipment();
  createEquipment();
  createTask();

})


const BASE_URL = "http://localhost:3000"
//read - fetch equipment with tasks

function fetchEquipment(){
  console.log("here")
  fetch(`${BASE_URL}/equipment.json`)
  .then(resp =>resp.json())
  .then(equipments => {

    for (const equipment of equipments){

      let e = new Equipment(equipment.id, equipment.name,
        equipment.description, equipment.location, equipment.department, equipment.tasks)


      e.renderEquipment();
    }
  })
}


// create a new piece of equipment

function createEquipment(){
  let equipmentForm = document.getElementById("equipment-form")
  //add the rest of form (name, description, etc)
  equipmentForm.innerHTML +=
  `
  <h1>Add Equipment</h1>
  <form>
  Name:  <input type="text" id="name">
  Description:  <input type="text" id="description">
  Location:  <input type="text" id="location">
  Department:  <input type="text" id="department">
  <input type="submit" value="Add equipment">
  </form>
  `

 equipmentForm.addEventListener("submit", equipmentFormSubmission)

}


function createTask(){
  let taskForm = document.getElementById("task-form")
  //add the rest of form (name, description, etc)
  taskForm.innerHTML +=
  `
  <h1>Add Task</h1>
  <form>
  Equipemnt ID # <input type="text" id="equipment_id">
  Description:  <input type="text" id="task_description">
  Tools Needed:  <input type="text" id="tools_needs">
  <input type="submit" value="Add Task">
  </form>
  `

 taskForm.addEventListener("submit", taskFormSubmission)

}



function equipmentFormSubmission(){
  event.preventDefault();
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let location = document.getElementById("location").value
  let department = document.getElementById("department").value
  let task_description = document.getElementById("task_description").value

  let equipment = {
    name: name,
    description: description,
    location: location,
    department: department,

  }

  fetch(`${BASE_URL}/equipment`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(equipment)
  })
  .then(resp =>  resp.json())
  .then (equipment => {
    let e = new Equipment(equipment.id, equipment.name,
      equipment.description, equipment.location, equipment.department)
    e.renderEquipment();
  })
}

function taskFormSubmission(){
  event.preventDefault();
  let equipment_id = document.getElementById("equipment_id").value
  let description = document.getElementById("task_description").value
  let tools_needs = document.getElementById("tools_needs").value

  let task = {
    equipment_id: equipment_id,
    description: description,
    tools_needs: tools_needs,

  }

  fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  .then(resp =>  resp.json())
  .then (task => {
    let t = new Task(task.id, task.description, task.completion,
      task.tools_needs, task.equipment_id)
    t.renderTask();

  })
}





// delete equipment

function deleteEquipment(){

  let equipmentId = parseInt(event.target.dataset.id);

  fetch(`${BASE_URL}/equipment/${equipmentId}`, {
    method: 'DELETE'
  })

  this.location.reload()
}

// delete task

function deleteTask(){

  let taskId = parseInt(event.target.dataset.id);

  fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE'
  })

  this.location.reload()
}
