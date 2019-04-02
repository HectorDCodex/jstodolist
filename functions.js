// Functions Below
var todos = ['item1', 'items2', 'item3', 'item4b'];

//Should have a Function to Add Displaying Todos

function displayTodos(){
   console.log('My todos: ', todos);
}

//Should Add a Function to Add Todos

function addTodos(todo){
   todos.push(todo);
   displayTodos();
}

//Should have a Function to Change Todos
function changeTodo(position, newValue){
   todos[position] = newValue;
   displayTodos();
}

//Should have A Function to Delete todos
//Use Splice
function deleteTodo(position){
   todos.splice(position, 1);
   displayTodos();
}


//Calling and Testing the Functions
displayTodos();
addTodos('item 4');
changeTodo(0, 'item 1a');
deleteTodo(2);