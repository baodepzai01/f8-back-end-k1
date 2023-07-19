//bai 1 :
// const customers = [
//   { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
//   { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
//   { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
// ];

// const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  var newCustomers = [];

  for (var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var shortName = customer.name.split(" ")[1];
    var newCustomer = new Customer(
      customer.name,
      customer.age,
      customer.address
    );
    newCustomer.shortName = "Nguyễn " + shortName;
    newCustomers.push(newCustomer);
  }

  newCustomers.sort(function (a, b) {
    return a.age - b.age;
  });

  return newCustomers;
}

const result = createCustomers(customers);
console.log(result);

// bai 2
function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}

const data = [];

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thông tin đăng ký không đủ");
    return;
  }

  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Email đã được đăng ký trước đó");
    return;
  }

  const newUser = new User(name, password, email);
  data.push(newUser);

  return newUser;
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ");
    return;
  }
}

const dataRegister1 = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister2 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log(data);
console.log(dataLogin);
