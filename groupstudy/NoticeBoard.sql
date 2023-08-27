create database grstudy default character set utf8 collate utf8_general_ci;
use grstudy;

create table noticeboard (
	seq INT PRIMARY KEY NOT NULL auto_increment,
    name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
