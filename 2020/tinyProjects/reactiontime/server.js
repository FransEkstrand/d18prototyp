var io = require('socket.io')(http);
var express = require('express')

let body = document.getElementById('bruh-body');
let red = true;
let green = false
let currentcolor = red
body.addEventListener("click", goodbadclick)
function goodbadclick() {
    if (red)
        body.style.backgroundColor = "red"
}


setInterval(newRandomColor, 5000)

function newRandomColor() {
    body.style.backgroundColor = "green"
    currentcolor = green

}