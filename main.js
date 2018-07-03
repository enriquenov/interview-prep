console.log("Enrique is coding.");

// // HOW MANY 1s ARE IN A SORTED BINARY ARRAY.

// function BinarySearch(arr) {
//   var low = 0,
//       high = arr.length - 1,
//       index = -1;
//
//   while (low <= high) {
//     var mid = Math.floor((high+low)/2);
//
//     if (arr[mid] == 1) {
//       index = mid;
//       high = mid - 1;
//     } else if (arr[mid] == 0) {
//       low = mid + 1;
//     }
//   }
//
//   return index == -1 ? "There are no 1s in the 'sorted' array." : arr.length - index;
// }
//
// var numbers = [0, 0, 0, 0, 0, 0, 0, 0, 1];
//
// console.log(BinarySearch(numbers));

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

function factorial( n ) {
  if ( n === 1 ) {
    return 1;
  }
  return n * factorial( n - 1 );
}

console.log(factorial(10));

// Reserving a String

function reverse( str ) {
  if ( str.length <= 1 ) {
    return str;
  }
  return reverse(str.substr(1)) + str[0];
}

console.log(reverse("incondicional"));
