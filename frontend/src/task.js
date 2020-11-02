class Task{
  constructor(id, description, completion, tools_needs, equipment_id){
    this.id = id;
    this.description = description;
    this.completion = completion;
    this.tools_needs = tools_needs;
    this.equipment_id = equipment_id;
  }

  renderTask() {
    let taskDiv = document.getElementById("equipment-container")

    taskDiv.innerHTML +=
    `
    <tr>
      <th>
        <label>Task#</label>
        ${this.id}
      </th>

      <th>
        <label>Description:</label>
        ${this.description}
      </th>

      <th>
        <label>Tools Needed:</label>
        ${this.tools_needs}
      </th>

    </tr>
    <button class="delete-button" data-id=${this.id} onclick="deleteEquipment()">Delete Task</button>
    <br>


    
    `


  }

}
