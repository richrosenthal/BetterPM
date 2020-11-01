class Task{
  constructor(description, completion, tools_needs, equipment_id){
    this.description = description;
    this.completion = completion;
    this.tools_needs = tools_needs;
    this.equipment_id = equipment_id;
  }

  renderTask() {
    let taskDiv = document.getElementById("task-container")

    taskDiv.innerHTML +=
    `
    <tr>
      <th>${this.id}</th>

      <th>

        ${this.description}
      </th>
      <th>

        ${this.completion}
      </th>
      <th>

        ${this.tools_needs}
      </th>
      <th>

        ${this.equipment_id}
      </th>
    </tr>
    <button class="delete-button" data-id=${this.id} onclick="deleteEquipment()">Delete EQ</button>
    <br>
    `


  }

}
