// bai 1:
function getTotal(...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      console.log("dữ liệu không hợp lệ");
    }
    total += +args[i];
  }
  return total;
}
try {
  var result = getTotal(1.5, 2, 3, 4, 5);
  console.log("Kết quả:", result);
} catch (error) {
  console.error(error.message);
}
//bài 2
function getFile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("File đã được mở");
    }, 2000);
  });
}
function getReadfile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("F8 - Học lập trình để đi làm");
    }, 1000);
  });
}
function getClosefile() {
  return new Promise(function (res) {
    setTimeout(() => {
      res("File đã đóng");
    }, 1000);
  });
}
getFile()
  .then(function (response) {
    console.log(response);
    return getReadfile();
  })
  .then(function (response) {
    console.log(response);
    return getClosefile();
  })
  .then(function (response) {
    console.log(response);
  });
