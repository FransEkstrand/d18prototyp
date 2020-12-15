let displayText = document.getElementById("display-birdname");

let birdnames = ["taljux", "bruh", "lol", "Taljux", "bruh", "lol", "Taljux", "bruh", "lol", "LMFAO"]

document.addEventListener("keydown", start)

let randomBird = Math.floor(Math.random() * birdnames.length);
console.log(randomBird);

let birdText = birdnames[randomBird];

function start() {
    console.log(birdText);

    birdText = birdnames[randomBird].charAt(birdnames[randomBird].length - 1)
    let a = birdnames[randomBird].split('');
    a.pop();
    let t = a.join('');
    console.log(t);

    console.log(birdText);

}


start()