var list = document.getElementById("list");
var divlist = document.getElementById("btn-container");
 

function addtodo() {
	var todoText = document.getElementById("todo-text");
  var checkTodoTextField = document.getElementById("todo-text").value;
  if(checkTodoTextField == "") {
    alert("Add Your Task");
  }else {
    var li = document.createElement("li");
    var liText = document.createTextNode(todoText.value);
    li.appendChild(liText);
    list.appendChild(li);
    todoText.value = "";

    var deleteButton = document.createElement("button");
    var deleteButtonText = document.createTextNode("Delete");
    deleteButton.setAttribute("class", "btn btn-success delete-btn");
    deleteButton.setAttribute("onclick", "deleteItem(this)");
   	deleteButton.appendChild(deleteButtonText);
    
    var editButton = document.createElement("button");
    var editButtonText = document.createTextNode("Edit");
    editButton.setAttribute("class", "btn btn-success edit-btn");
    editButton.setAttribute("onclick", "editItem(this)");
   	editButton.appendChild(editButtonText);
    
    li.appendChild(deleteButton);
    li.appendChild(editButton); 
  }
}

function deleteItem(e) {
  e.parentNode.remove();
}

function editItem(e) {
  // console.log(e.parentNode.firstChild.nodeValue);
  // e.parentNode.firstChild.NodeValue = val;
   var val = prompt("Enter update todo list", e.parentNode.firstChild.nodeValue);
   e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
	 list.innerHtml = "";
}


