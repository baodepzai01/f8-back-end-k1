// bai 1
//Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
var number = [5, 1, 6, 9, 4];
var maxNumber = number[0];
var maxIndex = 0;
for (var i = 1; i < number.length; i++) {
  if (number[i] > maxNumber) {
    maxNumber = number[i];
    maxIndex = i;
  }
}
var minNumber = number[0];
var minIndex = 0;
for (var j = 1; j < number.length; j++) {
  if (number[j] < minNumber) {
    minNumber = number[j];
    minIndex = j;
  }
}
console.log(`số lớn nhất là ${maxNumber}`);
console.log(`vị trí là  ${maxIndex}`);
console.log(`số bé nhất là ${minNumber}`);
console.log(`vị trí là  ${minIndex}`);

// bai 2
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
function integer(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function averageOfPrimes(array) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (integer(array[i])) {
      sum += array[i];
      count++;
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  }

  return sum / count;
}

const numBer = [2, 5, 7, 10, 13, 15];
const average = averageOfPrimes(numBer);
console.log(average);

// bai 3
// Mảng bất kỳ
var Arr = [1, 2, 3, 2, 4, 3, 5, 6, 5];

// Lọc trùng lặp
var newArr = [];

for (var i = 0; i < Arr.length; i++) {
  var double = false;

  for (var j = 0; j < newArr.length; j++) {
    if (Arr[i] === newArr[j]) {
      double = true;
      break;
    }
  }

  if (!double) {
    newArr.push(Arr[i]);
  }
}

console.log(newArr);

// bai 4
//Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
//Sắp xếp mảng theo thứ tự tăng dần
//Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
var numbers = [5, 1, 9, 8, 10];

numbers.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
});
console.log(numbers);
var newNumber = 6;
var newIndex = 0;
for (var i = 0; i < numbers.length; i++) {
  if (newNumber <= numbers[i]) {
    newIndex = i;
    break;
  }
}
numbers.splice(newIndex, 0, newNumber);
console.log(numbers);
