# Zubi

A brief description of your project.

## Table of Contents

- [Introduction](#introduction)
- [Initialise Project](#initialiseproject)
- [Branches](#branches)
- [Running Server](#server)
- [Committing](#committing)
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
This will run npm install, compile the typescript into the ```dist``` folder with npx tsc, and ```node ./dist/database/seed.js``` to create the database with some initial data to work with.


## Server

To run a particular file, using ```npm run runfile``` and then the path to the file you want to run from the root dir.

To run the server.ts file, use ```npm run server```. This project uses tsx to run typescript in node. It does not compile any typescript and runs similarly to how you would with ```node fils.js```. For more information, visit [tsx](https://tsx.is/). The ```--watch``` flag in the command allows the server to watch for new changes made to the server file including its imports and automatically restart to display the changes.

To run the server in a mock deployment, use ```npm run start``` to run the server.js file.

To compile, use ```npm run compile```. The project is configured to look at all files with ```.ts``` extension in the ```src``` folder to compile into the ```dist``` folder.

If you wish to change where the files are compiling from, edit the ```include``` property in the tsconfig.json file. Similarly, to change the output location, change the ```outDir``` property in the tsconfig.json.

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

The project is currently deployed on [Render.com](render.com). To deploy your own instance, create an account and, from your dashboard, click on ```+ NEW``` in the top navigation bar. Select ```"Web Service"``` and choose the repository you wish to deploy.

For deployment settings, set the root directory to ```dist```, as this is where the compiled files are output. If you need to change the root directory, ensure the build and start commands are updated locally to reflect this change and pushed into your remote repository before deployment.

For the build command, use ```npm run build```.
For the start command, use ```npm run start```.

When choosing the instance type, select the tier that suits your needs. Be aware that if you opt for the free tier, resources will not be reserved for your project. This means it may take around one minute to spin up the service whenever it is accessed.

For environment variables, specify ```PORT``` and the port number for accessing the project. [Render.com](render.com) has reserved port numbers—more information can be found [here](https://docs.render.com/web-services#port-binding).



## Index

#### NPM Scripts

| Name | Command | Description |
| ------------- | -------------| ------------- |
| build  | npm install && npx tsc && node ./dist/database/seed.js  | Installs project depenecies, compile typescript files and seed the database with data. |
| compile  | npx tsc  | Compile ```.ts``` files from ```src``` to the ```dist``` folder. |
| seed | npx tsc && node ./dist/database/seed.js | Compile ```.ts``` files and runs ```seed.js``` to create and seed the database. |
| server | npx tsx watch ./src/server.ts | Run server locally using ```server.ts```. Observe and restart the server whenever changes are saved. |
| start | node dist/server.js | Run server locally using ```server.js``` |
| runfile | npx nodemon --exec tsx | |