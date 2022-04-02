const express = require('express');
const router = express.Router();

router.get('/' , (req , res)=>{
    res.status(200).json({message: 'getGoals'});
})

router.post('/' , (req , res)=>{
    res.status(200).json({message: 'setGoals'});
})

router.put('/:id' , (req , res)=>{
    res.status(200).json({message: `update Goals ${req.params.id}`});
})

router.delete('/:id' , (req , res)=>{
    res.status(200).json({message: `delete Goals ${req.params.id}`});
})

module.exports = router ; 