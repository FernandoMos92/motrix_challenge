# motrix_challenge

# 📝 Description

This content manager is a project for the technical challenge for a vacancy at Motrix.
It consists of a Back-end using Node.JS with Express and TypeORM, PostgreSQL to database, applying the concept of Clean Architecture and Clean Code.
So far it has four endpoints, one to fetch <strong>(GET)</strong> all content in the PosgreSQL database, create a new content <strong>(POST)</strong>, update a content <strong>(PUT)</strong> and also delete a content <strong>(DELETE)</strong>.

# 🎉 Features

- Create a new content;
- Edit a content;
- Update a content;
- Delete a content;

# 🧰 Installation

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
# ⌨ Development

## ⚙ Running the app

```bash
# development
yarn start
```

## 🧪 Running tests

```bash
# unit tests
yarn test
```
## 📏 Lint

Linting codebase

```bash
# issues are automatically fixed
yarn lint
```
# 📖 Documentation
[Doc API](https://documenter.getpostman.com/view/20873741/VUxPt6mD)
# 📦 Building

Before building application to production, make sure environment variables are
applied correctly

Building for production

```bash
yarn build
```

Running on production

```bash
yarn start:prod
```

# ✅ TODO

[ ] Add code of conduct file  
[ ] Add docker section to make project working through docker  
[ ] Add project files structure  
[ ] Add issue template file  
[ ] Add typeorm-seeding within seeds  
[ ] Check if env variables are loading correctly using  
[schema-validation](https://docs.nestjs.com/techniques/configuration#schema-validation)  
[ ] Track errors in production. Use [sentry.io](https://sentry.io) or similar

# 💻 Code style

The current code style is following `clean code`, some `design patterns` and
`SOLID` principles

# 🛠 Built with

- [jest](https://jestjs.io) - Jest is a delightful JavaScript Testing Framework
  with a focus on simplicity
- [supertest](https://visionmedia.github.io/superagent) - Small progressive
  client-side HTTP request library, and Node.js module with the same API
- [typeorm](https://typeorm.io) - Amazing ORM for TypeScript and JavaScript
  (ES7, ES6, ES5)

# 👷 Authors

- [**Fernando Mós**](https://github.com/FernandoMos92) fernandomosp@gmail.com -
  Full Stack Web Jr.

# 📝 License

Copyright © 2022 [**Fernando Mós**](https://github.com/FernandoMos92)
