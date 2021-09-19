//PARTE LOGICA
//Criar lista em branco
let taskList = []

//
function addTask(title) {
    taskList.push({
        title,
        done: false
    })
}

//Remover tarefa
function removeTask(index) {
    taskList.splice(index,1)
    renderList(taskList)
}

//PARTE IMPLEMENTAÇAO
//Renderizar lista
function renderList(taskList) {
    //referencia ul e cria listElements vazia
    var taskListElement = document.getElementById('listWrapper');
    let listElements = ''
    //listElements recebe cada item da taskList + HTML da li
    for (const index in taskList) {
        const item = taskList[index]
        listElements += `<li><label><input type="checkbox" name="inputTasks"> ${item.title}</label> <button onclick="removeTask(${index})"> &times;</button></li>`
    }
    //Insere a li(listElement) na ul(taskListElement)
    taskListElement.innerHTML = listElements
}

//clicarAdd executa 2 funções: addTask e renderList
function clicarAdd() {
    //referencia button, input e ul
    var buttonAddTask = document.getElementById('buttonAddTask');
    var newTask = document.getElementById('addTask');
    var taskListElement = document.getElementById('listWrapper');

    //chama a função addTask colocando como parâmetro o title da newTask
    addTask(newTask.value)
    
    //limpar input 
    newTask.value = ''

    //Adicionar tarefa na lista
    return renderList(taskList)
}

//Marcar tarefa

//Exibir lista de tarefas completadas

//Limpar todas tarefas