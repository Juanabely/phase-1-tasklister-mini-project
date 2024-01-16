document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
        form.addEventListener('submit',(e) => {
          e.preventDefault();
          displayList(e.target['new-task-description'].value)
          form.reset();
        })
      });
function displayList(toDo) {
  let list = document.createElement('li');
  let button = document.createElement('button');
  button.addEventListener("click",handleDelete);
  button.textContent = 'Delete';
  list.textContent = `${toDo}`
  list.appendChild(button);
  document.querySelector('#tasks').appendChild(list);
}

function handleDelete(e){
  e.target.parentNode.remove();
}