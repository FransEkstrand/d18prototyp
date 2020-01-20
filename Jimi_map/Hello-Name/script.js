let input = document.getElementById('name');
let button = document.getElementById('button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    alert('Hello ' + input.value);
    if (true) {
        onButtonClick = "Please enter name";
    }

}




// Denhär är en förkortad Verision av den



// function onButtonClick() {
//     alert("Hello " + document.getElementById("name").value + "!")
// }