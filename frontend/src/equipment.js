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
    <tr>
      <th>${this.id}</th>
      <th>

        ${this.name}
      </th>
      <th>

        ${this.description}
      </th>
      <th>

        ${this.location}
      </th>
      <th>

        ${this.Deparment}
      </th>
    </tr>
    <button class="delete-button" data-id=${this.id} onclick="deleteEquipment()">Delete EQ</button>
    <br>
    `
  }
}
