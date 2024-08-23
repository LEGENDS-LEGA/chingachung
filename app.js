document.addEventListener('DOMContentLoaded', () => {
    let player1Choice = '';
    let player2Choice = '';

    let choices1 = document.querySelectorAll('#player1 .choice');
    let choices2 = document.querySelectorAll('#player2 .choice');
    let resultText = document.getElementById('result-text');
    let playButton = document.getElementById('play');

    const getResult = (player1, player2) => {
        if (player1 === player2) {
            return 'Ничья!';
        } else if (
            (player1 === 'rock' && player2 === 'scissors') ||
            (player1 === 'paper' && player2 === 'rock') ||
            (player1 === 'scissors' && player2 === 'paper')
        ) {
            return 'Игрок 1 победил!';
        } else {
            return 'Игрок 2 победил!';
        }
    };

    const resetGame = () => {
        player1Choice = '';
        player2Choice = '';
        choices1.forEach(c => c.classList.remove('selected', 'hidden'));
        choices2.forEach(c => c.classList.remove('selected', 'hidden'));
        resultText.textContent = '';
    };

    choices1.forEach(choice => {
        choice.addEventListener('click', () => {
            player1Choice = choice.id.replace('1', '');
            choices1.forEach(c => c.classList.remove('selected'));
            choice.classList.add('selected');
        });
    });

    choices2.forEach(choice => {
        choice.addEventListener('click', () => {
            player2Choice = choice.id.replace('2', '');
            choices2.forEach(c => c.classList.remove('selected'));
            choice.classList.add('selected');
        });
    });

    playButton.addEventListener('click', () => {
        if (player1Choice && player2Choice) {
            choices1.forEach(c => {
                if (!c.classList.contains('selected')) {
                    c.classList.add('hidden');
                }
            });

            choices2.forEach(c => {
                if (!c.classList.contains('selected')) {
                    c.classList.add('hidden');
                }
            });

            const result = getResult(player1Choice, player2Choice);
            resultText.textContent = `${result}`;

            setTimeout(resetGame, 2000); 
        } else {
            resultText.textContent = 'Оба игрока должны сделать выбор!';
        }
    });
});
