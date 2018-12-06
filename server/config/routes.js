console.log("inside of server/config/routes.js")

const Task = require("../controllers/tasks.js");

module.exports = function(app) {
    app.get('/tasks', function(req, res) {
        Task.getTasks(req, res);
    });
    app.get('/tasks/:id', function(req, res) {
        Task.getTask(req, res);
    });
    app.post('/tasks', function(req, res) {
        Task.createTask(req, res);
    });
    app.put('/tasks/:id', function(req, res) {
        Task.updateTask(req, res);
    });
    app.delete('/tasks/:id', function(req, res) {
        Task.deleteTask(req, res);
    });
}