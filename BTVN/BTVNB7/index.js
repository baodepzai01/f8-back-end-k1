// bài 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = arrA.reduce((prev, current) => {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log(result);
// bai 2
// Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function item(arr) {
  return arr.reduce(function (pre, cur) {
    if (Array.isArray(cur)) {
      pre.push(...item(cur));
    } else {
      pre.push(cur);
    }
    return pre;
  }, []);
}

var customer = item(arr);
console.log(customer);
// bai 3
// Tách phần tử trong mảng theo đúng kiểu dữ liệu

// var arr = [["a", 1, true], ["b", 2, false]]
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var customer = arr[0].map(function (_, i) {
  return arr.map(function (data) {
    return data[i];
  });
});

console.log(customer);
