
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
    taskList.appendChild(li);
    input.value = "";
  }
                          
  updateDeleteButtons();  // Add delete button functionality
});

function updateDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(button => {
    button.onclick = () => {
      button.parentElement.remove();
    };
  });
}

updateDeleteButtons();     // Initial call for pre-existing tasks