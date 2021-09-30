//PARTE LOGICA
//Criar lista em branco
let taskList = []

//Cria um objeto na lista com done false
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
    sumTasks()
}

//Marcar tarefa
function checkTask(index) {
    taskList[index].done= !taskList[index].done
    sumTasks()
}

//Total de itens pendentes: tamanho da lista com done false
function sumTasks() {
    tasksSumTotal = document.getElementById('tasksSum')

    var total = 0

    //Para cada item na lista com o done false soma +1 
    for (const item of taskList) {
        if (item.done == false) {
            total++
        }
    }
    tasksSumTotal.innerHTML = `You have ${total} pending items`
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
                <button id="buttonRemoveTask" onclick="removeTask(${index})">&times;</button>
            </li>
        `
    }
    //Insere a li(listElement) na ul(taskListElement)
    taskListElement.innerHTML = listElements
}

//clicarAdd executa 2 funções: addTask e renderList
function clicarAdd() {
    //validação de input vazio
    var inputElement = document.getElementById('addTask')
    if (inputElement.value === '') {
        return
    }
    //referencia button, input e ul
    var newTaskInput = document.getElementById('addTask');

    //chama a função addTask colocando como parâmetro o title da newTaskInput
    addTask(newTaskInput.value)
    
    //limpar input
    newTaskInput.value = ''

    //Soma os itens não marcados
    sumTasks()

    //Adicionar tarefa na lista
    renderList(taskList)
}
