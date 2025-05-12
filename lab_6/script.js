let currentMap;
let currentIndex;

function loadRandomMap() {
    fetch('Map.json')
      .then(response => response.json())
      .then(data => {
        const maps = data.map(item => item.map);
        randomIndex(maps.length);
        currentMap = maps[currentIndex];
        renderMap(currentMap);
        startTimer();
        checkWin(); // Перевірка перемоги після завантаження нової мапи
      })
      .catch(error => console.error('Error loading map:', error));
  }
  function randomIndex(length){
    
        while (true)
        {
            const randomIndex =Math.floor(Math.random() * length);
            if(currentIndex != randomIndex)
            {
                currentIndex=randomIndex;
                return;
            }
           
        }
    
  }

  function loadMapFromJson() {
    fetch('Map.json')
      .then(response => response.json())
      .then(data => {
        const maps = data.map(item => item.map);
        currentMap = maps[currentIndex]; // Використовуємо поточний індекс
        renderMap(currentMap);
        startTimer();
        checkWin(); // Перевірка перемоги після завантаження нової мапи
      })
      .catch(error => console.error('Error loading map:', error));
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
        checkWin();
      });
  
      container.appendChild(rowElement);
    });
  }
  
  function toggleCell(row, col) {
    currentMap[row][col] = 1 - currentMap[row][col]; // змінюємо стан клітинки
  
    // змінюємо стан сусідніх клітинок
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    directions.forEach(dir => {
      const newRow = row + dir[0];
      const newCol = col + dir[1];
      if (newRow >= 0 && newRow < currentMap.length && newCol >= 0 && newCol < currentMap[0].length) {
        currentMap[newRow][newCol] = 1 - currentMap[newRow][newCol];
      }
    });
  
    renderMap(currentMap);
  }
  function resetMap() {
    loadRandomMap();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    loadRandomMap();
  
    document.getElementById('restart-button').addEventListener('click', function() {
        loadRandomMap();
      
    });
    document.getElementById('newgame-button').addEventListener('click',function(){
        loadMapFromJson(currentIndex);
    });
        
    
  
    document.getElementById('game-container').addEventListener('click', function(event) {
      if (event.target.classList.contains('cell')) {
        const cell = event.target;
        const row = cell.getAttribute('data-row');
        const col = cell.getAttribute('data-col');
        toggleCell(parseInt(row), parseInt(col));
      }
    });
  });
  
  

  let timerInterval;
let seconds = 0;

function startTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  updateTimer();
  timerInterval = setInterval(function() {
    seconds++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = 'Час: ' + seconds + ' с';
}
function checkWin() {
    let allCellsZero = true;
    currentMap.forEach(row => {
        row.forEach(cell => {
            if (cell !== 0) {
                allCellsZero = false;
                return;
            }
        });
    });

    if (allCellsZero) {
        alert('You win!');
        optionsDiv.style.display = 'block';
       
       
    }
}
