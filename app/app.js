let taskId = 0
var input = document.getElementById("text-input");



input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addButton").click();
    }
});


function addTask() {
    taskId++;
    const ready = document.createElement('div');


    const newTask = document.createElement('div');
    newTask.classList.add('task-class', 'hover:ring-1', 'ring-pink-500', 'bg-zinc-700', 'min-h-16', 'w-5/5', 'flex', 'items-center', 'justify-between', 'p-4', 'rounded-md', 'my-2', 'duration-300', 'ease-in-out');
    newTask.id = `task-${taskId}`;

    let taskText = document.getElementById('text-input').value;

    let li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'ml-3 text-xl hover:text-zinc-400 text-zinc-50 hover:line-through textt';

    li.onclick = function () {
        li.classList.toggle('line-through');
    };


    ready.className = 'flex '

    const line = document.createElement('button');
    line.textContent = '✅';
    line.classList.add('rounded-md', 'hover:bg-zinc-500');
    line.onclick = function () {
        li.classList.toggle('line-through');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = 'rounded-md deletebtn hover:bg-zinc-500';
    deleteButton.onclick = function () {
        newTask.remove();
    };


    ready.appendChild(line);
    ready.appendChild(li);
    newTask.append(ready)
    newTask.appendChild(deleteButton); // Append the container with the trash button

    let ul = document.getElementById('task-ul');
    ul.appendChild(newTask);

    document.getElementById('text-input').value = ''; // Reset the input field
}
