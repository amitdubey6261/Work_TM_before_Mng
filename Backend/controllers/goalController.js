const getGoals = (req , res) =>{
    res.status(200).json({message:"get goals"});
}

const setGoals = (req , res) =>{
    res.status(200).json({message:"Set goals"});
}

//update goals
const updateGoals  = (req , res) =>{
    res.status(200).json({message:`Update goals${req.params.id}`});
}

//del goals
const deleteGoals  = (req , res) =>{
    res.status(200).json({message: `delete Goals ${req.params.id}`});
}

module.exports = {
    getGoals , 
    setGoals , 
    updateGoals , 
    deleteGoals , 
}