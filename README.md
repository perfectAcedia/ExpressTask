# Express Task

## Overview

Express Task is a web application built with Express.js that provides endpoints for user management, student statistics, and articles. This README.md file serves as a guide on how to install, run, and use the application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [User Management](#user-management)
  - [Student Statistics](#student-statistics)
  - [Articles](#articles)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/perfectAcedia/ExpressTask.git
```
Go to the created directory
```bash
cd ExpressTask
```
Install dependencies:
```bash
npm install
```
Start the application:
```bash
npm run start
```
The application will be running at http://localhost:3000(You can change it it main.js file)


## Usage
- Make requests to the provided routes as described in the [Routes](#routes) section.
-  Customize the application according to your requirements.

## Routes
1. User Management:

Create a user:
```bash
POST /api/users
```
Create a new user with the specified properties in the request body.

Get User by Email:
```bash
GET /api/users/:email
```
Retrieve information about a specific user by providing the user email as a parameter.

Update User:
```bash
PATCH /api/users
```
Update the information of a specific user.

Delete User by Email
:
```bash
DELETE /api/users/:email
```
Remove a specific user from the database.

2. Students statistics:

Get statistics for all students
```bash
GET /api/students
```
Retrieve information about all students.

Get Student with Worst Homework Score
```bash
GET /api/students/worst
```
Retrieve information about the student with the worst homework score.

3. Articles:

Create an Article
```bash
POST /api/articles
```
Create a new article with the specified properties in the request body.

Update Article Tags
```bash
PATCH /api/articles/:articleId
```
Update tags information of a specific article.


Search Articles
```bash
GET /api/articles
```
Route to retrieve all existing articles


## Contributing
If you want to contribute to this project, please follow the Contributing Guidelines.

## License
This project is licensed under the ISC License.
```bash
Feel free to check and modify the content as needed for your GitHub repository.
```
