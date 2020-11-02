class Equipment{
  constructor(id, name, description, location, department, tasks){
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.department = department;
    this.tasks = tasks;
  }

  //render instance method
  renderEquipment() {
    let equipmentDiv = document.getElementById("equipment-container")
    let taskDiv = document.getElementById("task-container")

    equipmentDiv.innerHTML +=
    `
    <h4>
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

        ${this.department}
      </th>
    </tr>
    <button class="delete-button" data-id=${this.id} onclick="deleteEquipment()">Delete EQ</button>
    <br>
    </h4>


    `


      for (const task of this.tasks){
        let t = new Task(task.id, task.description,
          task.completion, task.tools_needs, task.equipment_id)


        t.renderTask();
      }
  }


}
