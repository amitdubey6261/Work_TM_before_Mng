const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler( async (req , res) =>{
    res.status(200).json({message:"get goals"});
})

const setGoals = asyncHandler( async(req , res) =>{
    if(!req.body.text){
        res.status(404)
        throw new Error("please add text !")
    }
    res.status(200).json({message:"Set goals"});
})

//update goals
const updateGoals  = asyncHandler( async(req , res) =>{
    res.status(200).json({message:`Update goals${req.params.id}`});
})

//del goals
const deleteGoals  =asyncHandler( async (req , res) =>{
    res.status(200).json({message: `delete Goals ${req.params.id}`});
})

module.exports = {
    getGoals , 
    setGoals , 
    updateGoals , 
    deleteGoals , 
}