// bai 1
//Cho 1 số nguyên bất kỳ, hiển thị danh sách các số chẵn và số lẻ
var n = 10;
function integer(n) {
  console.log("danh sach so chan:");
  for (var i = 0; i <= n; i += 2) {
    console.log(i);
  }

  console.log("danh sach so lẻ:");
  for (var j = 1; j <= n; j += 2) {
    console.log(j);
  }
}

integer(n);
// bai 2

// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var n = 4;

var total = 0;
if (n > 0) {
  for (var i = 1; i <= n; i++) {
    total += i * (i + 1);
  }
  console.log(`S = ${total}`);
} else {
  console.log(`nothing`);
}

// bai 3
// tinh tong chan le
function sumCL(a, b) {
  var sumC = 0;
  var sumL = 0;

  for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sumC += i;
    } else {
      sumL += i;
    }
  }

  console.log("tong chan la: " + sumC);
  console.log("tong le la: " + sumL);
}

var a = 5;
var b = 9;
sumCL(a, b);

// bai 4
// kiem tra so nguyen to
function Prime() {
  const n = Number(prompt("nhap so can kiem tra", 1));
  if (isNguyenTo(n)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isNguyenTo(n) {
  if (n <= 1) {
    return false;
  }
  let isNguyenTo = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return isNguyenTo;
}
Prime();
// bai 5
function sumS(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += 1 / i;
  }
  return total;
}

var n = 5;
var S = sumS(n);
console.log("gia tri cua S: " + S);
