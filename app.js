Function addTask() {
  Const input = document.getElementById(“taskInput”);
  Const value = input.value.trim();
  
  If (value === “”) {
    Alert(“Task cannot be empty”);
    Return;
  }
  
  Const li = document.createElement(“li”);
  li.textContent = value;
  document.getElementById(“taskList”).appendChild(li);
  input.value = “”;
}

