
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
start DATETIME NOT NULL,
"end" DATETIME NOT NULL,
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
('Khalos', 'khalos@zubi.com', '$2b$10$103GJdg897zS8hVSahwgz.YbghROGGZLpksTfgUJ2KXH.3meh4sTO', '789 Pine St', '67890', 20),
('Emma Thompson', 'emma.thompson@example.com', '$2b$10$exampleHashForEmma', '101 Maple St', '12345', 15),
('Liam Johnson', 'liam.johnson@example.com', '$2b$10$exampleHashForLiam', '202 Oak St', '54321', 20),
('Olivia Brown', 'olivia.brown@example.com', '$2b$10$exampleHashForOlivia', '303 Pine St', '67890', 18),
('Noah Davis', 'noah.davis@example.com', '$2b$10$exampleHashForNoah', '404 Cedar St', '98765', 22),
('Ava Wilson', 'ava.wilson@example.com', '$2b$10$exampleHashForAva', '505 Birch St', '87654', 17),
('Sophia Martinez', 'sophia.martinez@example.com', '$2b$10$exampleHashForSophia', '606 Spruce St', '76543', 21),
('Mason Anderson', 'mason.anderson@example.com', '$2b$10$exampleHashForMason', '707 Fir St', '65432', 19);

INSERT INTO sessions (start, "end", booking_status, fk_student_id, fk_tutor_id)
VALUES
-- Itziar (Tutor 1) Sessions
('2024-10-25 09:00:00', '2024-10-25 10:00:00', 'booked', 1, 1),    -- Jack
('2024-10-25 14:00:00', '2024-10-25 14:30:00', 'open', NULL, 1),   -- Kept as 30 minutes
('2024-10-28 10:00:00', '2024-10-28 11:00:00', 'booked', 3, 1),    -- Khalos, changed to 1 hour
('2024-10-28 15:00:00', '2024-10-28 15:30:00', 'open', NULL, 1),   -- Kept as 30 minutes
('2024-10-29 11:00:00', '2024-10-29 11:30:00', 'booked', 5, 1),    -- Liam, kept as 30 minutes
('2024-10-29 16:00:00', '2024-10-29 16:30:00', 'open', NULL, 1),   -- Kept as 30 minutes
('2024-10-30 13:00:00', '2024-10-30 14:00:00', 'open', 7, 1),      -- Noah, changed to 1 hour
('2024-10-30 16:30:00', '2024-10-30 17:00:00', 'open', NULL, 1),   -- Kept as 30 minutes
('2024-11-01 09:30:00', '2024-11-01 10:00:00', 'booked', 9, 1),    -- Sophia, kept as 30 minutes
('2024-11-01 14:30:00', '2024-11-01 15:00:00', 'open', NULL, 1),   -- Kept as 30 minutes
('2024-11-04 10:00:00', '2024-11-04 10:30:00', 'booked', 2, 1),    -- Will, kept as 30 minutes
('2024-11-04 15:00:00', '2024-11-04 15:30:00', 'open', NULL, 1),    -- Kept as 30 minutes
('2024-11-05 11:30:00', '2024-11-05 12:00:00', 'booked', 4, 1),    -- Emma, kept as 30 minutes
('2024-11-05 16:00:00', '2024-11-05 16:30:00', 'open', NULL, 1),    -- Kept as 30 minutes
('2024-11-06 10:30:00', '2024-11-06 11:00:00', 'open', 6, 1),      -- Olivia, kept as 30 minutes
('2024-11-06 15:30:00', '2024-11-06 16:00:00', 'booked', NULL, 1),  -- Changed to 1 hour
('2024-11-07 09:00:00', '2024-11-07 09:30:00', 'open', 8, 1),      -- Ava, kept as 30 minutes
('2024-11-07 14:00:00', '2024-11-07 14:30:00', 'booked', NULL, 1),  -- Kept as 30 minutes
('2024-11-08 11:00:00', '2024-11-08 11:30:00', 'open', 10, 1),     -- Mason, kept as 30 minutes
('2024-11-08 16:00:00', '2024-11-08 17:00:00', 'booked', NULL, 1),   -- Changed to 1 hour


-- Ben (Tutor 2) Sessions
('2024-10-25 10:00:00', '2024-10-25 10:30:00', 'booked', 2, 2),    -- Will, kept as 30 minutes
('2024-10-25 15:00:00', '2024-10-25 15:30:00', 'open', NULL, 2),   -- Kept as 30 minutes
('2024-10-28 11:00:00', '2024-10-28 12:00:00', 'booked', 4, 2),    -- Emma, changed to 1 hour
('2024-10-28 16:00:00', '2024-10-28 16:30:00', 'open', NULL, 2),   -- Kept as 30 minutes
('2024-10-29 13:00:00', '2024-10-29 14:00:00', 'booked', 6, 2),    -- Olivia, changed to 1 hour
('2024-10-29 17:00:00', '2024-10-29 17:30:00', 'open', NULL, 2),   -- Kept as 30 minutes
('2024-10-30 14:00:00', '2024-10-30 14:30:00', 'open', 8, 2),      -- Ava, kept as 30 minutes
('2024-10-30 17:00:00', '2024-10-30 18:00:00', 'booked', NULL, 2), -- Changed to 1 hour
('2024-11-01 10:30:00', '2024-11-01 11:00:00', 'booked', 10, 2),   -- Mason, kept as 30 minutes
('2024-11-01 15:30:00', '2024-11-01 16:00:00', 'open', NULL, 2),   -- Kept as 30 minutes
('2024-11-04 11:00:00', '2024-11-04 11:30:00', 'booked', 1, 2),    -- Jack, kept as 30 minutes
('2024-11-04 16:00:00', '2024-11-04 16:30:00', 'open', NULL, 2),    -- Kept as 30 minutes
('2024-11-05 12:30:00', '2024-11-05 13:00:00', 'open', 3, 2),      -- Khalos, kept as 30 minutes
('2024-11-05 17:00:00', '2024-11-05 17:30:00', 'booked', NULL, 2),  -- Kept as 30 minutes
('2024-11-06 11:30:00', '2024-11-06 12:00:00', 'booked', 5, 2),    -- Liam, kept as 30 minutes
('2024-11-06 16:30:00', '2024-11-06 17:30:00', 'open', NULL, 2),    -- Changed to 1 hour
('2024-11-07 10:00:00', '2024-11-07 10:30:00', 'booked', 7, 2),    -- Noah, kept as 30 minutes
('2024-11-07 15:00:00', '2024-11-07 15:30:00', 'open', NULL, 2),    -- Kept as 30 minutes
('2024-11-08 12:00:00', '2024-11-08 13:00:00', 'booked', 9, 2),    -- Sophia, changed to 1 hour
('2024-11-08 17:00:00', '2024-11-08 17:30:00', 'open', NULL, 2),     -- Kept as 30 minutes


-- Tanya (Tutor 3) Sessions
('2024-10-25 11:00:00', '2024-10-25 11:30:00', 'booked', 3, 3),    -- Khalos, kept as 30 minutes
('2024-10-25 16:00:00', '2024-10-25 16:30:00', 'open', NULL, 3),   -- Kept as 30 minutes
('2024-10-28 09:00:00', '2024-10-28 10:00:00', 'booked', 5, 3),    -- Liam, changed to 1 hour
('2024-10-28 14:00:00', '2024-10-28 14:30:00', 'open', NULL, 3),   -- Kept as 30 minutes
('2024-10-29 14:00:00', '2024-10-29 14:30:00', 'open', 7, 3),      -- Noah, kept as 30 minutes
('2024-10-29 15:30:00', '2024-10-29 16:30:00', 'booked', NULL, 3), -- Changed to 1 hour
('2024-10-30 15:00:00', '2024-10-30 15:30:00', 'booked', 9, 3),    -- Sophia, kept as 30 minutes
('2024-10-30 17:30:00', '2024-10-30 18:00:00', 'open', NULL, 3),   -- Kept as 30 minutes
('2024-11-01 11:30:00', '2024-11-01 12:00:00', 'booked', 2, 3),    -- Will, kept as 30 minutes
('2024-11-01 16:30:00', '2024-11-01 17:00:00', 'open', NULL, 3),    -- Kept as 30 minutes
('2024-11-04 12:00:00', '2024-11-04 12:30:00', 'open', 4, 3),      -- Emma, kept as 30 minutes
('2024-11-04 17:00:00', '2024-11-04 17:30:00', 'booked', NULL, 3),  -- Kept as 30 minutes
('2024-11-05 13:30:00', '2024-11-05 14:30:00', 'booked', 6, 3),    -- Olivia, changed to 1 hour
('2024-11-05 15:00:00', '2024-11-05 15:30:00', 'open', NULL, 3),    -- Kept as 30 minutes
('2024-11-06 12:30:00', '2024-11-06 13:00:00', 'booked', 8, 3),    -- Ava, kept as 30 minutes
('2024-11-06 17:30:00', '2024-11-06 18:00:00', 'open', NULL, 3),    -- Kept as 30 minutes
('2024-11-07 11:00:00', '2024-11-07 11:30:00', 'open', 10, 3),     -- Mason, kept as 30 minutes
('2024-11-07 16:00:00', '2024-11-07 16:30:00', 'booked', NULL, 3),  -- Kept as 30 minutes
('2024-11-08 13:00:00', '2024-11-08 13:30:00', 'booked', 1, 3),    -- Jack, kept as 30 minutes
('2024-11-08 15:00:00', '2024-11-08 15:30:00', 'open', NULL, 3),     -- Kept as 30 minutes


-- Jason (Tutor 4) Sessions
('2024-10-25 13:00:00', '2024-10-25 13:30:00', 'booked', 4, 4),    -- Emma, kept as 30 minutes
('2024-10-25 17:00:00', '2024-10-25 17:30:00', 'open', NULL, 4),   -- Kept as 30 minutes
('2024-10-28 10:30:00', '2024-10-28 11:00:00', 'booked', 6, 4),    -- Olivia, kept as 30 minutes
('2024-10-28 15:30:00', '2024-10-28 16:00:00', 'open', NULL, 4),   -- Kept as 30 minutes
('2024-10-29 15:00:00', '2024-10-29 16:00:00', 'booked', 8, 4),    -- Ava, changed to 1 hour
('2024-10-29 16:30:00', '2024-10-29 17:00:00', 'open', NULL, 4),   -- Kept as 30 minutes
('2024-10-30 16:00:00', '2024-10-30 16:30:00', 'open', 10, 4),     -- Mason, kept as 30 minutes
('2024-10-30 18:00:00', '2024-10-30 19:00:00', 'booked', NULL, 4),  -- Changed to 1 hour
('2024-11-01 13:30:00', '2024-11-01 14:00:00', 'booked', 1, 4),    -- Jack, kept as 30 minutes
('2024-11-01 17:30:00', '2024-11-01 18:00:00', 'open', NULL, 4),    -- Kept as 30 minutes
('2024-11-04 13:00:00', '2024-11-04 13:30:00', 'booked', 3, 4),    -- Khalos, kept as 30 minutes
('2024-11-04 14:30:00', '2024-11-04 15:00:00', 'open', NULL, 4),    -- Kept as 30 minutes
('2024-11-05 14:30:00', '2024-11-05 15:00:00', 'open', 5, 4),      -- Liam, kept as 30 minutes
('2024-11-05 16:00:00', '2024-11-05 16:30:00', 'booked', NULL, 4),  -- Kept as 30 minutes
('2024-11-06 13:30:00', '2024-11-06 14:00:00', 'booked', 7, 4),    -- Noah, kept as 30 minutes
('2024-11-06 18:00:00', '2024-11-06 18:30:00', 'open', NULL, 4),    -- Kept as 30 minutes
('2024-11-07 12:00:00', '2024-11-07 12:30:00', 'booked', 9, 4),    -- Sophia, kept as 30 minutes
('2024-11-07 17:00:00', '2024-11-07 17:30:00', 'open', NULL, 4),    -- Kept as 30 minutes
('2024-11-08 14:00:00', '2024-11-08 14:30:00', 'open', 2, 4),      -- Will, kept as 30 minutes
('2024-11-08 16:00:00', '2024-11-08 16:30:00', 'booked', NULL, 4),   -- Kept as 30 minutes


-- Josh (Tutor 5) Sessions
('2024-10-25 14:00:00', '2024-10-25 14:30:00', 'booked', 5, 5),    -- Liam, kept as 30 minutes
('2024-10-25 18:00:00', '2024-10-25 18:30:00', 'open', NULL, 5),   -- Kept as 30 minutes
('2024-10-28 12:30:00', '2024-10-28 13:00:00', 'booked', 7, 5),    -- Noah, kept as 30 minutes
('2024-10-28 17:30:00', '2024-10-28 18:00:00', 'open', NULL, 5),   -- Kept as 30 minutes
('2024-10-29 16:00:00', '2024-10-29 16:30:00', 'open', 9, 5),      -- Sophia, kept as 30 minutes
('2024-10-29 17:30:00', '2024-10-29 18:00:00', 'booked', NULL, 5),  -- Kept as 30 minutes
('2024-10-30 17:00:00', '2024-10-30 18:00:00', 'booked', 2, 5),    -- Will, changed to 1 hour
('2024-10-30 18:30:00', '2024-10-30 19:00:00', 'open', NULL, 5),   -- Kept as 30 minutes
('2024-11-01 14:30:00', '2024-11-01 15:00:00', 'booked', 4, 5),    -- Emma, kept as 30 minutes
('2024-11-01 18:30:00', '2024-11-01 19:00:00', 'open', NULL, 5),    -- Kept as 30 minutes
('2024-11-04 14:00:00', '2024-11-04 14:30:00', 'open', 6, 5),      -- Olivia, kept as 30 minutes
('2024-11-04 15:30:00', '2024-11-04 16:00:00', 'booked', NULL, 5),  -- Kept as 30 minutes
('2024-11-05 15:30:00', '2024-11-05 16:00:00', 'booked', 8, 5),    -- Ava, kept as 30 minutes
('2024-11-06 14:30:00', '2024-11-06 15:00:00', 'booked', 10, 5),   -- Mason, kept as 30 minutes
('2024-11-06 18:30:00', '2024-11-06 19:00:00', 'open', NULL, 5),    -- Kept as 30 minutes
('2024-11-07 13:00:00', '2024-11-07 13:30:00', 'booked', 1, 5),    -- Jack, kept as 30 minutes
('2024-11-07 18:00:00', '2024-11-07 18:30:00', 'open', NULL, 5),    -- Kept as 30 minutes
('2024-11-08 15:00:00', '2024-11-08 15:30:00', 'booked', 3, 5),    -- Khalos, kept as 30 minutes
('2024-11-08 17:00:00', '2024-11-08 17:30:00', 'open', NULL, 5);     -- Kept as 30 minutes

