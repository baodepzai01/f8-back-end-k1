create database database_05_bao;

USE database_05_bao;


CREATE TABLE khach_hang (
    ma_kh VARCHAR(10) NOT NULL PRIMARY KEY,
    ten_kh VARCHAR(25),
    dia_chi VARCHAR(100),
    so_dt VARCHAR(15) UNIQUE
);

CREATE TABLE phong (
    ma_phong VARCHAR(10) NOT NULL PRIMARY KEY,
    loai_phong VARCHAR(25) NOT NULL,
    so_khach_toi_da INT DEFAULT 15,
    gia_phong FLOAT NOT NULL,
    mo_ta TEXT
);

CREATE TABLE dat_phong (
    ma_dat_phong VARCHAR(10) NOT NULL PRIMARY KEY, 
    ma_phong VARCHAR(10) NOT NULL,
    ma_kh VARCHAR(10) NOT NULL,
    ngay_dat DATE NOT NULL,
    gio_bat_dau TIME NOT NULL,
    gio_ket_thuc TIME NOT NULL,
    tien_dat_coc FLOAT DEFAULT 0,
    ghi_chu VARCHAR(255),
    trang_thai_dat VARCHAR(15),
    FOREIGN KEY (ma_phong) REFERENCES phong(ma_phong),
    FOREIGN KEY (ma_kh) REFERENCES khach_hang(ma_kh)
);

CREATE TABLE dich_vu_di_kem (
    ma_dv VARCHAR(10) PRIMARY KEY, 
    ten_dv VARCHAR(255),
    don_vi_tinh VARCHAR(30) NOT NULL,
    don_gia FLOAT
);

CREATE TABLE chi_tiet_su_dung_dv (
    ma_dat_phong VARCHAR(10), 
    ma_dv VARCHAR(10), 
    so_luong INT,
    PRIMARY KEY (ma_dat_phong, ma_dv),
    FOREIGN KEY (ma_dat_phong) REFERENCES dat_phong(ma_dat_phong),
    FOREIGN KEY (ma_dv) REFERENCES dich_vu_di_kem(ma_dv)
); 


INSERT INTO phong(ma_phong, loai_phong, so_khach_toi_da, gia_phong, mo_ta) 
VALUES 
    ('P0001', 'Loai 1', 8, 60000, 'Phong 01'),
    ('P0002', 'Loai 1', 9, 80000, 'Phong 02'),
    ('P0003', 'Loai 2', 15, 50000, 'Phong 03'),
    ('P0004', 'Loai 3', 20, 50000, 'Phong 04');

INSERT INTO khach_hang(ma_kh, ten_kh, dia_chi, so_dt)
VALUES
    ('KH0001', 'Nguyen Van A', 'Hoa xuan', '11111111'),
    ('KH0002', 'Nguyen Van B', 'Ha Noi', '22222222'),
    ('KH0003', 'Nguyen Van C', 'Ha Noi', '33333333'),
    ('KH0004', 'Pham Thi A', 'Ha Noi', '44444444'),
    ('KH0005', 'Pham Thi B', 'Ha Noi', '55555555');



INSERT INTO dat_phong (ma_dat_phong, ma_phong, ma_kh, ngay_dat, gio_bat_dau, gio_ket_thuc, tien_dat_coc, ghi_chu, trang_thai_dat) 
VALUES 
    ('DP0001', 'P0001', 'KH0001', '2016-09-05', '10:00:00', '12:00:00', 50000, 'ok', '      '),
    ('DP0002', 'P0002', 'KH0002', '2022-09-06', '14:00:00', '16:00:00', 60000, 'ok', 'da dat'),
    ('DP0003', 'P0001', 'KH0003', '2017-09-07', '16:00:00', '18:00:00', 70000, 'ko', 'da huy'),
    ('DP0004', 'P0003', 'KH0004', '2023-09-08', '18:00:00', '20:00:00', 80000, 'ko', 'da dat'),
    ('DP0005', 'P0002', 'KH0005', '2023-09-09', '20:00:00', '22:00:00', 90000, 'ko', 'da dat');


INSERT INTO dich_vu_di_kem (ma_dv, ten_dv, don_vi_tinh, don_gia) 
VALUES 
    ('DV0001', 'Beer', '1', 10000),
    ('DV0002', 'Nuoc ngot', '1', 15000),
    ('DV0003', 'Trai cay', '1', 20000),
    ('DV0004', 'Khan uot', '1', 50000),
    ('DV0005', 'nuoc hoa qua', '1', 80000);


INSERT INTO chi_tiet_su_dung_dv (ma_dat_phong, ma_dv, so_luong) 
VALUES 
    ('DP0001', 'DV0002', 1),
    ('DP0002', 'DV0002', 8),
    ('DP0003', 'DV0001', 4),
    ('DP0001', 'DV0003', 2),
    ('DP0003', 'DV0004', 2),
    ('DP0004', 'DV0001', 9),
    ('DP0004', 'DV0002', 1),
    ('DP0005', 'DV0003', 7),
    ('DP0005', 'DV0004', 2),
    ('DP0005', 'DV0005', 11);

-- cau 2 : 


SELECT khach_hang.ma_kh, khach_hang.ten_kh, khach_hang.dia_chi, khach_hang.so_dt FROM khach_hang  INNER JOIN dat_phong  ON khach_hang.ma_kh = dat_phong.ma_kh WHERE dia_chi = 'Hoa xuan' GROUP BY ma_kh;


-- cau 3 
SELECT phong.ma_phong, phong.loai_phong, phong.so_khach_toi_da, phong.gia_phong, COUNT(dat_phong.ma_phong) AS SoLanDat FROM phong  
INNER JOIN dat_phong  
ON phong.ma_phong = dat_phong.ma_phong 
GROUP BY dat_phong.ma_phong, dat_phong.trang_thai_dat 
HAVING SoLanDat > 1
AND dat_phong.trang_thai_dat = 'da dat';

--cau 1 :
SELECT dat_phong.ma_dat_phong, dat_phong.ma_phong, phong.loai_phong, phong.gia_phong, khach_hang.ten_kh, dat_phong.ngay_dat,
 (phong.gia_phong * TIME_TO_SEC(TIMEDIFF(dat_phong.gio_ket_thuc, dat_phong.gio_bat_dau)) / 3600) AS TongTienHat,
	IFNULL(SUM(dich_vu_di_kem.don_gia * chi_tiet_su_dung_dv.so_luong), 0) AS TongTienSuDungDichVu,
   (phong.gia_phong * TIME_TO_SEC(TIMEDIFF(dat_phong.gio_ket_thuc, dat_phong.gio_bat_dau)) / 3600) + IFNULL(SUM(dich_vu_di_kem.don_gia * chi_tiet_su_dung_dv.so_luong), 0) - dat_phong.tien_dat_coc AS TongTienThanhToan
 FROM dat_phong
INNER JOIN phong ON dat_phong.ma_phong = phong.ma_phong
INNER JOIN khach_hang ON dat_phong.ma_kh = khach_hang.ma_kh
LEFT JOIN
    chi_tiet_su_dung_dv ON dat_phong.ma_dat_phong = chi_tiet_su_dung_dv.ma_dat_phong
LEFT JOIN
    dich_vu_di_kem ON chi_tiet_su_dung_dv.ma_dv = dich_vu_di_kem.ma_dv
GROUP BY
    dat_phong.ma_dat_phong, phong.ma_phong, khach_hang.ten_kh, dat_phong.ngay_dat
ORDER BY
    dat_phong.ma_dat_phong;


