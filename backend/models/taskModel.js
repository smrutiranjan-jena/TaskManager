const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
    title: {
        type: String,
        min: 3,
        max: 16,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 240
    },
    duedate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["to-do", "in-progress", "completed"],
        default: "to-do",
        required: true
    },
    assignee: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)
module.exports = Task