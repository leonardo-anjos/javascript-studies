var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

// var todos = [
//     'fazer cafe',
//     'estudar js',
//     'acessar a comunidade da rocketseat'
// ];

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        // console.log(todo);    
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('excluir');

        linkElement.appendChild(linkText);

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
          
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}