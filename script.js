//PARTE LOGICA
//Criar lista em branco
let taskList = []

//Cria um objeto na lista com done false
function addTask(title) {
    taskList.push({
        title,
        done: false,
        createdAt: new Date(),
    })
}
//Remover tarefa
function removeTask(date) {
    let taskIndex;
    for (const index in taskList) {
        const item = taskList[index]
        if (item.createdAt.getTime() === date) {
            taskIndex = index;
            break;
        }
    }
    taskList.splice(taskIndex, 1)
    renderList(taskList)
    renderPendingTasksTotal()
}
//Marcar tarefa
function checkTask(index) {
    taskList[index].done= !taskList[index].done
    renderPendingTasksTotal()
}
//Total de itens pendentes: tamanho da lista com done false
function sumTasks() {
    var total = 0
    //Para cada item na lista com o done false soma +1 
    for (const item of taskList) {
        if (item.done == false) {
            total++
        }
    }
    return total
}
//Exibir lista de tarefas completadas
var isFilteringDone = false

function toggleTaskList() {
    var buttonShow = document.getElementById('show')
    if (isFilteringDone) {
        renderList(taskList)
        isFilteringDone = false
        buttonShow.innerHTML = `Show complete`
    } else {
        buttonShow.innerHTML = `Show All`

        isFilteringDone = true
        let completeTasks = []

        for (const item of taskList) {
            if (item.done) {
                completeTasks.push(item)
            }
        }
        renderList(completeTasks)
    }
}
//Limpar todas tarefas completadas: criar uma variavel nova apenas com as tasks false e substituir na ul
function clearAll() {
    let uncompletedTasks = []
    for (const item of taskList) {
        if (item.done == false) {
            uncompletedTasks.push(item)
        }
        taskList = uncompletedTasks
    }
    renderList(taskList)
}
//PARTE IMPLEMENTAÇAO
//Data
function updateDate () {
    var dateElement = document.getElementById('divDate')
    var getCurrentDate = new Date()
    var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    var currentDate = new Intl.DateTimeFormat('en-GB', options).format(getCurrentDate);

    dateElement.innerHTML = `<p>${currentDate}</p>`
}
//Implementação no HTML a soma das tasks pendentes
function renderPendingTasksTotal() {
    tasksSumTotal = document.getElementById('tasksSum')
    tasksSumTotal.innerHTML = `You have ${sumTasks()} pending items`
}
//Renderizar lista
function renderList(taskList) {
    //referencia ul e cria listElements vazia
    var taskListElement = document.getElementById('listWrapper');
    let listElements = ''
    //listElements recebe cada item da taskList + HTML da li
    for (let index in taskList) {
        const item = taskList[index]
        listElements += `
            <li>
                <label>
                    <input type="checkbox" onchange="checkTask(${index})" ${item.done ? 'checked' : ''}> ${item.title}
                </label>
                <button id="buttonRemoveTask" onclick="removeTask(${item.createdAt.getTime()})">&times;</button>
            </li>
        `
    }
    //Insere a li(listElement) na ul(taskListElement)
    taskListElement.innerHTML = listElements
}
//clicarAdd executa 2 funções: addTask e renderList
function clicarAdd() {
    var inputElement = document.getElementById('addTask')

    //validação de input vazio
    if (inputElement.value === '') {
        return
    }
    //chama a função addTask colocando como parâmetro o title do inputElement
    addTask(inputElement.value)
    
    //limpar input
    inputElement.value = ''

    //Soma os itens não marcados
    renderPendingTasksTotal()

    //Adicionar tarefa na lista
    renderList(taskList)
}
