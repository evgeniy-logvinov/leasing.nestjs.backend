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