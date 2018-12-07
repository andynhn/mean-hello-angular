console.log("inside of server/controllers/tasks.js");

const mongoose = require("mongoose"),
        Task = mongoose.model("Task");

// ES5 Syntax----------
module.exports = {
    getTasks: function(req, res){
        Task.find({}, function(err,tasks){
            if(err) {
                res.json({"status": "not ok", "errors": err})
            } else {
                res.json({"status": "ok", "tasks": tasks});
            }
        });
    },
    getTask: function(req, res){
        Task.findById(req.params.id, function(err, task) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok", "task": task});
            }
        });
    },
    createTask: function(req, res){
        var task = new Task(req.body);
        task.save(function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
    updateTask: function(req, res){
        Task.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, task) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
    deleteTask: function(req, res){
        Task.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    },
}

// ES6 Syntax:------------
// class Tasks {
//     getTasks(req, res){
//         Task.find({}, function(err,tasks){
//             if(err) {
//                 res.json({"status": "not ok", "errors": err})
//             } else {
//                 res.json({"status": "ok", "tasks": tasks});
//             }
//         });
//     }
//     getTask(req, res){
//         Task.findById(req.params.id, function(err, task) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok", "task": task});
//             }
//         });
//     }
//     createTask(req, res){
//         var task = new Task(req.body);
//         task.save(function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     updateTask(req, res){
//         Task.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, task) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
//     deleteTask(req, res){
//         Task.findByIdAndDelete(req.params.id, function(err) {
//             if(err) {
//                 res.json({"status": "not ok", "errors": err});
//             } else {
//                 res.json({"status": "ok"});
//             }
//         });
//     }
// }
// module.exports = new Tasks();