const todoList = document.getElementById("todoList");
let completedCount = 0;


function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => renderTodos(data.slice(0, 20))) 
        .catch(error => console.error("Error fetching todos:", error));
}


function renderTodos(todos) {
    todos.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const label = document.createElement("label");
        label.className = todo.completed ? "completed" : "";
        label.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked disabled" : ""} 
                onchange="markCompleted(this)">
            ${todo.title}
        `;
        listItem.appendChild(label);
        todoList.appendChild(listItem);
    });
}


function markCompleted(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.classList.add("completed");
        completedCount++;

       
        validateTasks().then(message => {
            alert(message);
        }).catch(error => {
            console.error(error);
        });
    } else {
        checkbox.parentElement.classList.remove("completed");
        completedCount--;
    }
}


function validateTasks() {
    return new Promise((resolve, reject) => {
        if (completedCount === 5) {
            resolve("Congrats. 5 Tasks have been Successfully Completed!");
        }
    });
}


function logout() {
    window.location.href = "index.html"; 
}


fetchTodos();
