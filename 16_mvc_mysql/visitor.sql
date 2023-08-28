use sesac;

create table visitor (
	id INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 현재 DB의 인코딩을 확인
SELECT default_character_set_name, DEFAULT_COLLATION_NAME FROM information_schema.SCHEMATA 
WHERE schema_name = "sesac";

-- 현재 테이블의 인코딩을 확인
SHOW FULL COLUMNS FROM visitor;

-- DB의 캐릭터셋을 변경
alter database sesac character set utf8mb4 collate utf8mb4_unicode_ci;

-- 테이블의 캐릭터셋을 변경합니다.
alter table visitor convert to character set utf8mb4 collate utf8mb4_unicode_ci;

insert into visitor values 
	(1, '홍길동', '내가 왔다.'),
    (2, '이찬혁', '으라차차');

DESC visitor;    
select * from visitor;

-- 새로운 계정 생성
create user 'user99'@'%';
create user 'user98'@'%' identified with mysql_native_password by '1234';

-- 계정에 권한 부여
grant all privileges on *.* to 'user98'@'%' with grant option;

