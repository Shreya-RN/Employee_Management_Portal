create database employee_portal;
\c employee_portal;

create table users(
    id bigint primary key,
    name varchar(100)not null,
    email varchar(100) unique not null,
    password varchar(255)not null
    ,created_at timestamptz default now()
);