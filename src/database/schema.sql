
BEGIN;

CREATE TABLE IF NOT EXISTS tutors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255)NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    availability TEXT NULL,
    fk_subject_id INTEGER NULL,
    fk_tutortype_id INTEGER NULL,
    FOREIGN KEY (fk_subject_id) REFERENCES subjects(id),
    FOREIGN KEY (fk_tutortype_id) REFERENCES tutortypes(id)
);

CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    credits INTEGER NOT NULL
);


CREATE TABLE IF NOT EXISTS subjects (
id INTEGER PRIMARY KEY AUTOINCREMENT,
subject_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tutortypes (
id INTEGER PRIMARY KEY AUTOINCREMENT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
name VARCHAR(255) NOT NULL,
price INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
id INTEGER PRIMARY KEY AUTOINCREMENT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
session_time DATETIME NOT NULL,
status TEXT NOT NULL,
fk_student_id INTEGER NULL,
fk_tutor_id INTEGER NULL,
FOREIGN KEY (fk_tutor_id) REFERENCES tutors(id),
FOREIGN KEY (fk_student_id) REFERENCES students(id)
);

CREATE TABLE IF NOT EXISTS reviews (
id INTEGER PRIMARY KEY AUTOINCREMENT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
score INTEGER NOT NULL,
fk_student_id INTEGER NULL,
fk_session_id INTEGER NULL,
fk_tutor_id INTEGER NULL,
FOREIGN KEY (fk_student_id) REFERENCES students(id),
FOREIGN KEY (fk_session_id) REFERENCES sessions(id),
FOREIGN KEY (fk_tutor_id) REFERENCES tutors(id)
);

INSERT INTO tutors (full_name, email, address, postal_code, phone_number, availability, fk_subject_id, fk_tutortype_id)
VALUES 
('John Doe', 'john.doe@example.com', '123 Tutor Lane', '12345', '07700900001', NULL, NULL, NULL),
('Jane Smith', 'jane.smith@example.com', '456 Tutor St', '54321', '07700900002', NULL, NULL, NULL),
('Alice Johnson', 'alice.johnson@example.com', '789 Tutor Blvd', '11223', '07700900003', NULL, NULL, NULL),
('Robert Brown', 'robert.brown@example.com', '321 Tutor Rd', '33445', '07700900004', NULL, NULL, NULL),
('Emily Davis', 'emily.davis@example.com', '654 Tutor Ave', '55667', '07700900005', NULL, NULL, NULL);

INSERT INTO subjects (subject_name)
VALUES 
('Mathematics'),
('Physics'),
('Chemistry'),
('Biology'),
('English');




COMMIT;
