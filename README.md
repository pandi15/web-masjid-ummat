## Installation

Following this installation:

```sh
git clone git@gitlab.com:masjid-ummat/web-masjid-kita.git

cd web-masjid-kita/
yarn install
or
npm i
```

**Environment**
- Create file `.env` in this folder
- Copy from `.env.example` to `.env`
- Follow this code in `.env`

```
NODE_PATH=src
REACT_APP_NODE_ENV=development
REACT_APP_VERSION=0.0.1

PORT=8001

REACT_APP_API_PROTOCOL=http
REACT_APP_API_HOST=localhost
REACT_APP_API_PORT=3000
REACT_APP_API_VERSION=

REACT_APP_TIME_ZONE=+07:00
```

**Running**

```sh
yarn start
or
npm start
```

## Server

```
http://localhost:8001
```