console.log("Enrique is coding.");

// // HOW MANY 1s ARE IN A SORTED BINARY ARRAY.

function BinarySearch(arr) {
  var low = 0,
      high = arr.length - 1,
      index = -1;

  while (low <= high) {
    var mid = Math.floor((high+low)/2);

    if (arr[mid] == 1) {
      index = mid;
      high = mid - 1;
    } else if (arr[mid] == 0) {
      low = mid + 1;
    }
  }

  return index == -1 ? "There are no 1s in the 'sorted' array." : arr.length - index;
}

var numbers = [0, 0, 0, 0, 0, 0, 0, 0, 1];

console.log(BinarySearch(numbers));
