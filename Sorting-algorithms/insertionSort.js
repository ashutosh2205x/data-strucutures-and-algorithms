let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};


let arr = [1, 5, 7, 89, 13, 34, 656, 878];
console.log(insertionSort(arr))

//Time Complexity.

//BEST CASE: O(n)

//AVG n WORST CASE : O(n^2)