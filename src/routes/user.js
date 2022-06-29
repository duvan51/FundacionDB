const express = require('express');
const userShema = require('../models/user');


const router = express.Router();


//create user
router.post('/users', (req, res)=>{  
       
    const user = userShema(req.body)
    user.save()
        .then((data)=>res.json(data))
        .catch((err)=>res.json({ message : err }));
});
//get all users
router.get('/users', (req, res)=>{  
    userShema   
        .find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json({ message : err }));
});
//get a users by id
router.get('/users/:id', (req, res)=>{  
    const { id } = req.params;
    userShema   
        .findById(id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json({ message : err }));
});
//update by id
router.put('/users/:id', (req, res)=>{  
    const { id } = req.params;
    const { name,age,email } = req.body;
    userShema   
        .updateOne({_id: id},{$set: {name, age, email}})
        .then((data)=>res.json(data))
        .catch((err)=>res.json({ message : err }));
});
//delete by id
router.delete('/users/:id', (req, res)=>{  
    const { id } = req.params;
    userShema   
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((err)=>res.json({ message : err })); 
    console.log(`delted user ${id}`)
});






module.exports = router;