CREATE TABLE "employee_login" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_login_pkey" PRIMARY KEY ("id")
);

INSERT INTO employee_login (id, name, email, password) VALUES
(1,  'employee1',  'employee1@gmail.com',  'pass1'),
(2,  'employee2',  'employee2@gmail.com',  'pass2'),
(3,  'employee3',  'employee3@gmail.com',  'pass3');

SELECT * FROM employee_login;

DROP TABLE employee_login;