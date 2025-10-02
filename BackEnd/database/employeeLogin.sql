CREATE TABLE IF NOT EXISTS employee_login (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO employee_login (id, name, email, password) VALUES
(1,  'employee1',  'employee1@gmail.com',  'pass1'),
(2,  'employee2',  'employee2@gmail.com',  'pass2'),
(3,  'employee3',  'employee3@gmail.com',  'pass3');

SELECT * FROM employee_login;

DROP TABLE employee_login;