/* global $ */


$(document).ready(function(){
    
    $('#todoInput').keypress(function(event){
        if(event.which== 13 ){
            createTodo();
        }
    });
    $.getJSON('/api/todos')
    .then(addTodos);
        
    });
    
$('.list').on('click','span',function(){
    removeTodo($(this).parent());
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
   });
}

function addTodo(todo){
     var newTodo = $('<li class ="task" >' + todo.name + '<span>x</span>' + '</li>');
     newTodo.data('id',todo._id);
    if(todo.completed){
    newTodo.addClass('done');
    }
      $('.list').append(newTodo);
    }
    

function createTodo(){
    var usrInput = $('#todoInput').val();
    $.post('/api/todos',{name: usrInput})
    .then(function(newTodo){
      addTodo(newTodo);
      
      $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
var idClicked =todo.data('id') ;
 var idDeleted ='/api/todos/' + idClicked;
 $.ajax({
     method : 'DELETE',
     url : idDeleted
 })

 .then(function(data){
     todo.remove();
 });
}
    



