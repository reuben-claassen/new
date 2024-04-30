# Number Guessing Game

Welcome to the Number Guessing Game! This is a simple web application that allows users to guess a number between 1 and 100. The game provides feedback on whether the user's guess is too high, too low, or correct.

## Features

- User-friendly interface built with HTML, CSS, and JavaScript
- Backend server built with Node.js and Express.js
- Generates a random target number for each game
- Provides feedback on user guesses (too high, too low, or correct)

## Getting Started

To get started with the Number Guessing Game, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone git@github.com:oni1997/new.git
   ```

2. Navigate to the project directory:

   ```
   cd new
   cd number-guessing-game
   ```

3. Install dependencies for the backend:

   ```
   npm install
   ```

4. Start the backend server:

   ```
   node backend/server.js
   ```

5. Open the `frontend/index.html` file in your web browser to access the game interface.

## How to Play

1. Open the game interface by opening the `frontend/index.html` file in your web browser.
2. Guess a number between 1 and 100 by entering it into the input field.
3. Click the "Submit" button to submit your guess.
4. Receive feedback messages indicating whether your guess is too low, too high, or correct.
5. Keep guessing until you correctly guess the target number.

## Project Structure

```
number-guessing-game/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   └── server.js
└── README.md
```

## Contributing

If you'd like to contribute to the Number Guessing Game project, feel free to fork this repository and submit a pull request with your proposed changes.

## License
```
This project is licensed under the [MIT License](LICENSE).
```