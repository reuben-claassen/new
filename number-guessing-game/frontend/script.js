document.getElementById('guess-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const guessInput = document.getElementById('guess-input');
    const guess = parseInt(guessInput.value);
    guessInput.value = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage('Please enter a valid number between 1 and 100.');
        return;
    }

    fetch('/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess: guess }),
    })
    .then(response => response.json())
    .then(data => {
        showMessage(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function showMessage(message) {
    document.getElementById('message').textContent = message;
}
