var SortingLibrary = (function() {
  
    function exchangeSort(array, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
      
        for (let i = 0; i < array.length - 1; i++) {
          for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== undefined && array[j] !== undefined) {
              comparisons++;
              if ((ascending && array[i] > array[j]) || (!ascending && array[i] < array[j])) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                exchanges++;
              }
            } else if (array[i] === undefined && array[j] !== undefined) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
              exchanges++;
            }
          }
        }
      
        console.log(`Exchange Sort - Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
        return array;
      }
      
  
    function minSort(array, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
      
        for (let i = 0; i < array.length - 1; i++) {
          let minIndex = i;
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] !== undefined && (ascending && (array[j] < array[minIndex] || array[minIndex] === undefined) || (!ascending && (array[j] > array[minIndex] || array[minIndex] === undefined)))) {
              minIndex = j;
            }
            comparisons++;
          }
          if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
            exchanges++;
          }
        }
      
        console.log(`Min Sort - Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
        return array;
      }
  
    function insertionSort(array, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
      
        for (let i = 1; i < array.length; i++) {
          let current = array[i];
          let j = i - 1;
      
          while (j >= 0 && (
            (ascending && (array[j] === undefined || array[j] > current || array[j] === current)) || 
            (!ascending && (array[j] === undefined || array[j] < current || array[j] === current))
          )) {
            if (array[j] !== undefined) {
              comparisons++;
            }
            array[j + 1] = array[j];
            j--;
            exchanges++;
          }
          array[j + 1] = current;
        }
      
        console.log(`Insertion Sort - Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
        return array;
      }
  
      function shellSort(array, ascending = true) {
        let comparisons = 0;
        let exchanges = 0;
      
        for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && (
              (ascending && (array[j - gap] === undefined || array[j - gap] > temp || array[j - gap] === temp)) || 
              (!ascending && (array[j - gap] === undefined || array[j - gap] < temp || array[j - gap] === temp))
            ); j -= gap) {
              if (array[j - gap] !== undefined) {
                comparisons++;
              }
              array[j] = array[j - gap];
              exchanges++;
            }
            array[j] = temp;
          }
        }
      
        console.log(`Shell Sort - Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
        return array;
      }
  
    function quickSort(array, ascending = true) {
        function partition(arr, low, high) {
          let pivot = arr[high];
          let i = low - 1;
      
          for (let j = low; j < high; j++) {
            comparisons++; 
            if ((ascending && arr[j] <= pivot) || (!ascending && arr[j] >= pivot)) {
              i++;
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
              exchanges++; 
            }
          }
          let temp = arr[i + 1];
          arr[i + 1] = arr[high];
          arr[high] = temp;
          exchanges++; 
          return i + 1;
        }
      
        function quickSortRecursive(arr, low, high) {
          if (low < high) {
            let pi = partition(arr, low, high);
            quickSortRecursive(arr, low, pi - 1);
            quickSortRecursive(arr, pi + 1, high);
          }
        }
      
        let comparisons = 0;
        let exchanges = 0;
      
        quickSortRecursive(array, 0, array.length - 1);
      
        console.log(`Quick Sort - Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
        return array;
      }
  
    return {
      exchangeSort: exchangeSort,
      minSort: minSort,
      insertionSort: insertionSort,
      shellSort: shellSort,
      quickSort: quickSort
    };
  
  })();

  let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(Math.floor(Math.random() * 1000)); 
}

console.log("Original Array:");
console.log(numbers);

console.log("\nExchange Sort (Ascending):");
console.log(SortingLibrary.exchangeSort([...numbers])); 

console.log("\nExchange Sort (Descending):");
console.log(SortingLibrary.exchangeSort([...numbers], false)); 
console.log("\nMin Sort (Ascending):");
console.log(SortingLibrary.minSort([...numbers])); 

console.log("\nMin Sort (Descending):");
console.log(SortingLibrary.minSort([...numbers], false)); 

console.log("\nInsertion Sort (Ascending):");
console.log(SortingLibrary.insertionSort([...numbers])); 

console.log("\nInsertion Sort (Descending):");
console.log(SortingLibrary.insertionSort([...numbers], false)); 

console.log("\nShell Sort (Ascending):");
console.log(SortingLibrary.shellSort([...numbers])); 

console.log("\nShell Sort (Descending):");
console.log(SortingLibrary.shellSort([...numbers], false)); 
console.log("\nQuick Sort (Ascending):");
console.log(SortingLibrary.quickSort([...numbers])); 

console.log("\nQuick Sort (Descending):");
console.log(SortingLibrary.quickSort([...numbers], false)); 

  let sparseArray = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      sparseArray.push(Math.floor(Math.random() * 1000)); 
    } else {
      sparseArray.push(undefined); 
    }
  }
  
  
  console.log("Original Sparse Array:");
  console.log(sparseArray);
  
  console.log("\nExchange Sort (Ascending):");
  console.log(SortingLibrary.exchangeSort([...sparseArray])); 

  console.log("\nExchange Sort (Descending):");
  console.log(SortingLibrary.exchangeSort([...sparseArray], false)); 

  console.log("\nMin Sort (Ascending):");
  console.log(SortingLibrary.minSort([...sparseArray])); 

  console.log("\nMin Sort (Descending):");
  console.log(SortingLibrary.minSort([...sparseArray], false));

  console.log("\nInsertion Sort (Ascending):");
  console.log(SortingLibrary.insertionSort([...sparseArray])); 
  
  console.log("\nInsertion Sort (Descending):");
  console.log(SortingLibrary.insertionSort([...sparseArray], false));

  console.log("\nShell Sort (Ascending):");
  console.log(SortingLibrary.shellSort([...sparseArray])); 
  
  console.log("\nShell Sort (Descending):");
  console.log(SortingLibrary.shellSort([...sparseArray], false)); 

  console.log("\nQuick Sort (Ascending):");
  console.log(SortingLibrary.quickSort([...sparseArray])); 
  
  console.log("\nQuick Sort (Descending):");
  console.log(SortingLibrary.quickSort([...sparseArray], false)); 
