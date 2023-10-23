const express = require('express')
const cors = require('cors')
const configureDB = require('./config/configureDB')
const taskCltr = require('./controllers/taskController')
const port = 3009
const app = express()
app.use(cors())
app.use(express.json())
configureDB()

//Task routes ------------------------------------------
app.post('/api/users/tasks', taskCltr.addTask)
app.get('/api/users/tasks/all', taskCltr.listAllTask)
app.put('/api/users/tasks/:id', taskCltr.editTask)
app.delete('/api/users/tasks/:id', taskCltr.deleteTask)

app.listen(port, () => {
    console.log('server is running at port ', port)
})