const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        document.getElementById('submitGuess').addEventListener('click', function() {
            const guess = parseInt(document.getElementById('guessInput').value);
            if (!isNaN(guess)) {
                attempts++;
                const resultDiv = document.getElementById('result');
                if (guess === randomNumber) {
                    resultDiv.innerHTML = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
                    resultDiv.className = 'alert alert-success';
                    document.getElementById('submitGuess').setAttribute('disabled', 'true');
                } else if (guess < randomNumber) {
                    resultDiv.innerHTML = 'Too low! Try a higher number.';
                    resultDiv.className = 'alert alert-info';
                } else {
                    resultDiv.innerHTML = 'Too high! Try a lower number.';
                    resultDiv.className = 'alert alert-dark';
                }
            } else {
                alert('Please enter a valid number.');
            }
        });