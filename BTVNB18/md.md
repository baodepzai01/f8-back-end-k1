Tạo database có tên: database_01_tenhocvien

Tạo bảng courses có cấu trúc như sau

id => Kiểu int, NOT NULL
name => Kiểu varchar, NOT NULL
price => Kiểu float
detail => Kiểu text
teacher_id => Kiểu int, NOT NULL
active => Kiểu int
created_at => Kiểu timestamp
updated_at => Kiểu timestamp
Thêm trường description trước trường detail với kiểu dữ liệu và ràng buộc sau:
Kiểu text
NULL
Đổi tên trường detail thành content và ràng buộc chuyển thành NOT NULL

Tạo bảng teacher có cấu trúc như sau

id => Kiểu int, NOT NULL
name => Kiểu varchar, NOT NULL
bio => Kiểu text, NULL
created_at => Kiểu timestamp
updated_at => Kiểu timestamp
Thêm 3 giảng viên vào bảng teacher, mỗi giảng viên thêm 3 khóa học
Sửa tên và giá từng khóa học thành tên mới và giá mới (Tên khóa học, giá khóa học các khóa học không được giống nhau)
Sửa lại bio của từng giảng viên (Bio từng giảng viên không được giống nhau)
Lưu ý:

Lưu lại thời gian khi thêm

Lưu lại thời gian sửa sau cùng

Hiển thị danh sách giảng viên, danh sách khóa học
