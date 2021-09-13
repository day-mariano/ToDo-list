//Eventos de mouse
var buttonAddTask = document.getElementById('buttonAddTask');
var newTask = document.getElementById('addTask');
var list = document.getElementById('listWrapper');

function clicarAdd() {
    var buttonAddTask = document.getElementById('buttonAddTask');
    var newTask = document.getElementById('addTask');
    var list = document.getElementById('listWrapper');

    buttonAddTask.style.background = 'rgb(126, 91, 255)';
    list.innerHTML += `<li><label>
    <input type="checkbox" name="inputTasks"> ${newTask.value}</label></li>`
    newTask.value = ''
}
function entrarAdd() {
    var buttonAddTask = document.getElementById('buttonAddTask');
    buttonAddTask.style.background = 'rgb(177, 185, 247)';
}
function sairAdd() {
    var buttonAddTask = document.getElementById('buttonAddTask');
    buttonAddTask.style.background = 'rgb(218, 218, 218)';
}

//Exibir lista de tarefas


//Adicionar tarefa


//Remover tarefa


//Exibir lista de tarefas completadas