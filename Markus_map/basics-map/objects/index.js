let weightElement = document.getElementById('weightElement');
let abilityElement = document.getElementById('abilityElement');
let pokemonName = 'caterpie';

xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let x = JSON.parse(this.responseText);
        console.log(x.name);



        for (let i = 0; i < x.abilities.length; i++) {

            console.log(x.abilities[i].ability.name);

        }
        let html = `<ul id="movelist">`
        for (let j = 0; j < x.moves.length; j++) {
            console.log(x.moves[j].move.name);
            html += `<li>${x.moves[j].move.name}</li>`
            //     console.log(x.moves[j].move.name);
            //     movesElement.append = movesElement + x.moves[j].move.name;
        }
        html += "</ul>"

        let movesElement = document.getElementById('moves');
        movesElement.innerHTML = html;
        console.log("asd", x.abilities.length);
        console.log("d", x.moves.length);
        console.log("weight", x.weight);
        console.log(x.sprites.front_shiny);

    }
}
xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemonName, true);
xmlhttp.send();