CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- sample admin user, replace <YOUR_BCRYPT_HASH> with the actual bcrypt hash of your desired password
INSERT INTO users (name, email, password)
VALUES (
    'Administrator',
    'admin@employeeportal.com',
    '<YOUR_BCRYPT_HASH>'
);

CREATE TYPE employee_status AS ENUM ('active','inactive');

CREATE TABLE employees(
    id BIGSERIAL PRIMARY KEY,
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    mobile VARCHAR(15) UNIQUE NOT NULL,
    department VARCHAR(100) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    joining_date DATE NOT NULL,
    salary DECIMAL(10,2),
    status employee_status,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);

--sample employees
INSERT INTO employees
(employee_id, first_name, last_name, email, mobile, department, designation, joining_date, salary, status)
VALUES
('EMP001', 'Rahul', 'Sharma', 'rahul.sharma@employeeportal.com', '9876500001', 'Software Development', 'Software Engineer', '2023-01-15', 650000, 'active'),

('EMP002', 'Priya', 'Nair', 'priya.nair@employeeportal.com', '9876500002', 'HR', 'HR Executive', '2022-08-20', 480000, 'active'),

('EMP003', 'Arjun', 'Patel', 'arjun.patel@employeeportal.com', '9876500003', 'Finance', 'Financial Analyst', '2021-11-10', 720000, 'active'),

('EMP004', 'Sneha', 'Reddy', 'sneha.reddy@employeeportal.com', '9876500004', 'QA & Testing', 'QA Engineer', '2023-05-08', 560000, 'inactive'),

('EMP005', 'Karan', 'Verma', 'karan.verma@employeeportal.com', '9876500005', 'DevOps', 'DevOps Engineer', '2024-02-12', 810000, 'active');