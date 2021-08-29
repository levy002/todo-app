 // SELECTORS

 const todoInput = document.querySelector('.todo_input')
 const todoButton = document.querySelector('.todo_button')
 const todoList = document.querySelector('.todo_list')
 const destopBar = document.querySelector('.desktop_navbar') 
 
 var count = 0;
 var mobileCount = 0;
 //ADDEVENTLISTENERS
 todoButton.addEventListener('click',addTodo)
 todoList.addEventListener('click',deleteItem)
 todoList.addEventListener('click',completedItem)
   //FUNCTIONS
   function addTodo(event){
     event.preventDefault();
     
      // Todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
 
       // li & complete button DIV
       const completebuttonLi = document.createElement("div");
        completebuttonLi.classList.add('complete_li')
        todoDiv.appendChild(completebuttonLi)
      
        //complete button
      const completeButton = document.createElement('button');
      completeButton.innerHTML = '';
      completeButton.classList.add('complete_button');
      completebuttonLi.appendChild(completeButton);
     
        // ccreate Li
     const newTodo = document.createElement("li");
     newTodo.innerHTML = todoInput.value;
     newTodo.classList.add('todo_item');
     completebuttonLi.appendChild(newTodo);
     
 
     //Delete button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<img src="./images/icon-cross.svg">';
     deleteButton.classList.add('delete_button');
     todoDiv.appendChild(deleteButton);
    
   // FORM VALIDATION
     if(todoInput.value==""){
          alert("please looks like you forgot to add something!!!") 
         document.getElementsByClassName('todoList').style.display = "none"
       }
 
     //Append to List
      todoList.appendChild(todoDiv);
 
      // COUNT-UP THE ADDED TODO
            count++;
            document.getElementById('count').innerHTML = count +" "+ "items left"
 
            mobileCount++;
            document.getElementById('mobileCount').innerHTML = mobileCount +" "+ "items left" 
 
     // clear inputvalue
     todoInput.value = ""
    
 }
 
 // REMOVING TODO
 function deleteItem(e){
    var item = e.target
    if(item.classList[0]=="delete_button"){
      var todo = item.parentElement;
      todo.remove();
      count--;
    } 
 
 }
 // CHECK ON TODO
 function completedItem(e){
   var item = e.target
   if(item.classList[0]=="complete_button"){
     var z = item.parentElement.parentElement;
     z.classList.toggle('markCompleted')
  
   // COUNT-DOWN WHEN TASK IS CHECKED
     count--;
     document.getElementById('count').innerHTML = count +" "+ "items left";
 
     mobileCount--;
     document.getElementById('mobileCount').innerHTML = mobileCount +" "+ "items left" 
   } 
 
 }
 
 // Darkmode
 
 function darkMode(){
    var z = document.body;
    z.classList.toggle('dark-mode')
    document.getElementsById('modeImage').innerHTML= '<img src="./icon-sun.svg"';
 }
 
 
      
 
 
 
 