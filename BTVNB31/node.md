# Các bước làm việc với Sequelize CLI

- Cài đặt sequelize: npm i sequelize

- Cài đặt sequelize-cli: npm i --save-dev sequelize-cli

- Khởi tạo: npx sequelize-cli init

File: config/config.json -> Config database theo các môi trường khác nhau

## Migration là gì?

- File xây dựng cấu trúc của các table trong Database
- Khi làm việc với Database -> Không thao tác trực tiếp trên CSDL mà sẽ thông qua các file migration
- Tác dụng:

* Bảo mật
* Quản lý phiên bản Database (rollback)
* Chia sẻ CSDL giữa các thành viên trong Team

## Tạo Model bằng CLI

npx sequelize-cli model:generate --name TenModel --attributes tenfield1:kieudulieu, tenfield2:kieudulieu,tenfield3:kieudulieu

Ví dụ:

npx sequelize-cli model:generate --name Customer --attributes id:number,name:string

## Chạy Migrate

npx sequelize-cli db:migrate

## Undo Migrate

Khôi phục phiên bản trước của Database

npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate:undo:all -> Reset Database về trạng thái chưa có bảng nào

## Tạo riêng Migration (Áp dụng khi sửa cấu trúc bảng)

npx sequelize migration:generate --name=ten_migration

Lưu ý: Tên migration viết tường minh

## Seeder là gì?

- Tạo ra các dữ liệu mẫu để test

## Tạo file Seeder

npx sequelize-cli seed:generate --name tenfileseed

Lưu ý: Tường minh

## Chạy Seeder

npx sequelize-cli db:seed:all

# Thông tin SMTP

- HOST: smtp.gmail.com
- Username: hoangan@fullstack.edu.vn
- Password: xawy cdle xyzo cyio
- Port: 465 hoặc 587
- Secure: ssl hoặc tls -> ssl nếu port là 465, tls nếu port là 587

# Đăng nhập thông qua MXH

- sử dụng phương thức xác thực thông qua MXH => trả về thông tin tk MXH(tên , email , avt , ...) => insert vào DB của ứng dụng => thực hiện đăng nhập tự động

# Tư duy xây dựng DB chức năng đăng nhập MXH

Trên 1 ứng dụng có nhiều loại đăng nhập
-Password
-Google
-Fb
-Github

=> cần có 1 table để quản lý các loại đăng nhập: providers (id , name)
=> trong bảng user cần bổ sung thêm trường provider_id
