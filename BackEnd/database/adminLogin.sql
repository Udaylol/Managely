CREATE TABLE IF NOT EXISTS admin_login (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


INSERT INTO admin_login (id, name, email, password) VALUES
(1,  'admin1',  'admin1@gmail.com',  'pass1'),
(2,  'admin2',  'admin2@gmail.com',  'pass2'),
(3,  'admin3',  'admin3@gmail.com',  'pass3');

SELECT * FROM admin_login;

DROP TABLE admins_login;