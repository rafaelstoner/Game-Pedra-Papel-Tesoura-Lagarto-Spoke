import {startConfetti, stopConfetti, removeConfetti} from 'Vendors/js/confetti.js' ;
const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');

const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');

const resultText = document.getElementById('result');

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

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

const allGameIcons = document.querySelectorAll('.far');

const choices = {
    Pedra: {
        name: 'Pedra',
        defeats: ['Tesoura', 'Lagarto']
    },
    Papel: {
        name: 'Papel',
        defeats: ['Pedra', 'Spock']
    },
    Tesoura: {
        name: 'Tesoura',
        defeats: ['Papel', 'Lagarto']
    },
    Lagarto: {
        name: 'Lagarto',
        defeats: ['Papel', 'Spock']
    },
    Spock: {
        name: 'Spock',
        defeats: ['Tesoura', 'Pedra']
    },
};

function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        resultText.textContent = "Foi um empate!";
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            startConfetti();
            playerScoreNumber++;
            resultText.textContent = "Você Venceu!";
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            computerScoreNumber++;
            resultText.textContent = "Você Perdeu!";
            computerScoreEl.textContent = computerScoreNumber;
        }
    }

}



// Resetar os icones selecionados
function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');

    });
    stopConfetti();
    removeConfetti();
}

// Resetar todo Jogo
function resetAll() {
    
    playerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    playerChoiceEl.textContent = '';
    
    computerScoreNumber = 0;
    computerScoreEl.textContent = computerScoreNumber;
    computerChoiceEl.textContent = '';
    
    resultText.textContent = "";
    resetSelected();
}
window.resetAll = resetAll;

// Escolhas aleatórias do computador
function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) {
        computerChoice = 'Pedra';
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = 'Papel';

    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = 'Tesoura';

    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = 'Lagarto';

    } else {
        computerChoice = 'Spock';
    }

}

// Passando A seleção do computador e dando estilo a seleção
function displayComputerChoice() {
    // Dar estilo a icone selecionado e atualizar a seleção

    switch (computerChoice) {
        case "Pedra":
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Pedra';
            break;
        case "Papel":
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = ' --- Papel';
            break;
        case "Tesoura":
            computerScissor.classList.add('selected');
            computerChoiceEl.textContent = ' --- Tesoura';
            break;
        case "Lagarto":
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = ' --- Lagarto';
            break;
        case "Spock":
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }

}



//Chamar as funções para processar a vez (de jogar)
function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);

}

// Passando A seleção do jogador e dando estilo a seleção

function select(playerChoice) {
    // Dar estilo a icone selecionado e atualizar a seleção

    checkResult(playerChoice);
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
window.select = select;

// Ao ler a página deixar tudo zerado
resetAll() ;
