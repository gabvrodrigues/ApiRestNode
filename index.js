const express = require('express');
const server = express();

server.use(express.json());

const projects = [];
var nReq = 0;

function checkProjectInArray(req, res, next) {
    const { id } = req.params;
    const index = projects.findIndex(el => el.id == id);
    if(index < 0)
    {
        return res.status(400).json({"error" : "Project does not exists!"});
    }

    req.index = index;
    return next();
}

function countReqNumber(req, res, next) {
    nReq++;
    console.log(`Request Count: ${nReq}`);
    return next();
}

server.post('/projects', countReqNumber, (req, res) => {
    const { id, title } = req.body;

    projects.push({'id' : id, 'title' : title, 'tasks' : []});

    return res.json(projects);

});

server.get('/projects', countReqNumber, (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', countReqNumber, checkProjectInArray, (req, res) => {
    const { title } = req.body;

    projects[req.index].title = title;

    return res.json(projects);
});

server.delete('/projects/:id', countReqNumber, checkProjectInArray, (req, res) => {
    projects.splice(req.index, 1);

    return res.send();
});

server.post('/projects/:id/tasks', countReqNumber, checkProjectInArray, (req, res) => {
    const { title } = req.body;

    projects[req.index].tasks.push(title);

    return res.json(projects);

});


server.listen(3000);