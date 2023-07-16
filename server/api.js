const express = require('express');
const apiRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db')


apiRouter.get('/minions',(req,res) =>{
    res.send(getAllFromDatabase("minions"));
});

apiRouter.post('/minions',(req,res) =>{
    const userData = req.body;
    addToDatabase("minions",userData)
});

apiRouter.get('/minions/:minionId',(req,res) =>{
    const id = req.params.minionId;
    let uniqueItem = getFromDatabaseById("minions",id);
    res.send(uniqueItem);   
    
});

apiRouter.put('/minions/:minionId',(req,res) =>{
    const id = req.params.minionId;
    const userData = req.body;
    const updatedItem = updateInstanceInDatabase("minions",{...userData,id: id});
    res.sendStatus(200);
});

apiRouter.delete('/minions/:minionId',(req,res) =>{
    const id = req.params.minionId;
    let deletedItem = deleteFromDatabasebyId("minions",id);
    res.sendStatus(200);
});

// Idea routes
apiRouter.get('/ideas',(req,res) =>{
    res.send(getAllFromDatabase("ideas"));
});

apiRouter.post('/ideas',(req,res) =>{
    const userData = req.body;
    const newIdea = addToDatabase("ideas",userData);
    res.send(newIdea);
});

apiRouter.get('/ideas/:ideaId',(req,res) =>{
    const id = req.params.ideaId;
    let uniqueItem = getFromDatabaseById("ideas",id);
    res.send(uniqueItem);   
    
});

apiRouter.put('/ideas/:ideaId',(req,res) =>{
    const id = req.params.ideaId;
    const userData = req.body;
    const updatedItem = updateInstanceInDatabase("ideas",{...userData,id: id});
    res.sendStatus(200);
});

apiRouter.delete('/ideas/:ideaId',(req,res) =>{
    const id = req.params.ideaId;
    let deletedItem = deleteFromDatabasebyId("ideas",id);
    res.sendStatus(200);
});

// /api/meetings
apiRouter.get('/meetings',(req,res) =>{
    res.send(getAllFromDatabase("meetings"));
});

apiRouter.post('/meetings',(req,res) =>{
    const newMeeting = createMeeting();
    res.send(newMeeting);
});

apiRouter.delete('/meetings',(req,res) =>{
    let deletedItems = deleteAllFromDatabase('meetings');
    res.sendStatus(200);
});



module.exports = apiRouter;
