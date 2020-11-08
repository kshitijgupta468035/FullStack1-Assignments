// All selectors

let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");


// Event Handler

// todoButton.onclick = create
todoButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (todoInput.value != "") {
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");

    newLi.innerHTML = todoInput.value;

    //making li child of div
    newDiv.appendChild(newLi);

    //check button
    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class ="fa fa-check"></i>';
    newDiv.appendChild(checkBtn);

    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class ="fa fa-trash"></i>';
    newDiv.appendChild(deleteBtn);

    // making div the child of our todo list
    todoList.appendChild(newDiv);
  } else {
    alert("Enter something in the input box");
  }
  todoInput.value = "";
});

//todoList.oncick = checkDelete
todoList.addEventListener("click", function(event, hi) {


  // it will target that object in the document which user clicks
  let item = event.target;
  console.log(item);
  if (item.classList[0] === "delete-btn") {
    let parent = item.parentNode;
    parent.remove();
  }

  if (item.classList[0] === "check-btn") {
  var parent = item.parentNode;
  // with toggle (remove and add both work)
  parent.classList.toggle("completed");
}
});
