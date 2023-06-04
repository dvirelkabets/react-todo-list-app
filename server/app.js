const fs = require("fs")
const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const port = 8080
app.listen(port)

app.use(express.json())

app.use(express.static(path.join(__dirname, '../todolist/build')))

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../todolist/build', 'index.html'))
    console.log('initial express')

})

app.get('/api/tasks', (req, res) => {
    fs.readFile('database.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Error in reading the json file')
        }
        //parse the data into a JS object
        const dbData = JSON.parse(data || '[]')
        res.json(dbData)
    })

})

app.post('/api/tasks', (req, res) => {
    //reading the data
    console.log('entered express')
    fs.readFile('database.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Error in reading the json file')
        }
        //parse the data into a JS object
        const dbData = JSON.parse(data || '[]')
        console.log('entered readFile')

        const taskWithId = {
            id: uuidv4(),
            ...req.body
        }

        console.log(taskWithId)
        //add the new data
        dbData.push(taskWithId)

        //strigify back into JSON
        const newJson = JSON.stringify(dbData, null, 2)

        //write the data into Json back
        fs.writeFile('database.json', newJson, err => {
            if (err) {
                console.error(err)
                return res.status(500).send('Error writing into database')
            }
            console.log('New task was saved')
            res.status(201).json(taskWithId)
        })
    })

})

app.delete('/api/tasks/:id',(req,res)=>{
    fs.readFile('database.json','utf-8',(err,data)=>{
        if (err){
            console.error(err)
            return res.status(500).send('Error in reading the json file')
        }
        const dbData = JSON.parse(data||'[]')
        const taskId = req.params.id

        const updatedData=dbData.filter(task=>task.id!==taskId)

        fs.writeFile('database.json', JSON.stringify(updatedData, null, 2), err => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing into database');
            }
            console.log('Task was deleted');
            res.status(200).send('Task deleted');
        })
    })
})