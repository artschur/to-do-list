let taskId = 0
var input = document.getElementById("text-input");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addButton").click();
    }
});



function addTask() {
    taskId++
    const newTask = document.createElement('div')

    //adds the div to contain to do text
    newTask.classList.add('task-class', 'hover:ring-1', 'ring-pink-500', 'bg-zinc-700', 'h-16', 'w-5/5', 'flex', 'items-center', 'justify-between', 'p-4', 'rounded-md', 'my-2', 'duration-300', 'ease-in-out')
    newTask.id = `task-${taskId}`;

    let taskText = document.getElementById('text-input').value

    let li = document.createElement('li')

    li.textContent = taskText
    li.classList = 'text-lg hover:text-zinc-400 text-zinc-100 hover:line-through'

    li.onclick = function () {
        li.classList.toggle('line-through')
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.className = 'hover:bg-zinc-500 rounded-md pr-2'
    deleteButton.onclick = function () {
        newTask.remove();
    }

    newTask.appendChild(li)
    newTask.appendChild(deleteButton)

    let ul = document.getElementById('task-ul')
    ul.appendChild(newTask)



}