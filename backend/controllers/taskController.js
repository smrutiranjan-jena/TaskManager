const Task = require("../models/taskModel")

const taskCltr = {}
taskCltr.addTask = async (req, res) => {
    const body = req.body
    const task = new Task(body)
    try {
        const taskDoc = await task.save()
        res.json(taskDoc)
    } catch (e) {
        res.json(e)
    }
}
taskCltr.listAllTask = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (e) {
        res.json(e)
    }
}
taskCltr.editTask = async (req, res) => {
    const body = req.body
    const id = req.params.id
    try {
        const task = await Task.findByIdAndUpdate(id, body, { unique: true, runValidators: true})
        res.json(task)
    } catch (e) {
        res.json(e)
    }
}
taskCltr.deleteTask = async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(id)
        res.json(task)
    } catch (e) {
        res.json(e)
    }
}
module.exports = taskCltr