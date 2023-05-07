// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const rps_moves = ["rock", "paper", "scissors"];
const rpsls_moves = ["rock", "paper", "scissors", "lizard", "spock"];
const choose = document.getElementById("moves");
const type = document.getElementById("gameType");



function showMoves() {
	clearMoves();
	if (document.getElementById("rps").checked) {
		for(var i = 0; i < rps_moves.length; i++) {
			var move = rps_moves[i];
			var pick = document.createElement("option");
			pick.textContent = move;
			pick.value = move;
			choose.appentChild(pick);
		}
	} else if (document.getElementById("rpsls").checked) {
    		    for(var i = 0; i < rpsls_moves.length; i++) {
            		var move = rpsls_moves[i];
            		var pick  = document.createElement("option");
       		        pick.textContent = move;
       		        pick.value = move;
           	        choose.appendChild(pick);
        }
    }
}

function clearMoves() {
	var i, L = choose.options.length - 1;
	for (i = L; i >= 0; i--) {
		choose.remove(i);
	}
}

async function play() {
    let gametype = ""
    if (document.getElementById("rps").checked){
        gametype = "rps";
    } else if (document.getElementById("rpsls").checked) {
        gametype  = "rpsls";
    }

    let gamemode = ""
    if (document.getElementById("opponent").checked) {
        gamemode = "opponent";
    } else if (document.getElementById("random").checked) {
        gamemode = "random";
    }


    let url = ""
    if (gamemode == "opponent") {
        let move = document.getElementById("moves").value
        url = `/app/${gametype}/play/${move}`;
        console.log(url)
    } else {
        url = `/app/${gametype}/play/`;
    }

    const response = await fetch(url)
    const data = await response.json();

    if (gamemode == "random") {
        output.textContent = `${data.player}!`
    } else {
        output.textContent = `You: ${data.player}`
        output2.textContent = `Opponent: ${data.opponent}`
        output3.textContent = `${data.result}!`
    }
}

function reset() {
	clearMoves()
	document.getElementById("rps").checked = false;
	document.getElementById("rpsls").checked = false;
	document.getElementById("random").checked = false;
	document.getElementById("opponent").checked = false;
	output.textContent= ""
	output2.textContent= ""
	output3.textContent= ""
}



