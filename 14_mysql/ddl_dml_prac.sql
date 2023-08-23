use sesac;

create table member (
	id VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    age int,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT "x",
    PRIMARY KEY(id)
);
-- drop table member;
desc member;

-- 실습2
alter table member modify id VARCHAR(10);
alter table member drop age;
alter table member add interest VARCHAR(100);

-- 실습3
CREATE table user (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM( 'F', 'M', '' ) default '',
    birthday DATE NOT NULL,
    age int(3) NOT NULL default 0
);
desc user;

-- 실습4
select * from user;
INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES
	('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
    ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
    ('hanjo', 'jk48fn4', '한조', 'M', '1976-06-27', 47),
    ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
    ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
    ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);
    
-- 실습5
-- 1.
select * from user;
select * from user
order by birthday;

-- 2.
select * from user
where gender = "M"
order by name desc;

-- 3.
select id, name, birthday from user
where birthday like "199%";

-- 4.
select * from user 
where birthday like "%-06-%"
order by birthday;

-- 5.
select * from user
where gender = "M" and birthday like "197%";

-- 6.
select * from user 
order by age desc
limit 3;

-- 7.
select * from user
where age <= 50 and age >= 25;

-- 8.
update user set pw = "12345678" where id = "hong1234";

-- 9.
delete from user
where id = "jungkrat";