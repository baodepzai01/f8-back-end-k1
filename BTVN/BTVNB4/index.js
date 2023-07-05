// bai 1
// hien thu n so fibonacci dau tien
function fibonacci(n) {
  var fib1 = 0;
  var fib2 = 1;

  console.log(fib1);

  for (var i = 1; i < n; i++) {
    console.log(fib2);

    var nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
  }
}

var n = 10;
fibonacci(n);

// bai 2
function reverseInteger(number) {
  var reversed = 0;

  while (number !== 0) {
    var digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversed;
}

var number = 12345;
var reversedNumber = reverseInteger(number);

console.log(reversedNumber);

// bai 3
function convertNumberToWords(number) {
  var result = "";

  if (number === 0) {
    return "không";
  }

  var units = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  var tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];

  var thousands = Math.floor(number / 1000);
  var hundreds = Math.floor((number % 1000) / 100);
  var tensAndUnits = number % 100;

  if (thousands > 0) {
    result += units[thousands] + " nghìn ";
  }

  if (hundreds > 0) {
    result += units[hundreds] + " trăm ";
  }

  if (tensAndUnits > 0) {
    if (tensAndUnits < 10) {
      result += units[tensAndUnits];
    } else if (tensAndUnits < 20) {
      result += "mười " + units[tensAndUnits % 10];
    } else {
      result +=
        tens[Math.floor(tensAndUnits / 10)] + " " + units[tensAndUnits % 10];
    }
  }

  return result.trim();
}

var number = 1234;
var words = convertNumberToWords(number);

console.log(words);
