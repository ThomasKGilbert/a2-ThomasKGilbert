// FRONT-END (CLIENT) JAVASCRIPT HERE
const inputText = document.getElementById("task-text");
const taskListContainer = document.getElementById("task-list-container");

function addTask() {
  if(inputText.value === "") {
    alert("Please enter a task");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    taskListContainer.appendChild(li);
  }

}
// const submit = async function( event ) {
//   // stop form submission from trying to load
//   // a new .html page for displaying results...
//   // this was the original browser behavior and still
//   // remains to this day
//   event.preventDefault()
//
//   const input = document.querySelector( '#yourname' ),
//         json = { yourname: input.value },
//         body = JSON.stringify( json )
//
//   const response = await fetch( '/submit', {
//     method:'POST',
//     body
//   })
//
//   const text = await response.text()
//
//   console.log( 'text:', text )
// }
//
// window.onload = function() {
//   const button = document.querySelector('button')
//   button.onclick = submit
// }
