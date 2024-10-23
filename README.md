# Zubi

A brief description of your project.

## Table of Contents

- [Introduction](#introduction)
- [Initialise Project](#initialiseproject)
- [Branches](#branches)
- [Running Server](#server)
- [Committing](#committing)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Endpoints](#endpoints)
- [Deployment](#deployment)
- [Index](#index)

## Introduction

This document serves as a comprehensive guide for the team to document new features, describe their functionality, and provide instructions for usage or implementation. It ensures consistency and clarity across the project, making it easier for team members to contribute, understand the purpose of changes, and collaborate effectively.

Each section of this document outlines important practices for:

- Writing clear and concise commit messages.
- Naming branches according to convention.
- Maintaining a standardized project file structure.

Following these guidelines will help streamline the development process, improve code quality, and ensure smooth integration of features.

## Inititialise Project

To start working on the project, after cloning or forking, run the command:

```
npm build
```

This will run npm install, compile the typescript into the `dist` folder with npx tsc, and `node ./dist/database/seed.js` to create the database with some initial data to work with.

## Server

To run a particular file, using `npm run runfile` and then the path to the file you want to run from the root dir.

To run the server.ts file, use `npm run server`. This project uses tsx to run typescript in node. It does not compile any typescript and runs similarly to how you would with `node fils.js`. For more information, visit [tsx](https://tsx.is/). The `--watch` flag in the command allows the server to watch for new changes made to the server file including its imports and automatically restart to display the changes.

To run the server in a mock deployment, use `npm run start` to run the server.js file.

To compile, use `npm run compile`. The project is configured to look at all files with `.ts` extension in the `src` folder to compile into the `dist` folder.

If you wish to change where the files are compiling from, edit the `include` property in the tsconfig.json file. Similarly, to change the output location, change the `outDir` property in the tsconfig.json.

## Branches

To keep the codebase organized and ensure clear understanding, we follow these branch naming conventions:

### Feature Branches:

- `feature/<short-description>` – Use this for adding new features.
  - Example: `feature/user-authentication`

### Bugfix Branches:

- `bugfix/<short-description>` – Use this for fixing bugs.
  - Example: `bugfix/fix-login-error`

### Hotfix Branches:

- `hotfix/<short-description>` – For urgent fixes that need to go directly into production.
  - Example: `hotfix/critical-security-patch`

### Other Branch Types:

- `chore/<short-description>` – For miscellaneous tasks that don't fit into features or bugfixes, such as updating dependencies or cleanup.
  - Example: `chore/update-dependencies`
- `test/<short-description>` – For branches specifically focused on testing.
  - Example: `test/integration-testing`

### Guidelines:

- Branch names should be all lowercase.
- Use hyphens (`-`) to separate words, not spaces or underscores.
- Keep branch names descriptive but concise.

## Committing

1. **feat**: A new feature for the user.

   - Example: `feat(auth): add login functionality`

2. **fix**: A bug fix for the user.

   - Example: `fix(button): correct hover state color`

3. **docs**: Documentation only changes.

   - Example: `docs(README): update setup instructions`

4. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.).

   - Example: `style(app): fix spacing issues`

5. **refactor**: Code changes that neither fix a bug nor add a feature.

   - Example: `refactor(user): optimize profile picture loading`

6. **perf**: A code change that improves performance.

   - Example: `perf(db): improve query performance for large datasets`

7. **test**: Adding missing tests or correcting existing tests.

   - Example: `test(profile): add unit tests for profile component`

8. **build**: Changes that affect the build system or external dependencies (e.g., `gulp`, `webpack`, `npm`).

   - Example: `build(deps): update webpack to v5`

9. **ci**: Changes to our CI configuration files and scripts (e.g., GitHub Actions, CircleCI, Travis).

   - Example: `ci(actions): add Node.js version matrix for testing`

10. **chore**: Other changes that don't modify `src` or `test` files, such as tooling, package updates, etc.

    - Example: `chore(deps): bump eslint version`

11. **revert**: Reverts a previous commit.

## Endpoints

### **TUTOR ENDPOINTS**

### Get All Tutors

- Endpoint: GET /tutors
- Example request: `http://localhost:3000/tutors`
- Description: Fetches a list of all available tutors.
- Response:

  - 200 OK: Returns an array of tutor objects.
  - 404 Not Found: If no tutors are found.

  - Example response:

```ts
[
  {
    id: 1,
    created_at: "2024-10-15 15:50:45",
    full_name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Tutor Lane",
    postal_code: "12345",
    phone_number: "07700900001",
    availability: null,
    fk_subject_id: null,
    fk_tutortype_id: null,
  },
  {
    id: 2,
    created_at: "2024-10-15 15:50:45",
    full_name: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Tutor St",
    postal_code: "54321",
    phone_number: "07700900002",
    availability: null,
    fk_subject_id: null,
    fk_tutortype_id: null,
  },
  {
    id: 3,
    created_at: "2024-10-15 15:50:45",
    full_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: "789 Tutor Blvd",
    postal_code: "11223",
    phone_number: "07700900003",
    availability: null,
    fk_subject_id: null,
    fk_tutortype_id: null,
  },
];
```

### Get Tutor By ID

- Endpoint: GET /tutors (with id query)
- Example request: `http://localhost:3000/tutors?id=2`
- Description: Fetches details of a specific tutor by their unique ID.
- Parameters:
  - id (path parameter): The ID of the tutor.
- Response:

  - 200 OK: Returns the tutor object if found.
  - 404 Not Found: If the tutor with the given ID does not exist.

- Example response:

```ts
{
	"id": 2,
	"created_at": "2024-10-15 15:50:45",
	"full_name": "Jane Smith",
	"email": "jane.smith@example.com",
	"address": "456 Tutor St",
	"postal_code": "54321",
	"phone_number": "07700900002",
	"availability": null,
	"fk_subject_id": null,
	"fk_tutortype_id": null
}
```

### Log in

- Endpoint: POST /login
- Example request: `http://localhost:3000/login`
- Description: Authenticates login using provided password
- Parameters:
  - Body: JSON object

Example request body:

```json
{
  "username": "khalos@zubi.com",
  "password": "jj"
}
```

#### Example responses:

- If correct:

```json
{
  "message": "Login successful",
  "user": {
    "id": 3,
    "full_name": "Khalos",
    "email": "khalos@zubi.com",
    "password_hash": "$21p0$jansdfj&&hbnsaf.YbghROGGZLpksTfgUJ2KXH.3meh4sTO"
  }
}
```

- If incorrect:

```json
{
  "message": "Incorrect username or password."
}
```

### **AUTHENTICATION ENDPOINTS**

### Check Authentication

- Endpoint: GET /login/check-auth
- Example request: `http://localhost:3000/login/check-auth`
- Description: Checks if user has previously logged in, using cookies stored in the browser or Postman/Insomnia

#### Example responses:

- If authenticated:

```json
{
  "authenticated": true,
  "user": {
    "id": 3,
    "full_name": "Khalos",
    "email": "khalos@zubi.com",
    "password_hash": "$2b$10$324312123.asdfasdfahsdfhsannn.3meh4sTO"
  }
}
```

- If not

```json
{
  "message": "Not authenticated"
}
```

### **SLOTS AND SESSIONS ENDPOINTS**

### Create Vacant Tutor Slot

- Endpoint: POST /booking/newslot
- Example request: `http://localhost:3000/booking/newslot`
- Description: Creates a new vacant tutor slot in the db with a given date and time
- Parameters:
  - Body: JSON object

Example request body:

```json
{
  "dateTime": "2024-10-27 09:00:00",
  "tutorID": "3"
}
```

#### Example responses:

- If successful:

```json
{
  "message": "Tutor availability created successfully"
}
```

- If not

```json
{
  "message": "Please enter a date and time"
}
```

### Book New Session

- Endpoint: POST /booking/newsession
- Example request: `http://localhost:3000/booking/session`
- Description: Changes a session from **open** to **booked** if that session exists and is unbooked. If session doesn't exist or is already booked, responds with error.

#### Example responses:

- If successful:

```json
{
  "message": "Session booked at 2024-10-27 10:00:00 with tutor ID 3"
}
```

- If session is already booked

```json
{
  "message": "Error: Session is already booked"
}
```

- If session doesn't exist

```json
{
  "message": "Error: No session found for time: 2024-10-27 11:00:00 and tutor ID: 3."
}
```

### Show All Slots for a Tutor

- Endpoint: GET /booking/tutorslots
- Example request: `http://localhost:3000/booking/tutorslots?id=2`
- Description: Retrieves all slots (open and booked associate with a tutor)
- Parameters:
  - Query: Id

#### Example responses:

- If successful:

```json
[
  {
    "id": 4,
    "created_at": "2024-10-23 08:44:34",
    "session_time": "2024-10-27 09:00:00",
    "booking_status": "open",
    "fk_student_id": null,
    "fk_tutor_id": 3
  },
  {
    "id": 6,
    "created_at": "2024-10-23 09:07:59",
    "session_time": "2024-10-27 09:00:00",
    "booking_status": "open",
    "fk_student_id": null,
    "fk_tutor_id": 3
  }
]
```

- If not

```json
{
  "message": "Error: No sessions found, does this tutor exist?"
}
```

## Testing

To conduct unit testing and integration testing for the routes, controllers and models, we use mocha, chai and supertest. These tools allow us to simulate HTTP requests, validate responses, and verify the correctness of the underlying project logic.

- Mocha: is our test framework, for organising and running our tests.
- Chai: an assertion library, that enables us to write human-readable assertions and validate that the actual results match our expectations.
- Supertest: simulate HTTP requests to our Express routes, making it easy to perform integration tests by invoking routes as if we were an actual user.

Below is an example of a unit test and an integration test:

`getTutor.test.ts`

```
describe("getTutorById should return tutor with given id argument.", ()=>{
    it("should return the tutor of id = 1", ()=>{
        const tutor: Tutor = {
            id: 1,
          full_name: "Itziar Cantero",
          email: "itziar.cantero@example.com",
          address: "456 Tutor St",
          postal_code: "54321",
          phone_number: "07700900002",
          description: "Hi! I’m Itziar and I’m so excited to start teaching Computer Science. I have a Master’s from MIT and like to sneak everywhere.",
          availability: '{"Monday": ["10:00-12:00", "14:00-16:00"], "Wednesday": ["10:00-12:00"], "Friday": ["14:00-16:00"]}',
          created_at: "2024-10-21 12:47:42",
          fk_subject_id: null,
          fk_tutortype_id: null,
          img_source: "https://images.unsplash.com/photo-1461039088886-b5c863279a0e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        };

        assert.deepEqual(getTutorById(1), tutor) // get tutor with id = 1 and check it is equal to the dummy data
    })
})
```

#### Breakdown

- describe: used to defined the test suite. The suite is titled, `"getTutorById should return tutor with given id argument."` to describe what the test suite is testing.
- it: describes the test case for specific functionality.
- assert: Provided by the Chai library, it enables assertions in tests, such as comparing actual results with expected ones. Commonly used methods include `assert.deepEqual` for deep comparisons of objects and `assert.strictEqual` for strict equality checks.

## File Structure

The following is the general file structure of the project. Each folder and file serves a specific purpose:

```
/
├── .github/
│ ├── PULL_REQUEST_TEMPLATE.md
│ └── workflows/
├── src/
| ├── controllers/
│ ├── database/
│ ├── models/
│ ├── routes/
│ ├── testing/
│ ├── utils/
│ ├── server.ts
│ └── index.ts
├── tests/
├── public/
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

## Deployment

The project is currently deployed on [Render.com](render.com). To deploy your own instance, create an account and, from your dashboard, click on `+ NEW` in the top navigation bar. Select `"Web Service"` and choose the repository you wish to deploy.

For deployment settings, set the root directory to `dist`, as this is where the compiled files are output. If you need to change the root directory, ensure the build and start commands are updated locally to reflect this change and pushed into your remote repository before deployment.

For the build command, use `npm run build`.
For the start command, use `npm run start`.

When choosing the instance type, select the tier that suits your needs. Be aware that if you opt for the free tier, resources will not be reserved for your project. This means it may take around one minute to spin up the service whenever it is accessed.

For environment variables, specify `PORT` and the port number for accessing the project. [Render.com](render.com) has reserved port numbers—more information can be found [here](https://docs.render.com/web-services#port-binding).

## Index

#### NPM Scripts

| Name    | Command                                                | Description                                                                                                                                                 |
| ------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build   | npm install && npx tsc && node ./dist/database/seed.js | Installs project depenecies, compile typescript files and seed the database with data.                                                                      |
| compile | npx tsc                                                | Compile `.ts` files from `src` to the `dist` folder.                                                                                                        |
| seed    | npx tsc && node ./dist/database/seed.js                | Compile `.ts` files and runs `seed.js` to create and seed the database.                                                                                     |
| server  | npx tsx watch ./src/server.ts                          | Run server locally using `server.ts`. Observe and restart the server whenever changes are saved.                                                            |
| start   | node dist/server.js                                    | Run server locally using `server.js`                                                                                                                        |
| runfile | npx nodemon --exec tsx                                 | Runs nodemon, which automatically restarts the application when files change, and uses tsx to execute the TypeScript files without needing to compile them. |
| test    | tsx node\*modules/.bin/mocha 'src/testing/\*\*/\_.ts'  | Run all TypeScript test files in the src/testing directory using Mocha with tsx to handle TypeScript execution without compilation.                         |
