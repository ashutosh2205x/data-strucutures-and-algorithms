let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let flag =false;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        flag = true;
      }
    }
  } while (flag);
  return inputArr;
};

let arr = [1, 5, 7, 89, 13, 34, 656, 878];
console.log(bubbleSort(arr));


//Time Complexity.

//BEST CASE: O(n)

//AVG n WORST CASE : O(n^2)