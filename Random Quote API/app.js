const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote-btn');

    async function fetchRandomQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching random quote:', error);
        }
    }

    async function renderQuote() {
        const { content, author } = await fetchRandomQuote();
        quoteElement.textContent = content;
        authorElement.textContent = `- ${author}`;
    }

    newQuoteButton.addEventListener('click', renderQuote);

    renderQuote(); 