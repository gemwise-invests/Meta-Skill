# mud-server

Game for interviews

![wesnoth-tiles.png](https://raw.githubusercontent.com/syzer/game-recruitment/master/client/assets/images/wesnoth-tiles.png)

## Getting Started


### Developing

- Run `npm install` to install server dependencies.

- Run `bower install` to install front-end dependencies.

- Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

- Run `npm install --global gulp`

- Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build --force` for building and `gulp serve --force` for preview.
`set -x NODE_ENV test` if you want bypass mandatory tokken

## Testing

Running `npm test` will run the unit tests with karma.


## Playing

One plays accessing API:

- `curl localhost:9000/api/status`
- `curl localhost:9000/api/actions/move`

- legal move (green tile)
`curl -X POST 'localhost:9000/api/actions/move'  -H "Content-type: application/json" -d '{"to":{"q": -3, "r": 3}}'`

- illegal move (to sea faring)
`curl -X POST 'localhost:9000/api/actions/move' -H "Content-type: application/json" -d '{"to":{"q": -6, "r": -5}}'`

- new movement api:
valid directions are [ 'n', 'ne', 'se', 's', 'sw', 'nw' ]

`curl -X POST 'localhost:9000/api/actions/move' -H "Content-type: application/json" -d '{"to":"up"}'`

`curl -X POST 'localhost:9000/api/actions/move' -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzBkMGFkMGQxMzU3OGQ4NDU1NmViYTkiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ2MDQ3MjU4MiwiZXhwIjoxNDYwNDkwNTgyfQ.YCmURip3xMhV8ySmydV1tVOBIGT2xP90tvXIldTOAZ4' -H 'Cookie: XSRF-TOKEN=ATUdw5PoTAo31JESi1njSjCiw1niFh4wuz4EE%3D; connect.sid=s%3AYWdCpGXQDq4zfAiM0TV_V9rQ_-8vdMDI.EBHcz1nUkZuetMEbZvaz0OnFXILasRKYUcciNP%2FeoIg; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NzBkMGFkMGQxMzU3OGQ4NDU1NmViYTkiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ2MDQ3MjU4MiwiZXhwIjoxNDYwNDkwNTgyfQ.YCmURip3xMhV8ySmydV1tVOBIGT2xP90tvXIldTOAZ4'\
 -H 'X-XSRF-TOKEN: ATUdw5PoTAo31JESi1njSjCiw1niFh4wuz4EE=' -H "Content-type: application/json" -d '{"to":"n"}'`
