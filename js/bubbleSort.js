function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
    return arr
}
bubbleSort([5, 3, 8, 4, 2, 7, 1, 6]) // [1, 2, 3, 4, 5, 6, 7, 8]