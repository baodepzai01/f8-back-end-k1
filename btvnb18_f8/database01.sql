CREATE DATABASE database_01_bao;
use database_01_bao;
CREATE TABLE courses (
    id int NOT NULL,
    name varchar(50) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
);
ALTER TABLE courses ADD description text NULL AFTER price;
ALTER TABLE courses CHANGE COLUMN detail content TEXT;
ALTER TABLE courses MODIFY COLUMN content TEXT NOT NULL;

use database_01_bao;
CREATE TABLE teacher (
    id int NOT NULL,
    name varchar(50) NOT NULL,
    bio text NULL,
    created_at timestamp,
    updated_at timestamp
);
INSERT INTO teacher(id , name , bio , created_at , updated_at) VALUES (1 , "Hoang An","bio 1",NOW(),NOW());
INSERT INTO teacher(id , name , bio , created_at , updated_at) VALUES (2 , "Hoang An2","bio 2",NOW(),NOW());
INSERT INTO teacher(id , name , bio , created_at , updated_at) VALUES (3 , "Hoang An3","bio 3",NOW(),NOW());

SELECT * FROM teacher

use database_01_bao;
CREATE TABLE courses_teacher (
    id int NOT NULL,
    teacher_id text(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    price int NOT NULL
);

INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(1, "Hoang An1", 'Course 1', 10000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(2, "Hoang An1", 'Course 2', 20000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(3, "Hoang An1", 'Course 3', 30000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(4, "Hoang An2", 'Course 4', 40000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(5, "Hoang An2", 'Course 5', 50000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(6, "Hoang An2", 'Course 6', 60000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(7, "Hoang An3", 'Course 7', 70000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(8, "Hoang An3", 'Course 8', 80000);
INSERT INTO courses_teacher (id, teacher_id, name, price)VALUES(9, "Hoang An3", 'Course 9', 90000);

SELECT * FROM courses_teacher;


use database_01_bao;
UPDATE courses_teacher SET name = 'Bao Pham', price = 11111 WHERE id = 1;
UPDATE courses_teacher SET name = 'Bao Pham2', price = 22222 WHERE id = 2;
UPDATE courses_teacher SET name = 'Bao Pham3', price = 33333 WHERE id = 3;
UPDATE courses_teacher SET name = 'Bao Pham4', price = 44444 WHERE id = 4;
UPDATE courses_teacher SET name = 'Bao Pham5', price = 55555 WHERE id = 5;
UPDATE courses_teacher SET name = 'Bao Pham6', price = 66666 WHERE id = 6;
UPDATE courses_teacher SET name = 'Bao Pham7', price = 77777 WHERE id = 7;
UPDATE courses_teacher SET name = 'Bao Pham8', price = 88888 WHERE id = 8;
UPDATE courses_teacher SET name = 'Bao Pham9', price = 99999 WHERE id = 9;

use database_01_bao;
SELECT * FROM courses_teacher;


use database_01_bao;
UPDATE teacher SET bio = 'bio 3' WHERE id = 1;
UPDATE teacher SET bio = 'bio 4' WHERE id = 2;
UPDATE teacher SET bio = 'bio 5' WHERE id = 3;

use database_01_bao;
SELECT * FROM teacher;
