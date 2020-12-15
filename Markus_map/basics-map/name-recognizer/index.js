let taBortDehe = document.getElementById("xd");
let userName = document.getElementById("xdd");
let userAge = document.getElementById("xddd");
let submitButton = document.getElementById("xdddd");
let showThis = document.getElementById("xddddd");

if (sessionStorage.getItem("x") === null) {

    submitButton.addEventListener("click", onBtnClick)

    function onBtnClick() {
        sessionStorage.setItem("x", JSON.stringify({
            name: userName.value,
            age: userAge.value
        }));
    }
} else {
    let x = JSON.parse(sessionStorage.getItem("x"));
    taBortDehe.style.display = "none";
    showThis.innerHTML = "Welcome back " + x.name + " you are " + x.age + " years old!"
}