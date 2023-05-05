export {rps, rpsls}

function rps(move) {
	let x = Math.floor(Math.random() * 3);
	let resp;
	let result;

	if (x==0) {resp = "rock";}
	if (x==1) {resp = "paper";}
	if (x==2) {resp = "scissors";}

	if (move === undefined) {return {player: resp};}

	if (move !== "rock" && move !== "paper" && move !== "scissors") { throw new Error();}

	if (move === "rock"){
		if (resp === "rock") {result = "tie"; }
		if (resp === "paper") {result = "lose"; }
		if (resp === "scissors") {result = "win"; }
	} else if (move === "paper"){
                if (resp === "rock") {result = "win"; }
                if (resp === "paper") {result = "tie"; }
                if (resp === "scissors") {result = "lose"; }
        } else if (move === "scissors"){
                if (resp === "rock") {result = "loss"; }
                if (resp === "paper") {result = "win"; }
                if (resp === "scissors") {result = "tie"; }
        }
	return {player:move, opponent:resp, result:result};
}

function rpsls(move) {
    let x = Math.floor(Math.random() * 5);
    let response;
    let res;
    

    if (x === 0) { response = "rock"; }
    if (x === 1) { response = "paper"; }
    if (x === 2) { response = "scissors"; }
    if (x === 3) { response = "lizard"; }
    if (x === 4) { response = "spock"; }

    if (move === undefined) { 
        return {player: response};
    }

    if (move !== "rock" && move !== "paper" && move !== "scissors" && move !== "lizard" && move !== "spock") {
        throw new Error();
    }

    if (move === "rock") {
        if (response === "rock") { res = "tie"; } 
        if (response === "paper") { res = "lose"; }
        if (response === "scissors") { res = "win"; }
        if (response === "lizard") {res = "win"; }
        if (response === "spock") { res = "lose"; }
    } else if (move === "paper") {
        if (response === "rock") { res = "win"; } 
        if (response === "paper") { res = "tie"; }
        if (response === "scissors") { res = "lose"; }
        if (response === "lizard") { res = "lose"; }
        if (response === "spock") { res = "win"; }
    } else if (move === "scissors") {
        if (response === "rock") { res = "lose"; } 
        if (response === "paper") { res = "win"; }
        if (response === "scissors") { res = "tie"; }
        if (response === "lizard") { res = "win"; }
        if (response === "spock") { res = "lose"; }
    } else if (move === "lizard") {
        if (response === "rock") { res = "lose"; } 
        if (response === "paper") { res = "win"; }
        if (response === "scissors") { res = "lose"; }
        if (response === "lizard") { res = "tie"; }
        if (response === "spock") { res = "win"; }
    } else if (move === "spock") {
        if (response === "rock") { res = "win"; } 
        if (response === "paper") { res = "lose"; }
        if (response === "scissors") { res = "win"; }
        if (response === "lizard") { res = "lose"; }
        if (response === "spock") { res = "tie"; }
    } 

    return {player:move,opponent:response,result:res};
}

