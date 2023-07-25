// bài 1 :
// [
//   {
//     id: 1,
//     name: "Chuyên mục 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     name: "Chuyên mục 2",
//     parent: 0,
//   },
//   {
//     id: 3,
//     name: "Chuyên mục 3",
//     parent: 0,
//   },
//   {
//     id: 4,
//     name: "Chuyên mục 2.1",
//     parent: 2,
//   },
//   {
//     id: 5,
//     name: "Chuyên mục 2.2",
//     parent: 2,
//   },
//   {
//     id: 6,
//     name: "Chuyên mục 2.3",
//     parent: 2,
//   },
//   {
//     id: 7,
//     name: "Chuyên mục 3.1",
//     parent: 3,
//   },
//   {
//     id: 8,
//     name: "Chuyên mục 3.2",
//     parent: 3,
//   },
//   {
//     id: 9,
//     name: "Chuyên mục 3.3",
//     parent: 3,
//   },
//   {
//     id: 10,
//     name: "Chuyên mục 2.2.1",
//     parent: 5,
//   },
//   {
//     id: 11,
//     name: "Chuyên mục 2.2.2",
//     parent: 5,
//   },
// ];

// Data
var data = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function buildNested(data, parentId) {
  var result = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].parent === parentId) {
      var item = {
        id: data[i].id,
        name: data[i].name,
      };
      var children = buildNested(data, data[i].id);

      if (children.length > 0) {
        item.children = children;
      }

      result.push(item);
    }
  }

  return result;
}

var categories = buildNested(data, 0);

console.log(categories);
// bài 2 :
Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("mang trong");
  }

  let accumulator = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce2(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
// bai 3

Array.prototype.filter2 = function (callback) {
  const filteredArray = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // filteredArray[filteredArray.length] = callback(this[i], i);
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

const numberss = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter2((number) => number % 2 === 0);
console.log(evenNumbers);
