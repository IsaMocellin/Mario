// Função para mostrar o botão "Jogar Novamente" quando o jogador morrer
const showPlayAgainButton = () => {
    const playAgainButton = document.getElementById('play_again');
    playAgainButton.style.display = 'block';
}

// Função para reiniciar o jogo
const restartGame = () => {
    // Redireciona para a página inicial
    window.location.reload();
}

// Adiciona evento de clique ao botão "Play Again"
const playAgainButton = document.getElementById('play_again');
playAgainButton.addEventListener('click', restartGame);

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        // Chama a função para mostrar o botão "Jogar Novamente" quando o jogador morrer
        showPlayAgainButton();
    }

}, 10);

document.addEventListener('keydown', jump);
