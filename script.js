function rpsGame(yourChoice){
    var playerChoice, botChoice;
    playerChoice = yourChoice.id;
    botChoice = randChoice();

    results = decide(playerChoice, botChoice);

    message = finalMessage(results);

    rpsFrontEnd(playerChoice, botChoice, message);
}

function randChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

function decide(playerChoice, botChoice) {
    var rps = {
        'rock':{'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors':{'rock': 0, 'paper': 1, 'scissors': 0.5}
    };
    return rps[playerChoice][botChoice];
}

function finalMessage(results) {
    if (results === 0) {
        return {'message': 'You lost', 'color': 'red'};
    }
    else if (results === 1) {
        return {'message': 'You won', 'color': 'green'};
    }
    else{
        return {'message': 'You tied', 'color': 'black'};
    }
}

function rpsFrontEnd(playerChoice, botChoice, finalMessage) {
 
    document.getElementById('flexbox').remove();

    var playerdiv = document.createElement('div');
    playerdiv.innerHTML = "<img src = '" + playerChoice + ".png' width = '200px'>";

    var botdiv = document.createElement('div');
    botdiv.innerHTML = "<img src = '" + botChoice + "1.png' width = '200px'>";

    document.getElementById('container').appendChild(playerdiv);
    document.getElementById('container').appendChild(botdiv);

    var message = document.createElement('div');
    message.innerHTML = "<h2 align = 'center' style = 'color: "+ finalMessage['color'] + "'>"+ finalMessage['message'] + "</h2>";
    document.body.appendChild(message);
}