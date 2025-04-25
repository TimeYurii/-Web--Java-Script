  let score = 0;
  let timeLeft;
  let countdownInterval;

  const square = document.getElementById('square');
  const startBtn = document.getElementById('start-btn');
  const optionsDiv = document.getElementById('options');
  const gameDiv = document.getElementById('game');
  const scoreDisplay = document.getElementById('score');
  const timeLeftDisplay = document.getElementById('time-left');
  const difficultySelect = document.getElementById('difficulty');

  startBtn.addEventListener('click', startGame);
  square.addEventListener('click', squareClick);
    
  const colorInput = document.getElementById('color');

  colorInput.addEventListener('input', function() {
  square.style.backgroundColor = colorInput.value;
 });

    function startGame() {
      const difficulty = difficultySelect.value;
      timeLeft = getInitialTime(difficulty);
      score = 0;
      updateScore();
      updateTimer();
      optionsDiv.style.display = 'none';
      gameDiv.style.display = 'block';
      moveSquare(difficulty);
      startCountdown();
    }

    function squareClick() {
      score++;
      updateScore();
      moveSquare(difficultySelect.value);
      clearInterval(countdownInterval);
      startCountdown();
    }

    function moveSquare(difficulty) {
      const container = document.getElementById('container');
      const containerRect = container.getBoundingClientRect();
      const maxX = containerRect.width - square.clientWidth;
      const maxY = containerRect.height - square.clientHeight;
    
      let squareSize = getSquareSize(difficulty);
      const newX = Math.floor(Math.random() * (maxX + 1));
      const newY = Math.floor(Math.random() * (maxY + 1));
    
      const containerScrollLeft = container.scrollLeft;
      const containerScrollTop = container.scrollTop;
      
    
      square.style.left = `${Math.max(newX, containerScrollLeft)}px`;
      square.style.top = `${Math.max(newY, containerScrollTop)}px`;
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
    }
    square.addEventListener('click', function() {
      restartTimer(); 
  });
  
  startBtn.addEventListener('click', startGame);
  
  function restartTimer() {
    clearInterval(countdownInterval);
    timeLeft = getInitialTime(difficultySelect.value); 
    updateTimer(); 
    startCountdown(); 
}

    function getInitialTime(difficulty) {
      switch (difficulty) {
        case 'easy':
          return 10;
        case 'medium':
          return 5;
        case 'hard':
          return 3;
        default:
          return 10;
      }
    }

    function getSquareSize(difficulty) {
      switch (difficulty) {
        case 'easy':
          return 80;
        case 'medium':
          return 50;
        case 'hard':
          return 35;
        default:
          return 80;
      }
    }

    function updateScore() {
      scoreDisplay.textContent = `Score: ${score}`;
    }

    function updateTimer() {
      timeLeftDisplay.textContent = `Time left for click: ${timeLeft}`;
    }

    function startCountdown() {
      countdownInterval = setInterval(function() {
        timeLeft--;
        updateTimer();
        if (timeLeft < 0) {
          gameOver();
        }
      }, 1000);
    }

    function gameOver() {
      clearInterval(countdownInterval);
      alert("Game over. Your score is " + score);
      optionsDiv.style.display = 'block';
      gameDiv.style.display = 'none';
    }
