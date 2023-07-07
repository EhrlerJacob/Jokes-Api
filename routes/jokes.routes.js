const jokeController = require("../controllers/jokeController");


module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes);
    app.get('/api/jokes/:id', jokeController.findJoke);
    app.post('/api/jokes', jokeController.createJoke);
    app.put('/api/jokes/:id', jokeController.updateJoke);
    app.delete('/api/jokes/:id', jokeController.deleteJoke);
}
