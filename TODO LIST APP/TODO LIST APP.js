document.addEventListener('DOMContentLoaded', () => {
  let inputField = document.querySelector('#input-field');
  let btnAdd = document.querySelector('.btnAdd');
  const taskField = document.querySelector('.task-field');

  btnAdd.addEventListener('click', () => {
      if (inputField && inputField.value.trim() !== "") {
          console.log("Task added");
          let task = inputField.value;
          let div = document.createElement('div');
          div.classList.add('task');
          div.innerText = task;

          // Create a button to remove the task
          let removeBtn = document.createElement('button');
          removeBtn.innerText = 'Remove';
          removeBtn.addEventListener('click', () => {
              taskField.removeChild(div);
          });

          div.appendChild(removeBtn);
          taskField.appendChild(div);

          inputField.value = ""; // Clear the input field after adding the task
      } else {
          alert("Enter your task before pressing the Add task button");
      }
  });
});
