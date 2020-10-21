document.addEventListener("DOMContentLoaded", () => {
  fetchEquipment();
})


const BASE_URL = "http://localhost:3000/"
//read - fetch equipment

function fetchEquipment(){
  console.log("here")
  fetch(`${BASE_URL}/equipment`)
  .then(resp =>resp.json())
  .then(equipments => {

    for (const equipment of equipments){
      console.log("rails obj", equipment)
      let e = new Equipment(equipment.id, equipment.name,
        equipment.description, equipment.location, equipment.department)

      console.log(e)
    }
  })
}

// create a new piece of equipment

function createEquipment(){

}

// delete equipment

function deleteEquipment(){

}
