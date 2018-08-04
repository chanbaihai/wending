let arr = [2546, 43, 463, 2, 3534, 345]

let sort = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = a
      }
    }
  }
  return arr
}

console.log(sort(arr))