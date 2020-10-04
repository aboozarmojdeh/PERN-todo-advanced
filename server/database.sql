CREATE DATABASE myperntodo;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    todo_date DATE 
);
