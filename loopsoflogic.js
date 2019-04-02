/ loops of logic
//display Todos should show .todoText
// display Todos should show you if todos is empty
// displayTodos should show completed


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
// toggle
 toggleCompleted: function(position) {
   var todo = this.todos[position];
   todo.completed = !todo.completed;
   this.displayTodos();
 }
};