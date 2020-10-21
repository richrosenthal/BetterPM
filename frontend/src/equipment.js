class Equipment{
  constructor(id, name, description, location, department){
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.department = department;
  }

  //render instance method
  renderEquipment() {
    let equipmentDiv = document.getElementById("equipment-container")

    equipmentDiv.innerHTML +=
    `
    <ul>
      <h3>${this.id}</h3>
      <li>
        <label>Name</label>
        ${this.name}
      </li>
      <li>
        <label>Description</label>
        ${this.description}
      </li>
      <li>
        <label>Location</label>
        ${this.location}
      </li>
      <li>
        <label>Department</label>
        ${this.Deparment}
      </li>
    </ul>
    `
  }
}
