# telechargement infinity

An e-commerce portfolio piece created to explore the design of an online store.

This project was designed using React, Express, and MongoDB.

[live site](https://telechargement-infinity.herokuapp.com/)

## Features

Users can:

- Browse the catalog
- View and edit their cart

## Setup

Requirements:

- Node.js v16.16.0
- npm v8.15.1^

In order to run this application, fork this repository and then in both `client/` and `api/`, run:

```
npm install
```

An `.env` file is required in `api/` with the following parameters:

```
NODE_ENV=*either development or production*
PORT=*port for local hosting*
MONGO_URI=*the mongoDB connection URI*
```

## Commands

To run in either development or production mode, ensure that $NODE_ENV in the .env file is set to the correct mode.

Concurrently is installed in the root, so to run in development mode, run:

```
npm run dev
```

This will start the api and client on ports $PORT (as defined in the .env file) and 3000, respectively.

To run in production mode, in `client/`, run:

```
npm run build
```

Then, in the root, run:

```
npm run start
```

The application will be accessible via localhost at $PORT.

#################################################################################
