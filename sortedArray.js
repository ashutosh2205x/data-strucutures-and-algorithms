

let array1 = [1, 2, 3, 4, 5, 14];
let array2 = [9, 10, 11, 15, 16];

//merging the array.
for (let i = 0; i < array2.length; i++) {
  array1.push(array2[i]);
}

function swap(arr, left, right) {
  var temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  var index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}
var sortedArray = quickSort(array1, 0, array1.length - 1);
console.log(sortedArray);
