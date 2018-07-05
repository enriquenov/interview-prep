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

// function Dog() {
// }
// Dog.prototype.bark = function() {
//  console.log('woof!');
// };
//
// var fido = new Dog();
// fido.bark(); // ‘woof!’


// Car Creation

// function Car() {
//
// }
//
// Car.prototype.drive = function() {
//   console.log("Drive");
// }
//
// var benz = new Car();
//
// benz.drive();

// Rectangle Creation

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
//
// Rectangle.prototype.area = function() {
//   return this.width * this.height;
// };
//
// var rect = new Rectangle(3, 4);
//
// console.log(rect.area());
//
// function Square(length) {
//   this.width = this.height = length;
// }
//
// Square.prototype = Object.create(Rectangle.prototype);
//
// var square = new Square(5);
//
// console.log(square.area());
//
// Square.prototype.diagonal = function() {
//   return Math.sqrt(this.area() * 2);
// }
//
// console.log(square.diagonal());


// Factorial

// function factorial( n ) {
//   if ( n === 1 ) {
//     return 1;
//   }
//   return n * factorial( n - 1 );
// }
//
// console.log(factorial(10));

// Reserving a String

// function reverse( str ) {
//   if ( str.length <= 1 ) {
//     return str;
//   }
//   return reverse(str.substr(1)) + str[0];
// }
//
// console.log(reverse("incondicional"));

// Reduce

// var scores = [89, 76, 47, 95];
// var initialValue = 0;
// var reducer = function (accumulator, item) {
//   return accumulator + item;
// };
// var total = scores.reduce(reducer, initialValue);
// var average = total / scores.length;
//
// console.log(average);


// The Supermarket Queue Answer 1

// function queueTime(customers, n) {
//
//   if (n < 1) return 0;
//   if (n === 1) return customers.reduce((acc, customer) => acc + customer, 0);
//
//   var head = customers.slice(0, n);
//   var tail = customers.slice(n);
//   var lines = tail.reduce((acc, customer) => {
//     var min = acc.indexOf(Math.min(...acc));
//     acc[min] += customer;
//     return acc;
//   }, head);
//   return Math.max(...lines);
// }
//
// console.log(queueTime([10,2,6,3], 2));

// The Supermarket Queue Answer 2

// function queueTime(customers, n) {
//   var result = new Array(2).fill(0);
//   for (let t of customers) {
//     let idx = result.indexOf(Math.min(...result));
//     result[idx] += t;
//   }
//   return Math.max(...result);
// }
//
// console.log(queueTime([10,2,6,3], 2));

// BubbleSort Implementation

// function bubbleSort(arr) {
//   var swapped;
//   do {
//     swapped = false;
//     for (var i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i+1]) {
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
//
// var arr1 = [2, 3, 5, 8, 12, 67, 80, 12, 7, 23, 6];
// bubbleSort(arr1);
//
// console.log(arr1);
