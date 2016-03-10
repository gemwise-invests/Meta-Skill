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
