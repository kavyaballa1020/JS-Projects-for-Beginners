document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById('gameBoard');
    const emojis = [
        '😀', '😎', '😢', '😍', 
        '🤔', '😴', '😜', '😡'
    ];
    let cardArray = [...emojis, ...emojis];
    let selectedCards = [];
    let matchedCards = [];

    // Shuffle the array
    cardArray.sort(() => 0.5 - Math.random());

    // Create the game board
    cardArray.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.emoji = emoji;

        card.addEventListener('click', () => {
            if (selectedCards.length < 2 && !card.classList.contains('flipped') && !matchedCards.includes(card)) {
                card.classList.add('flipped');
                card.innerHTML = emoji;
                selectedCards.push(card);

                if (selectedCards.length === 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        });

        gameBoard.appendChild(card);
    });

    function checkMatch() {
        const [card1, card2] = selectedCards;
        const emoji1 = card1.dataset.emoji;
        const emoji2 = card2.dataset.emoji;

        if (emoji1 === emoji2) {
            matchedCards.push(card1, card2);
            card1.classList.add('matched');
            card2.classList.add('matched');
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.innerHTML = '';
            card2.innerHTML = '';
        }
        selectedCards = [];
    }
});
