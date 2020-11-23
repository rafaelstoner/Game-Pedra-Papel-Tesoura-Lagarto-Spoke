const playerScoreEL = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');

const computerScoreEL = document.getElementById('computer-score');
const computerChoice = document.getElementById('computer-choice');

const resulText = document.getElementById('result');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissor = document.getElementById('player-scissor');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissor = document.getElementById('computer-scissor');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
    rock: {
        name: 'Rock',
        defeats: ['scissors', 'lizard']
    },
    paper: {
        name: 'Paper',
        defeats: ['rock', 'spock']
    },
    scissors: {
        name: 'Scissors',
        defeats: ['paper', 'lizard']
    },
    lizard: {
        name: 'Lizard',
        defeats: ['paper', 'spock']
    },
    spock: {
        name: 'Spock',
        defeats: ['scissors', 'rock']
    },
};



// Resetar os icones selecionados
function resetSelected () {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected')
        
    });
}

// Passando A seleção do jogador e dando estilo a seleção

function select(playerChoice) {
    // Dar estilo a icone selecionado e atualizar a seleção
    resetSelected();
    switch (playerChoice) {
        case "Pedra":
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Pedra';
            break;
        case "Papel":
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = ' --- Papel';
            break;
        case "Tesoura":
            playerScissor.classList.add('selected');
            playerChoiceEl.textContent = ' --- Tesoura';
            break;
        case "Lagarto":
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = ' --- Lagarto';
            break;
        case "Spock":
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }

}
