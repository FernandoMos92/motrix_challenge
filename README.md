# Motrix Challenge
# ๐ Description

This content manager is a project for the technical challenge for a vacancy at Motrix.
It consists of a Back-end using Node.JS with Express and TypeORM, PostgreSQL to database, applying the concept of Clean Architecture and Clean Code.
So far it has four endpoints, one to fetch <strong>(GET)</strong> all content in the PosgreSQL database, create a new content <strong>(POST)</strong>, update a content <strong>(PUT)</strong> and also delete a content <strong>(DELETE)</strong>.

<p style="align=center">
  <img src="./assets/Peek 03-09-2022 01-49.gif" />
</p>

# ๐ Features

- Create a new content;
- Edit a content;
- Update a content;
- Delete a content;
- Search a contet;

# ๐งฐ Installation
To start the application you must first enter the back-end repository and install the dependencies, the same goes for the front-end.
I recommend using the yarn package manager
```bash
yarn
```
or you can use
```bash
npm install
```

After installing the dependencies, you must enter the backend folder and run the following commands in separate terminals
```bash
docker-compose up && yarn dev
```

After the container uploads PostgreSQL and the back-end is running, we must start our front-end with the following command.

```bash
yarn start
```
## Prerequisites

- Linux
- Node v16 LTS
- Docker

Install yarn packages before continue

```bash
yarn 
```

## Setting up PostgreSQL database

- This is will make a new PostgreSQL running in the standard port `5432`
- Please shutdown any previous conflicting PostgreSQL instances before starting
  this

```bash
docker-compose up -d
```
# โจ Development

## โ Running the app

```bash
# development
yarn start
```

## ๐งช Running tests

```bash
# unit tests
yarn test
```
## ๐ Lint

Linting codebase

```bash
# issues are automatically fixed
yarn lint
```
# ๐ Documentation
[Documentation API](https://documenter.getpostman.com/view/20873741/VUxRR7EA)
# ๐ฆ Building

Before building application to production, make sure environment variables are
applied correctly

Building for production

```bash
yarn build
```

Running on production

```bash
yarn start
```

# โ TODO

- [ ] Deploy;
- [ ] Apply React Testing Library;
- [ ] Refactor the CSS code;

## Done
- [x] Each content must contain the following data:
      Title: short text, mandatory, without formatting;
      Body: long text, optional, with formatting (wysiwyg);
      Creation date: hidden, timestamp, auto-populated at creation time;
      Update date: hidden, timestamp, auto-populated on last modification;
- [x]  Every modification saved in the content must be registered as a new revision, never overwriting or erasing previous versions;
- [x] The modification history must display, in chronological order by the date of update, all versions of a specific content, enabling navigation between the different versions;
- [x] When viewing or listing the contents, the user must have access to the most up-to-date version of each content.
- [x] The front-end must be developed in React, with or without a framework;
- [x] The back-end must be developed in Node.js, with or without a framework;
- [x] The communication between the application and the data layer must be through a REST API;
- [x] All form fields must have proper validations;


# ๐ป Code style

The current code style is following `clean code`, some `design patterns` and
`SOLID` principles

# ๐? Built with

- [jest](https://jestjs.io) - Jest is a delightful JavaScript Testing Framework
  with a focus on simplicity
- [supertest](https://visionmedia.github.io/superagent) - Small progressive
  client-side HTTP request library, and Node.js module with the same API
- [typeorm](https://typeorm.io) - Amazing ORM for TypeScript and JavaScript
  (ES7, ES6, ES5)

# ๐ท Authors

- [**Fernando Mรณs**](https://github.com/FernandoMos92) fernandomosp@gmail.com -
  Full Stack Web Jr.

# ๐ License

Copyright ยฉ 2022 [**Fernando Mรณs**](https://github.com/FernandoMos92)
