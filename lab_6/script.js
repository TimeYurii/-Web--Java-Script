let currentMap;
let currentIndex = -1;
let maps = [];

let moveCount = 0;
let lastClickedCell = null;

let timerInterval;
let seconds = 0;

function loadRandomMap() {
  fetch('Map.json')
    .then(response => response.json())
    .then(data => {
      maps = data.map(item => item.map);
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * maps.length);
      } while (newIndex === currentIndex);

      currentIndex = newIndex;
      currentMap = JSON.parse(JSON.stringify(maps[currentIndex]));
      moveCount = 0;
      seconds = 0;
      lastClickedCell = null;
      updateMoveCounter();
      renderMap();
      startTimer();
    })
    .catch(error => console.error('Помилка при завантаженні карти:', error));
}

function loadMapFromJson() {
  if (currentIndex >= 0 && currentIndex < maps.length) {
    currentMap = JSON.parse(JSON.stringify(maps[currentIndex]));
    moveCount = 0;
    seconds = 0;
    lastClickedCell = null;
    updateMoveCounter();
    renderMap();
    startTimer();
  }
}

function renderMap() {
  const container = document.getElementById('game-container');
  container.innerHTML = '';

  currentMap.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      if (cell === 1) {
        cellElement.classList.add('on');
      }
      cellElement.setAttribute('data-row', rowIndex);
      cellElement.setAttribute('data-col', colIndex);
      rowElement.appendChild(cellElement);
    });

    container.appendChild(rowElement);
  });

  checkWin();
}

function toggleCell(row, col) {
  const isSameCell = lastClickedCell &&
    lastClickedCell.row === row &&
    lastClickedCell.col === col;

  if (!isSameCell) {
    moveCount++;
    updateMoveCounter();
    lastClickedCell = { row, col };
  }

  // Toggle clicked cell
  currentMap[row][col] = 1 - currentMap[row][col];

  // Toggle neighbors
  const directions = [[0,1],[1,0],[0,-1],[-1,0]];
  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 && newRow < currentMap.length &&
      newCol >= 0 && newCol < currentMap[0].length
    ) {
      currentMap[newRow][newCol] = 1 - currentMap[newRow][newCol];
    }
  });

  renderMap();
}

function updateMoveCounter() {
  const movesEl = document.getElementById('moves');
  if (movesEl) {
    movesEl.textContent = 'Ходи: ' + moveCount;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerEl = document.getElementById('timer');
  if (timerEl) {
    timerEl.textContent = 'Час: ' + seconds + ' с';
  }
}

function checkWin() {
  const allZero = currentMap.every(row => row.every(cell => cell === 0));
  if (allZero) {
    clearInterval(timerInterval);
    setTimeout(() => {
      alert(`Ти виграв за ${moveCount} ходів і ${seconds} секунд!`);
    }, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadRandomMap();

  document.getElementById('restart-button').addEventListener('click', loadRandomMap);
  document.getElementById('newgame-button').addEventListener('click', loadMapFromJson);

  document.getElementById('game-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('cell')) {
      const row = parseInt(event.target.getAttribute('data-row'));
      const col = parseInt(event.target.getAttribute('data-col'));
      toggleCell(row, col);
    }
  });
});
