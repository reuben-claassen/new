const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'..','frontend')));

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let targetNumber = generateRandomNumber();
let attempts = 0;

app.post('/guess', (req, res) => {
    const guess = req.body.guess;
    attempts++;

    if (guess === targetNumber) {
        res.json({ message: `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.` });
        targetNumber = generateRandomNumber();
        attempts = 0;
    } else if (guess < targetNumber) {
        res.json({ message: 'Too low. Try again!' });
    } else {
        res.json({ message: 'Too high. Try again!' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
