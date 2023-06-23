// Bai 1 : Hoan vi 2 so
var a, b;
a = 10;
b = 5;
// hoan vi khong dung bien trung gian

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

// Bai 2
// thuc hien S = 10 + 20 + 5^10 / 2
var a, b, c, d;
a = 10;
b = 20;
c = 5;
d = 2;
S = a + b + c ** a / d;

console.log(S);

// Bai 3
// tim so lon nhat
var a, b, c;
a = 10;
b = 20;
c = 30;
var max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
console.log(`so lon nhat la ${max}`);

// bai 4
// kiem tra so cung dau

var a, b;
a = -5;
b = 2;
if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
  console.log(`hai so cung dau`);
} else {
  console.log(`hai so khac dau`);
}

// bai 5
//sap xep 3 so
function number(a, b, c) {
  if (a > b) {
    var temp = a;
    a = b;
    b = temp;
  }

  if (a > c) {
    var temp = a;
    a = c;
    c = temp;
  }

  if (b > c) {
    var temp = b;
    b = c;
    c = temp;
  }

  return [a, b, c];
}

var a = 18;
var b = 12;
var c = 6;

var ascending = number(a, b, c);
console.log("sap xep tang dan " + ascending);
