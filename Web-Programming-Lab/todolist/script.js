const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAllBtn = document.getElementById("clearAllBtn");

// 1. Load saved tasks from LocalStorage or start with empty list
let tasks = JSON.parse(localStorage.getItem("todos")) || [
  { text: "Learn HTML, CSS & JavaScript", completed: true },
  { text: "Complete lab assignment", completed: false }
];

// 2. Save tasks to LocalStorage and refresh the screen
function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(tasks));
  renderTasks();
}

// 3. Render all tasks to the list
function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="empty-msg">No tasks yet! Add one above.</li>';
    taskCount.textContent = "0 tasks";
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("completed");
    }

    // Checkbox and task text wrapper
    const content = document.createElement("div");
    content.className = "task-content";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      tasks[index].completed = checkbox.checked;
      saveAndRender();
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    content.appendChild(checkbox);
    content.appendChild(span);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveAndRender();
    });

    li.appendChild(content);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  // Update tasks remaining counter
  const pendingCount = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${pendingCount} item${pendingCount === 1 ? "" : "s"} left`;
}

// 4. Add new task
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ text: taskText, completed: false });
  saveAndRender();

  input.value = "";
  input.focus();
}

// 5. Clear all tasks
function clearAll() {
  if (tasks.length === 0) return;
  if (confirm("Clear all tasks?")) {
    tasks = [];
    saveAndRender();
  }
}

// Event Listeners
addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

clearAllBtn.addEventListener("click", clearAll);

// Initial display on load
renderTasks();