# Quickstart Angular 4 with Angular CLI + NodeJS with Nest and Express

---

![Production start](https://image.prntscr.com/image/a5PmeiHtT5C20CVGss6MlA.png)

Production start

## Description

Starter repository for complete development with TypeScript. Main frameworks:

* [ExpressJS](https://github.com/expressjs/express)
* [Angular 4](https://github.com/angular/angular) with [Angular CLI](https://github.com/angular/angular-cli)
* [Nest](https://github.com/kamilmysliwiec/nest)

## Globals Required

* [Yarn](https://github.com/yarnpkg/yarn)

## Installation

```bash
$ git clone https://github.com/davidpvilaca/quickstart-nest-angular.git projectName
$ cd projectName
$ yarn
```

## Start

```bash
$ yarn start
```

Starts the application under development. This causes two servers to be started: The server with `webpack` by angular-cli and the back end server by `nest`. This will access the front end separately from the backend and the communication between the two will be done through environment variables configured in the `angular`.

Back: `localhost: 3000`
Front: `localhost: 4200`

In production the initiation will be given by: `$ npm start:prod`

## Production build

```bash
$ yarn build
```

The build will be mounted in the `dist` folder, which will be created at the root of the project. Inside the `dist` folder you will have the` server` and `client` folders containing the web server and the angular application 4 mounted respectively.

**Note**: When running `npm start: prod` the build in production will start automatically before starting the server.


## People

* Author - David Vilaça

## License

[MIT](LICENSE)
