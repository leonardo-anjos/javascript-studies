class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'leonardo';
    }

    // addTodo() {
    //     this.todos.push('novo todo');
    //     console.log(this.todos);
    // }

    mostraUsuario() {
        console.log(this.usuario); 
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('novo todo');
}

MinhaLista.mostraUsuario();