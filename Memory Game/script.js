document.addEventListener('DOMContentLoaded', () => {
    const fruits = ['🍎', '🍏', '🥭', '🍉', '🍇', '🥥', '🍒', '🍌'];
    const gameBoard = document.getElementById('game-board');
    let cardsArray = [...fruits, ...fruits];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    // Shuffle function
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    // Initialize the game
    function initGame() {
        shuffle(cardsArray);
        cardsArray.forEach(fruit => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.fruit = fruit;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    // Flip card function
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');
        this.textContent = this.dataset.fruit;

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    // Check for match function
    function checkForMatch() {
        let isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit;

        isMatch ? disableCards() : unflipCards();
    }

    // Disable matched cards
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

    // Unflip cards function
    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';

            resetBoard();
        }, 800);
    }

    // Reset board function
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    initGame();
});
