document.addEventListener("DOMContentLoaded", () => {
  fetchEquipment();
  createEquipment();



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

      for (const task of e.tasks){
        let t = new Task(task.id, task.description, task.completion, task.tools_needs)
      e.renderEquipment();
      t.renderTask();
      debugger;
      }

    }
  })
}


// create a new piece of equipment

function createEquipment(){
  let equipmentForm = document.getElementById("equipment-form")
  //add the rest of form (name, description, etc)
  equipmentForm.innerHTML +=
  `
  <form>
  Name:  <input type="text" id="name">
  <input type="submit" value="Add equipment">
  </form
  `

 equipmentForm.addEventListener("submit", equipmentFormSubmission)

}
function equipmentFormSubmission(){
  event.preventDefault();
  let name = document.getElementById("name").value
  //add the rest of variables per model

  let equipment = {
    name: name
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

//createTask



// delete equipment

function deleteEquipment(){
  let buttons = document.getElementsByClassName(".delete-button")
  for (const button of buttons){
    button.addEventListener("click", () => {
      debugger;
    })
  }
}
