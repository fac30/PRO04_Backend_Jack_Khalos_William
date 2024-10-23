
BEGIN;

CREATE TABLE IF NOT EXISTS tutors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255)NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    description VARCHAR(170) NOT NULL,
    fk_subject_id INTEGER NULL,
    fk_tutortype_id INTEGER NULL,
    img_source VARCHAR(255) NULL,
    FOREIGN KEY (fk_subject_id) REFERENCES subjects(id),
    FOREIGN KEY (fk_tutortype_id) REFERENCES tutortypes(id)
);

CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
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
booking_status TEXT NOT NULL,
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


COMMIT;

INSERT INTO tutors (full_name, email, address, postal_code, phone_number, description, fk_subject_id, fk_tutortype_id, img_source)
 VALUES
 ('Itziar Cantero', 'itziar.cantero@example.com', '456 Tutor St', '54321', '07700900002', 'Hi! I’m Itziar and I’m so excited to start teaching Computer Science. I have a Master’s from MIT and like to sneak everywhere.', NULL, NULL, 
    'https://images.unsplash.com/photo-1461039088886-b5c863279a0e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

    ('Ben Craddock', 'ben.craddock@example.com', '123 Tutor Lane', '12345', '07700900001', 'I’m Ben, a mathematician with a degree from the University of Oxford. I like riding horses and travelling around Norfolk.', NULL, NULL, 
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    
    ('Tanya Gurova', 'tanya.gurova@example.com', '789 Tutor Blvd', '11223', '07700900003', 'I’m Tanya, a physics tutor with a passion for helping students understand complex concepts. I enjoy hiking and spending time in nature.', NULL, NULL, 
    'https://images.unsplash.com/photo-1620065865072-6eb90f4df05e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    
    ('Jason Warren', 'jason.warren@example.com', '321 Tutor Rd', '33445', '07700900004', 'Hello, I’m Jason, an English teacher with years of experience. I love reading classic literature and encouraging creativity in my students.', NULL, NULL, 
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    
    ('Josh Dixon', 'josh.dixon@example.com', '654 Tutor Ave', '55667', '07700900005', 'My name is Josh, and I specialize in teaching history. I believe in making learning fun through interactive lessons and discussions.', NULL, NULL, 
    'https://images.unsplash.com/photo-1713947507130-227586ab3024?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

 INSERT INTO subjects (subject_name)
 VALUES 
 ('Mathematics'),
 ('Physics'),
 ('Chemistry'),
 ('Biology'),
 ('English');

INSERT INTO students (full_name, email, password_hash, address, postal_code, credits)
VALUES 
('Jack', 'jack@zubi.com', '$2b$10$jLeVpIiAkE.m87lBsbFnh.DI193tbA3bvS28uqyBo31nl.BA1jETS', '123 Maple St', '12345', 30),
('Will', 'will@zubi.com', '$2b$10$i4Fe4rb.TiFCbAWsk5DN4eeXj638oBilT3GaTVb/03xJ4/ugPlqvO', '456 Oak St', '54321', 25),
('Khalos', 'khalos@zubi.com', '$2b$10$103GJdg897zS8hVSahwgz.YbghROGGZLpksTfgUJ2KXH.3meh4sTO', '789 Pine St', '67890', 20);

INSERT INTO sessions (session_time, booking_status, fk_student_id, fk_tutor_id)
VALUES 
-- Sessions for Itziar (Tutor ID: 1)
('2024-10-23 10:00:00', 'open', NULL, 1),
('2024-10-24 11:00:00', 'open', 1, 1),
('2024-10-25 14:00:00', 'open', 2, 1),
('2024-10-26 09:00:00', 'open', NULL, 1),
('2024-10-27 13:00:00', 'open', 3, 1),
('2024-10-28 15:00:00', 'open', NULL, 1),
('2024-10-29 12:00:00', 'open', 2, 1),
('2024-10-30 10:30:00', 'open', 1, 1),
('2024-10-31 14:30:00', 'open', NULL, 1),
('2024-11-01 11:00:00', 'open', 3, 1),

-- Sessions for Ben (Tutor ID: 2)
('2024-10-23 10:30:00', 'open', NULL, 2),
('2024-10-24 12:00:00', 'open', 1, 2),
('2024-10-25 15:30:00', 'open', 3, 2),
('2024-10-26 11:30:00', 'open', NULL, 2),
('2024-10-27 10:00:00', 'open', 2, 2),
('2024-10-28 12:30:00', 'open', NULL, 2),
('2024-10-29 09:00:00', 'open', 1, 2),
('2024-10-30 14:00:00', 'open', 3, 2),
('2024-10-31 15:00:00', 'open', NULL, 2),
('2024-11-01 13:30:00', 'open', 2, 2),

-- Sessions for Tanya (Tutor ID: 3)
('2024-10-23 09:00:00', 'open', 1, 3),
('2024-10-24 13:00:00', 'open', NULL, 3),
('2024-10-25 16:00:00', 'open', 2, 3),
('2024-10-26 09:30:00', 'open', NULL, 3),
('2024-10-27 14:30:00', 'open', 3, 3),
('2024-10-28 11:00:00', 'open', NULL, 3),
('2024-10-29 10:30:00', 'open', 1, 3),
('2024-10-30 15:00:00', 'open', 2, 3),
('2024-10-31 12:00:00', 'open', NULL, 3),
('2024-11-01 10:00:00', 'open', 3, 3),

-- Sessions for Jason (Tutor ID: 4)
('2024-10-23 11:00:00', 'open', 1, 4),
('2024-10-24 14:30:00', 'open', NULL, 4),
('2024-10-25 12:30:00', 'open', 2, 4),
('2024-10-26 15:30:00', 'open', NULL, 4),
('2024-10-27 09:00:00', 'open', 3, 4),
('2024-10-28 16:00:00', 'open', NULL, 4),
('2024-10-29 11:00:00', 'open', 1, 4),
('2024-10-30 14:00:00', 'open', 2, 4),
('2024-10-31 10:30:00', 'open', NULL, 4),
('2024-11-01 12:00:00', 'open', 3, 4),

-- Sessions for Josh (Tutor ID: 5)
('2024-10-23 12:00:00', 'open', NULL, 5),
('2024-10-24 15:00:00', 'open', 1, 5),
('2024-10-25 11:00:00', 'open', NULL, 5),
('2024-10-26 10:00:00', 'open', 2, 5),
('2024-10-27 13:30:00', 'open', NULL, 5),
('2024-10-28 09:30:00', 'open', 3, 5),
('2024-10-29 16:00:00', 'open', NULL, 5),
('2024-10-30 12:30:00', 'open', 1, 5),
('2024-10-31 11:30:00', 'open', NULL, 5),
('2024-11-01 14:30:00', 'open', 2, 5);
