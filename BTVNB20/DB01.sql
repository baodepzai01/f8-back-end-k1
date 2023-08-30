CREATE DATABASE database_03_bao;

use database_03_bao;
CREATE TABLE products(
    id int primary key auto_increment,
    sku int,
    name varchar(100),
    listed_price float DEFAULT 0,
    sale_price float,
    quantity int,
    user_manual varchar(50),
    description varchar(50),
    product_properties_id int,
    created_at timestamp,
    updated_at timestamp
);
CREATE TABLE product_properties(
    id int primary key auto_increment,
    size varchar(20),
    color varchar(20),
    material varchar(20),
    created_at timestamp,
    updated_at timestamp
);
CREATE TABLE product_info (
    id int primary key auto_increment,
    product_id int,
    created_at timestamp,
    updated_at timestamp
);

ALTER TABLE products ADD FOREIGN KEY (product_properties_id) REFERENCES product_properties(id);

ALTER TABLE product_info ADD FOREIGN KEY (product_id) REFERENCES products(id);
INSERT INTO product_properties(id , size , color , material , created_at , updated_at) values (1 , "S" , "red" , "material" , now(),now());
INSERT INTO product_properties(id , size , color , material , created_at , updated_at) values (2 , "M" , "blue" , "material2" , now(),now());
INSERT INTO product_properties(id , size , color , material , created_at , updated_at) values (3 , "L" , "orange" , "material3" , now(),now());



INSERT INTO products (id , sku , name , sale_price , quantity , user_manual,description,product_properties_id , created_at , updated_at) values (1,1,"dien thoai",10000,1,"cach dung","mo ta",1,now(),now());
INSERT INTO products (id , sku , name , sale_price , quantity , user_manual,description,product_properties_id , created_at , updated_at) values (2,2,"dien thoai2",20000,2,"cach dung2","mo ta2",2,now(),now());
INSERT INTO products (id , sku , name , sale_price , quantity , user_manual,description,product_properties_id , created_at , updated_at) values (3,3,"dien thoai3",30000,3,"cach dung3","mo ta3",3,now(),now());

SELECT * FROM products;
SELECT * FROM product_properties;
SELECT * from product_properties WHERE id =2 ;
SELECT * FROM products WHERE quantity >0;