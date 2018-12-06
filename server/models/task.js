console.log("inside of server/models/task.js");

const mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, {timestamps: true})

mongoose.model("Task", TaskSchema);