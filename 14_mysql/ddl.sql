-- 데이터베이스: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램(ex. MySQL)
-- 테이블: 하나 이상의 열과 행으로 구성된 데이터베이스의 단위
-- SQL: RDBMS에서 사용되는 언어 (데이터베이스를 구축, 관리, 활용하기 위한 언어)
-- DDL (Data Definition Language) 
-- CREATE / ALTER / DROP

-- 1. DB 생성
create database sesac default character set utf8 collate utf8_general_ci;

-- DB 조회
show databases;

-- DB 사용 선언 
use sesac;

-- DB 삭제
drop database sesac;

-- 2. Table 관련 명령어
-- 제약조건 옵션
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가, 테이블에 데이터 추가할 때마다 자동으로 숫자 증가
-- PRIMARY KEY: 기본키로 설정되어 중복값 허용X, NULL 허용X 의 제약조건이 추가된다.
-- DEFAULT 기본값: 특정 속성의 기본값 설정
-- UNIQUE: 중복값 허용X, NULL 허용

create table product (
	id INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 조회
show tables;	

-- 테이블 구조 확인
desc product;

-- 테이블 존재 자체를 삭제 
drop table product;

-- 테이블의 튜플의 구조와 데이터 삭제
truncate table product;

-- 3. 테이블 정의 수정
-- 컬럼 추가
alter table product add new_column date;

-- 컬럼 자료형 수정
alter table product modify new_column int;

-- 컬럼명 변경
alter table product change new_column changed_column int;

-- 컬럼 삭제
alter table product drop changed_column;





