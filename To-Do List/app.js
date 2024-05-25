let form = document.querySelector("#div1 form");
let main = document.querySelector('#main');
let clear = document.querySelector('#clear');

 
form.addEventListener("submit", (event) => {
    let task1 = event.target.elements.task1.value;
    let timestamp = new Date().toLocaleString();

    let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
    tasks.push({
        'task1': task1,
        'timestamp': timestamp
    });
    localStorage.setItem('taskList', JSON.stringify(tasks));
    event.target.reset();
    display();
    event.preventDefault();
});

clear.addEventListener('click', () => {
    localStorage.removeItem('taskList');
    display();
});
let display = () => {
  let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
  let finalTask = "";
  tasks.forEach((task, i) => {
      finalTask += `
      <div class="card custom-card mb-3 card1 col-md-6">
      <div class="card-body">
        <input type="text" class="form-control input2" value="${task.task1}                                                 ${task.timestamp}" aria-label="Add a new task" aria-describedby="button-addon2">
        <button onclick="removeData(${i})" class="btn btn-danger btn-remove mt-3" type="button" id="button2">Remove</button>
        <button type="submit" class="btn btn-success btn-completed mt-3" onclick="performActions(${i})">Completed</button>

      </div>
    </div>
    `;
     });
  main.innerHTML = finalTask;
};
function performActions(index) {
  Openpopup();
  removeData(index);
}


let removeData = (index) => {
  let tasks = JSON.parse(localStorage.getItem('taskList')) ?? [];
  tasks.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(tasks));
  display();
}
var popup = document.getElementById("popup");
        function Openpopup(){
            popup.classList.add("open-popup");
        }
        function Closepopup(){
            popup.classList.remove("open-popup");
        }

window.onload = () => {
    display();
};