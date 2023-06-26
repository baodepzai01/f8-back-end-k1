// bai 1
//tinh tien taxi

var km, price, cost;
km = 125;
if (km >= 0) {
  if (km <= 1) {
    price = 15000;
  } else if (km > 1 && km <= 5) {
    price = 13500;
  } else if (km > 5) {
    price = 11000;
  } else if (km >= 120) {
    price = cost - (price * cost) / 10;
  } else {
    price = 11000;
  }

  cost = km * price;
  console.log(`gia tien taxi ${cost}`);
} else {
  console.log(`khong co gi`);
}

// bai 2
// tinh tien dien
var kwh, soTien, price;
kwh = 44;
if (kwh >= 0) {
  if (kwh >= 0 && kwh <= 50) {
    price = 1.678;
  } else if (kwh >= 51 && kwh <= 100) {
    price = 1.734;
  } else if (kwh >= 101 && kwh <= 200) {
    price = 2.014;
  } else if (kwh >= 201 && kwh <= 300) {
    price = 2.536;
  } else if (kwh >= 301 && kwh <= 400) {
    price = 2.834;
  } else {
    price = 2.927;
  }
  soTien = kwh * price;
  console.log(`so tien dien la ${soTien}`);
} else {
  console.log("nothing");
}
//bai 3
// tinh giai thua
var a = 5;
var giaiThua = 1;

for (var i = 1; i <= a; i++) {
  giaiThua *= i;
}

console.log("Giai thừa của " + a + " là: " + giaiThua);

// bai 4
// kiem tra so nguyen to
var a = 5.5;
if (a % 1 === 0) {
  console.log(" a la so nguyen");
} else {
  console.log("a khong phai la so nguyen");
}
