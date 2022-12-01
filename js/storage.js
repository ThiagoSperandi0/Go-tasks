function getTasks() {
    return JSON.parse(localStorage.getItem('@go-tasks')) || [];
}

function setTasks(tasks){
    localStorage.setItem('@go-tasks', JSON.stringify(tasks));
} 