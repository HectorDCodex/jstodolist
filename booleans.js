var todoList = {
    todos: ['item1', 'item2', 'item3']
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        
    },
    
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};