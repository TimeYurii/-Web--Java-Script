let currentMap;
let currentIndex = -1;
let maps = [];

function loadRandomMap() {
  fetch('map.json')
    .then(response => response.json())
    .then(data => {
      maps = data.map(item => item.map);
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * maps.length);
      } while (newIndex === currentIndex);

      currentIndex = newIndex;
      currentMap = JSON.parse(JSON.stringify(maps[currentIndex])); // Копія
      renderMap(currentMap);
      startTimer();
    })
    .catch(error => console.error('Помилка при завантаженні карти:', error));
}

function loadMapFromJson() {
  if (currentIndex >= 0 && currentIndex < maps.length) {
    currentMap = JSON.parse(JSON.stringify(maps[currentIndex]));
    renderMap(currentMap);
    startTimer();
  }
}

function renderMap(map) {
  const container = document.getElementById('game-container');
  container.innerHTML = '';

  map.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.classList.toggle('on', cell === 1);
      cellElement.setAttribute('data-row', rowIndex);
      cellElement.setAttribute('data-col', colIndex);
      rowElement.appendChild(cellElement);
    });

    container.appendChild(rowElement);
  });

  checkWin();
}

function toggleCell(row, col) {
  currentMap[row][col] = 1 - currentMap[row][col];

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  directions.forEach(dir => {
    const newRow = row + dir[0];
    const newCol = col + dir[1];
    if (
      newRow >= 0 && newRow < currentMap.length &&
      newCol >= 0 && newCol < currentMap[0].length
    ) {
      currentMap[newRow][newCol] = 1 - currentMap[newRow][newCol];
    }
  });

  renderMap(currentMap);
}

let timerInterval;
let seconds = 0;

function startTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  updateTimer();
  timerInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = 'Час: ' + seconds + ' с';
}

function checkWin() {
  const allZero = currentMap.every(row => row.every(cell => cell === 0));
  if (allZero) {
    clearInterval(timerInterval);
    setTimeout(() => alert('Ти виграв!'), 100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadRandomMap();

  document.getElementById('restart-button').addEventListener('click', loadRandomMap);
  document.getElementById('newgame-button').addEventListener('click', loadMapFromJson);

  document.getElementById('game-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('cell')) {
      const row = parseInt(event.target.getAttribute('data-row'));
      const col = parseInt(event.target.getAttribute('data-col'));
      toggleCell(row, col);
    }
  });
});
