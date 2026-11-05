create database if not exists sistema_cadastro
default charset utf8mb4 
default collate utf8mb4_unicode_ci;

use sistema_cadastro;

create table if not exists alunos(

    id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    curso varchar(100) not null  

) default charset utf8mb4 collate utf8mb4_unicode_ci;

