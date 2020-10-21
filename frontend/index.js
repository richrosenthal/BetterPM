document.addEventListener("DOMContentLoaded", () => {
  fetchEquipment();
  createEquipment();
  equipmentFormSubmission();
})


const BASE_URL = "http://localhost:3000/"
//read - fetch equipment

function fetchEquipment(){
  console.log("here")
  fetch(`${BASE_URL}/equipment`)
  .then(resp =>resp.json())
  .then(equipments => {

    for (const equipment of equipments){

      let e = new Equipment(equipment.id, equipment.name,
        equipment.description, equipment.location, equipment.department)
      e.renderEquipment();

    }
  })
}

// create a new piece of equipment

function createEquipment(){
  let equipmentForm = document.getElementById("equipment-form")

  equipmentForm.innerHTML +=
  `
  <form>
  Name:  <input type="text id="name">
  <input type="submit" value="Add equipment">
  </form
  `

 equipmentForm.addEventListener("submit", equipmentFormSubmission)

}
function equipmentFormSubmission(){
  

}
// delete equipment

function deleteEquipment(){

}
