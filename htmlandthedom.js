var todoList = {
 todos: [],
 displayTodos: function() {
   if (this.todos.length === 0) {
     console.log('Your todo list is empty!');
   } else {
     console.log('My Todos:');

// for
     for (var i = 0; i < this.todos.length; i++) {
       if (this.todos[i].completed === true) {
         console.log('(x)', this.todos[i].todoText);
       } else {
         console.log('( )', this.todos[i].todoText);
       }
     }
   }
 },

 //add
 addTodo: function(todoText) {
   this.todos.push({
     todoText: todoText,
     completed: false
   });
   this.displayTodos();
 },

 //change
 changeTodo: function(position, todoText) {
   this.todos[position].todoText = todoText;
   this.displayTodos();
 },
 // delete
 deleteTodo: function(position) {
   this.todos.splice(position, 1);
   this.displayTodos();
 },

toggleCompleted: function(position) {
       var todo = this.todos[position];
       todo.completed = !todo.completed;
       this.displayTodos();
   },

   toggleAll: function() {
       var totalTodos = this.todos.length;
       var completedTodos = 0;


       for(var i = 0; i < totalTodos; i++){
           if(this.todos[i].completed === true){
               completedTodos++;
           }
       }

       if (completedTodos === totalTodos){
           // make everything false
           for (var i = 0; i < totalTodos; i++){
               this.todos[i].completed = false;
           }

       }else{
           for(var i = 0; i < totalTodos; i++){
               this.todos[i].completed = true;
           }
       }
       this.displayTodos();
   }
};

//todosList.displayTodos();
todosList.addTodo('first');
todosList.addTodo('second');

//todosList.changeTodo(0, 'second try');
todosList.toggleCompleted(0);
//todosList.toggleCompleted(1);
todosList.toggleAll();






// 1. We want to get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

// 2. we Want to run displayTodos method, when someone clicks

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});