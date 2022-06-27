# leasing.nestjs.backend
Backend for Leasing app
<p align="center">
  <a href="https://tushar-chy.medium.com/a-simple-todo-application-with-nestjs-typeorm-postgresql-swagger-pgadmin4-jwt-and-docker-caa2742a4295" target="_blank"> <img src="https://repository-images.githubusercontent.com/180571949/1816f680-a221-11ea-8ae0-8d90df8436bb" alt="Nest Logo" /></a>
</p>

## Description

A simple TODO application under Docker environment.
* NestJS
* TypeORM
* PostgreSQL
* Swagger
* PGadmin4
* JWT
* Docker

Go to [Medium](https://tushar-chy.medium.com/a-simple-todo-application-with-nestjs-typeorm-postgresql-swagger-pgadmin4-jwt-and-docker-caa2742a4295) to get the full tutorial.

# Running the app on docker
## Docker build & start

```bash
# docker env build
$ docker-compose build

# docker env start
$ docker-compose up

# remove docker container (services & networks)
$ docker-compose down
```
## Migration

```bash
# generate migration
$ docker-compose run nestjs npm run typeorm:generate AnyNameYouLike

# run migration
$ docker-compose run nestjs npm run typeorm:run
```

# Running the app without docker

## Installation

```bash
$ npm install
```
## Migration

```bash
# generate migration
$ npm run typeorm:generate AnyNameYouLike

# run migration
$ npm run typeorm:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# leasing.nestjs.backend
Backend for Leasing app

https://github.com/TusharRoy23/todoAppOnNestJs

sudo chmod -R 777 ./pgdata
sudo chmod -R 777 ./pgadmin-data/

docker-compose up --build
<!-- docker-compose up --build -->
docker-compose run nestjs npm run typeorm:generate AnyNameYouLike
docker-compose run nestjs npm run typeorm:run

remove all and migrations too and start build

### Exec commands from dovker postgresql
https://stackoverflow.com/questions/34688465/how-do-i-run-a-sql-file-of-inserts-through-docker-run
https://habr.com/ru/post/578744/

```
docker exec -u postgres postgres-db psql tododb postgres -f init.sql/init.sql
```



# Auth
## Endpoints
```
/auth/signin
/auth/signup
/auth/reset-required
/auth/reset-password/:id
/auth/confirm-email/:id
```

## Dtos
Auth user:
```
{
  id: uuid;
  email: uuid;
  password: uuid;
  resetPasswordId: uuid;
  isEmailConfirmed: uuid;
  salt: string;
  baseUserId: uuid;
}
```
Base user:
```
{
  id: uuid;
  createdDate: date;
  updatedDate: date;
  roleId: date;
}
```
Role:
```
{
  id: uuid;
  name: string;
}
```
Permission:
```
{
  id: uuid;
  name: string;
}
```
Relation between Role and Permission ManyToMany
## Logic
In application possible to register only admin user. After that admin can register different types of users, for example companies, clients and etc.
In case when it is needed to register different types of users, register dto need to contains user type. And when start create user, related role need to be mapped to selected user type(Company, client and etc).
### Signup
User came to signup page and fill fields: email, password and confirm password. After that user click signun button and send request to the backend. If all fine, than user created and confirmation email is sent to user email. What can be wrong on this case: 
* password and confirmPassword can be different
* validation for email field: uniq, length(4-20), not a string or not an email
* validation for password length(6-20), too weak
After that user need to open email and confirmEmail.
User can signin but, while user not confirmed account will be colored. and in future can be delete. If user open link and click confirm, frontend send a request to the backend and change confirmationFlag to true. After that user can close confirmation page.

### SignIn
User open signin page and fill email, password.
Aftert that he need to click signin button and send request to the backend.
What can be wrong in this case:
* wrong email
* wrong password
* (optional) password can be expired. in this option user need to reset password using email.

### Reset-password
Here we have two cases:
1. User want to reset password.
2. Admin invite user by email.

In the first case user came to the page reset password and fill email and click reset password. After that he send request to the backend where in dto for user we add uuid in the field resetPasswordId and send email contains this id. After that user open link from email and type new password, click on button confirm password and after that his password reset. User redirected to the page signin.

In the second case user gets email with resetPasswordId. User open link from email and type new password, click on button confirm password and after that his password reset. User redirected to the page signin.

# Environment
DB_TYPE=postgres
POSTGRES_HOST=postgres-db
POSTGRES_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DB_NAME=tododb
POSTGRES_USER=postgres
DB_USERNAME=postgres
DB_PASSWORD=postgres
JWT_SECRET=anyKey
APP_EXPIRES=3600
PGADMIN_DEFAULT_EMAIL=postgres@mail.com
PGADMIN_DEFAULT_PASSWORD=admin12
PGADMIN_LISTEN_PORT=80
APP_PORT=3000
BASE_URL_FE=http://localhost:3001/ path to frontend
CONFIRM_PATH_FE=public/confirm-email/ path to confirm page on frontend without baseUrl. In the end backend will add uuid of the user -> http://localhost:3001/public/confirm-email/:uuid
RESET_PASSWORD_PATH_FE=public/reset-password/ path to reset page on frontend without baseUrl. In the end backend will add uuid of the reset request -> http://localhost:3001/public/reset-password/:uuid